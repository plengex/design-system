import defu from 'defu'
import { isNumber } from 'lodash-es'
import {
  BaseTourOptions,
  AbstractTour,
} from './base'
import { runAllHooks } from '../../steps/utils/hook'

enum TourDirection {
  FORWARD = 1,
  BACKWARD = -1,
}

export interface TourOptions extends BaseTourOptions {
  /**
   * Enable / disable highlight overlay
   * @default true
   */
  highlight: boolean,
  /**
   * Enable / disable dismiss button
   * @default true
   */
  dismissable: boolean,
  /**
   * Customize previous button label
   * @default 'Previous'
   */
  prevLabel: string,
  /**
   * Customize next button label
   * @default 'Next'
   */
  nextLabel: string,
  /**
   * Customize dismiss button label
   * @default 'Dismiss'
   */
  dismissLabel: string,
  /**
   * Customize finish button label
   * @default 'Finish'
   */
  finishLabel: string,
  /**
   * Timeout for waiting target appear
   * @default 3000
   */
  waitTimeout: number,
  /**
   * If true, skip to next step of got an error
   * If false, Tour will stop immediately
   * @default false
   */
  skipOnError: boolean,
  /**
   * Hook when tour finished
   */
  onFinished?: () => void | Promise<void>,
}

export class Tour extends AbstractTour<TourOptions> {
  index: number
  steps: AbstractTour[]
  onFinishedHooks: Array<() => void | Promise<void>>
  parent?: Tour

  /**
   * Step direction, 1 for forward (next), -1 for backward (prev)
   */
  direction: TourDirection

  constructor (options?: Partial<TourOptions>) {
    super(options as TourOptions)

    this.index           = -1
    this.direction       = TourDirection.FORWARD
    this.steps           = []
    this.onFinishedHooks = []
    this.options         = defu(options, {
      highlight   : true,
      dismissable : true,
      prevLabel   : 'Previous',
      nextLabel   : 'Next',
      dismissLabel: 'Dismiss',
      finishLabel : 'Finish',
      waitTimeout : 3000,
      skipOnError : false,
    })

    if (typeof options?.onFinished === 'function')
      this.onFinishedHooks.push(options.onFinished)
  }

  /**
   * Get current step index
   */
  public getIndex (): number {
    return this.getRealIndex() + (this.parent?.getIndex() ?? 0)
  }

  /**
   * Get total Step
   */
  public getTotal (): number {
    return this.parent?.getTotal() ?? this.getTotalChild()
  }

  /**
   * Count total step, including Sub-Tour
   */
  public getTotalChild (): number {
    let total = 0

    for (const step of this.steps) {
      total += step instanceof Tour
        ? step.getTotalChild()
        : 1
    }

    return total
  }

  /**
   * Calculate real index, including Sub-Tour
   */
  public getRealIndex (): number {
    let index = this.index

    for (let i = 0; i < this.index; i++) {
      const step = this.steps[i]

      if (step instanceof Tour)
        index += (step.getTotalChild() - 1)
    }

    return index
  }

  protected getCurrentStep () {
    return this.steps.at(this.index)
  }

  protected async runOnFinishedHooks () {
    await runAllHooks(this.onFinishedHooks)
  }

  /**
   * Execute current step
   */
  protected async run () {
    const step = this.getCurrentStep()

    try {
      await step.start()
    } catch (error) {
      if (import.meta.env.DEV)
        console.warn(error)

      if (this.getOptions().skipOnError || step.getOptions().skipOnError)
        await (this.direction < 0 ? this.prev(true) : this.next(true))
      else if (this.parent)
        throw error
      else
        await this.stop()
    }
  }

  /**
   * Goto previous step
   */
  public async prev (skipHook = false) {
    const toIndex = this.index - 1
    const from    = this.steps.at(this.index)
    const to      = this.steps.at(toIndex)

    if (toIndex < 0 && this.parent)
      await this.parent.prev()
    else if (skipHook || await this.runOnPrevHooks(to, from)) {
      await from.stop()

      this.index     = this.index - 1
      this.direction = TourDirection.BACKWARD

      await this.run()
    }
  }

  /**
   * Goto next step
   */
  public async next (skipHook = false) {
    const toIndex = this.index + 1
    const from    = this.steps.at(this.index)
    const to      = this.steps.at(toIndex)

    if (skipHook || await this.runOnNextHooks(to, from)) {
      if (toIndex < this.steps.length) {
        await from.stop()

        this.index     = this.index + 1
        this.direction = TourDirection.FORWARD

        await this.run()
      } else
        await this.finish()
    }
  }

  /**
   * Finishing step
   */
  async finish () {
    await this.runOnFinishedHooks()
    await (this.parent ? this.parent.next() : this.stop())
  }

  /**
   * Show and start the tour
   */
  public async start () {
    this.index     = 0
    this.direction = TourDirection.FORWARD

    if (this.parent)
      this.attach(this.parent)

    await this.run()
  }

  /**
   * Hide and stop the tour
   */
  public async stop () {
    await this.getCurrentStep().stop()

    if (this.parent)
      this.detach(this.parent)
  }

  protected findIndex (id: AbstractTour['name'] | AbstractTour): number {
    if (id instanceof AbstractTour)
      return this.steps.indexOf(id)

    return this.steps.findIndex((item) => item.name === id)
  }

  /**
   * Add Tour Step
   * @param step Step instance
   */
  public add (step: AbstractTour) {
    this.steps.push(step.setParent(this))

    return this
  }

  /**
   * Remove Step
   * @param id number of index, name or symbol
   */
  public remove (id?: number | AbstractTour['name'] | AbstractTour) {
    if (!id && this.parent)
      this.parent.remove(this)
    else {
      const index = isNumber(id) ? id : this.findIndex(id)

      if (index > -1)
        this.steps.splice(index, 1)
    }
  }
}
