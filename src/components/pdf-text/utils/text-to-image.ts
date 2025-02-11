import { createCanvas } from '../../signature-draw/utils/canvas'
import loadFont from '../../signature-text/utils/load-font'
import { clamp } from 'lodash-es'

interface GenerateOptions {
  /**
   * Canvas's element
   */
  canvas?: HTMLCanvasElement,
  /**
   * Text to be generated
   */
  text: string,
  /**
   * Image width
   */
  width: number,
  /**
   * Image height
   */
  height: number,
  /**
   * Text color
   */
  color: string,
  /**
   * Text font size
   */
  size: number,
  /**
   * Minimum font size
   */
  minSize: number,
  /**
   * Maximum font size
   */
  maxSize: number,
  /**
   * Autofit mode
   */
  fixedSize: boolean,
  /**
   * Text font family
   */
  font: string,
  /**
   * Text line height
   */
  lineHeight: number,
  /**
   * Text box padding
   */
  padding: number,
  /**
   * Label text
   */
  label?: string,
  /**
   * Label color
   */
  labelColor?: string,
  /**
   * Label font family
   */
  labelFont?: string,
  /**
   * Label font size
   */
  labelSize?: number,
}

function wrapText (context: CanvasRenderingContext2D, text: string, fontSize: number, lineHeight: number, fontFamily: string, maxWidth: number): string[] {
  const lines: string[] = []

  context.font         = `${fontSize}px ${JSON.stringify(fontFamily)}`
  context.textBaseline = 'top'

  let line = ''
  let i: number
  let test: string
  let metrics: TextMetrics

  for (const paragraph of text.split('\n')) {
    const words = paragraph.split(' ')

    for (i = 0; i < words.length; i++) {
      test    = words[i]
      metrics = context.measureText(test)

      while (metrics.width > maxWidth) {
        // Determine how much of the word will fit
        test    = test.slice(0, Math.max(0, test.length - 1))
        metrics = context.measureText(test)
      }

      if (words[i] !== test) {
        words.splice(i + 1, 0, words[i].slice(test.length))
        words[i] = test
      }

      test    = `${line + words[i]} `
      metrics = context.measureText(test)

      if (metrics.width > maxWidth && i > 0) {
        lines.push(line)

        line = `${words[i]} `
      } else
        line = test
    }

    lines.push(line)

    line = ''
  }

  return lines
}

export default async function generate (options: GenerateOptions) {
  const {
    text,
    color,
    padding,
    font,
    height,
    width,
    size,
    minSize,
    maxSize,
    fixedSize,
    label,
  } = options

  await loadFont(font)

  const canvas  = options.canvas ?? createCanvas(width, height)
  const context = canvas.getContext('2d')

  let y = padding

  if (label) {
    const labelSize  = options.labelSize ?? size
    const labelFont  = options.labelFont ?? font
    const labelColor = options.labelColor ?? color

    context.font         = `${labelSize}px ${JSON.stringify(labelFont)}`
    context.textBaseline = 'top'
    context.textAlign    = 'start'
    context.fillStyle    = labelColor

    context.fillText(label, padding, y)

    // eslint-disable-next-line unicorn/consistent-destructuring
    y += (labelSize * options.lineHeight)
  }

  if (text) {
    const maxWidth  = width - (padding * 2)
    const maxHeight = height - (y + padding)

    let fontSize   = size
    let lineHeight = fontSize * options.lineHeight
    let lines      = wrapText(
      context,
      text,
      fontSize,
      lineHeight,
      font,
      maxWidth,
    )

    if (!fixedSize) {
      let textHeight = (lines.length * lineHeight)
      let count      = 0

      do {
        const newFontSize = clamp(
          Math.round(((maxHeight / textHeight * fontSize) + fontSize) / 2),
          minSize,
          maxSize,
        )

        if (newFontSize === fontSize)
          break

        fontSize   = newFontSize
        lineHeight = fontSize * options.lineHeight
        lines      = wrapText(
          context,
          text,
          fontSize,
          lineHeight,
          font,
          maxWidth,
        )

        textHeight = (lines.length * lineHeight)
      } while (textHeight > maxHeight && ++count < 5 /* to avoid infinite loop */)
    }

    context.font         = `${fontSize}px ${JSON.stringify(font)}`
    context.textBaseline = 'top'
    context.textAlign    = 'start'
    context.fillStyle    = color

    context.font         = `${fontSize}px ${JSON.stringify(font)}`
    context.textBaseline = 'top'
    context.textAlign    = 'start'
    context.fillStyle    = color

    for (const line of lines) {
      context.fillText(line, padding, y)

      y += lineHeight
    }
  }

  return canvas.toDataURL('image/png')
}
