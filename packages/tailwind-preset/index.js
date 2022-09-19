const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  darkMode: 'class',
  theme   : {
    fontFamily: { sans: ['DM Sans', ...defaultTheme.fontFamily.sans] },
    fontSize  : {
      'xxs': [
        '0.6875rem',
        {
          lineHeight   : '1.36',
          letterSpacing: '0.025rem',
        },
      ],
      'xs': [
        '0.75rem',
        {
          lineHeight   : '1.33',
          letterSpacing: '0.025rem',
        },
      ],
      'sm': [
        '0.875rem',
        {
          lineHeight   : '1.4',
          letterSpacing: '0.015625rem',
        },
      ],
      'base': [
        '1rem',
        {
          lineHeight   : '1.25',
          letterSpacing: '0.03125rem',
        },
      ],
      'xl': [
        '1.25rem',
        {
          lineHeight   : '1.3',
          letterSpacing: '0.01375rem',
        },
      ],
      '2xl': [
        '1.5rem',
        {
          lineHeight   : '1.3',
          letterSpacing: '0.009375rem',
        },
      ],
      '4xl': ['2.25rem', '1.3'],
      '5xl': [
        '3rem',
        {
          lineHeight   : '1.3',
          letterSpacing: '-0.009375rem', // -0.15px
        },
      ],
      '6xl': [
        '3.75rem',
        {
          lineHeight   : '1.3',
          letterSpacing: '-0.01375rem', // -0.22px
        },
      ],
      '7xl': [
        '4.5rem',
        {
          lineHeight   : '1.3',
          letterSpacing: '-0.01875rem', // -0.3px
        },
      ],
    },
    fontWeight: {
      inherit   : 'inherit',
      thin      : 100,
      extralight: 200,
      light     : 300,
      normal    : 400,
      medium    : 500,
      semibold  : 600,
      bold      : 700,
      extrabold : 800,
      black     : 900,
    },
    colors: {
      base: {
        black: '#000000',
        white: '#ffffff',
      },
      gray: {
        0  : '#FAFAFA',
        5  : '#F3F3F3',
        10 : '#E7E7E8',
        15 : '#DBDBDC',
        20 : '#CFCFD1',
        25 : '#C2C3C5',
        30 : '#B6B8B9',
        35 : '#AAACAE',
        40 : '#9EA0A2',
        45 : '#929497',
        50 : '#86888B',
        55 : '#7A7C7F',
        60 : '#6E7074',
        65 : '#626468',
        70 : '#56585D',
        75 : '#4A4D51',
        80 : '#3D4145',
        85 : '#31353A',
        90 : '#25292E',
        95 : '#191D23',
        100: '#0D1117',
      },
      blue: {
        0      : '#F2F7FD',
        10     : '#BFD9F3',
        20     : '#80B2E8',
        30     : '#408BDD',
        40     : '#0065D1',
        DEFAULT: '#0065D1',
        50     : '#0056B2',
        60     : '#004C9D',
      },
      green: {
        0 : '#F4FBF6',
        10: '#C8ECD0',
        20: '#91D8A0',
        30: '#5AC571',
        40: '#23B242',
        50: '#1E9738',
        60: '#1A8531',
      },
      lightBlue: {
        0 : '#F2FBFC',
        10: '#C0EBF1',
        20: '#80D7E2',
        30: '#41C2D4',
        40: '#02AEC5',
        50: '#0294A7',
        60: '#018294',
      },
      orange: {
        0 : '#FFFBF4',
        10: '#FDE9C8',
        20: '#FAD391',
        30: '#F8BC5A',
        40: '#F5A623',
        50: '#D08D1E',
        60: '#B87C1A',
      },
      red: {
        0 : '#FEF5F4',
        10: '#F8CBCA',
        20: '#F29695',
        30: '#EB6261',
        40: '#E42E2C',
        50: '#C22725',
        60: '#AB2221',
      },
      gold: {
        0 : '#FBFAF2',
        10: '#EDE6BF',
        20: '#DBCC80',
        30: '#C9B340',
        40: '#B79A00',
        50: '#9C8300',
        60: '#897400',
      },
      yellow: {
        0 : '#FEFDF4',
        10: '#FBF5CA',
        20: '#F7EA95',
        30: '#F3E061',
        40: '#EFD52C',
        50: '#CBB525',
        60: '#B3A021',
      },
      lime: {
        0 : '#FAFEF5',
        10: '#E8F9CD',
        20: '#D1F39A',
        30: '#BAEC68',
        40: '#A3E635',
        50: '#8BC32D',
        60: '#7AAC28',
      },
      teal: {
        0 : '#F3FBFA',
        10: '#C4EDE6',
        20: '#88DBCE',
        30: '#4DCAB5',
        40: '#12B89C',
        50: '#0F9C85',
        60: '#0E8A75',
      },
      purple: {
        0 : '#F7F2FD',
        10: '#D7BFF3',
        20: '#AE80E8',
        30: '#8640DD',
        40: '#5E00D1',
        50: '#5000B2',
        60: '#46009D',
      },
      primary: {
        5      : '#F2F7FD',
        25     : '#BFD9F3',
        50     : '#80B2E8',
        75     : '#408BDD',
        100    : '#0065D1',
        DEFAULT: '#0065D1',
        focused: '#004C9D',
        hovered: '#0056B2',
      },
      secondary: {
        5      : '#F8F8F8',
        25     : '#DCDCDC',
        50     : '#B9B9B9',
        75     : '#969696',
        100    : '#737373',
        focused: '#565656',
        hovered: '#626262',
      },
      success: {
        5      : '#F4FBF6',
        25     : '#C8ECD0',
        50     : '#91D8A0',
        75     : '#5AC571',
        100    : '#23B242',
        focused: '#1A8531',
        hovered: '#1E9738',
      },
      info: {
        5      : '#F2FBFC',
        25     : '#C0EBF1',
        50     : '#80D7E2',
        75     : '#41C2D4',
        100    : '#02AEC5',
        focused: '#018294',
        hovered: '#0294A7',
      },
      warning: {
        5      : '#FFFBF4',
        25     : '#FDE9C8',
        50     : '#FAD391',
        75     : '#F8BC5A',
        100    : '#F5A623',
        focused: '#B87C1A',
        hovered: '#D08D1E',
      },
      danger: {
        5      : '#FEF5F4',
        25     : '#F8CBCA',
        50     : '#F29695',
        75     : '#EB6261',
        100    : '#E42E2C',
        focused: '#AB2221',
        hovered: '#C22725',
      },
      // gold: {
      //   5      : '#FBFAF2',
      //   25     : '#EDE6BF',
      //   50     : '#DBCC80',
      //   75     : '#C9B340',
      //   100    : '#B79A00',
      //   focused: '#897400',
      //   hovered: '#9C8300',
      // },
      // yellow: {
      //   5  : '#FEFDF4',
      //   25 : '#FBF5CA',
      //   50 : '#F7EA95',
      //   75 : '#F3E061',
      //   100: '#EFD52C',
      // },
      // lime: {
      //   5  : '#FAFEF5',
      //   25 : '#E8F9CD',
      //   50 : '#D1F39A',
      //   75 : '#BAEC68',
      //   100: '#A3E635',
      // },
      // teal: {
      //   5  : '#F3FBFA',
      //   25 : '#C4EDE6',
      //   50 : '#88DBCE',
      //   75 : '#4DCAB5',
      //   100: '#12B89C',
      // },
      // purple: {
      //   5  : '#F7F2FD',
      //   25 : '#D7BFF3',
      //   50 : '#AE80E8',
      //   75 : '#8640DD',
      //   100: '#5E00D1',
      // },
      inherit   : 'inherit',
      background: {
        25 : '#FDFDFD',
        50 : '#FAFAFA',
        75 : '#F8F8F8',
        100: '#F5F5F5',
      },
      body: {
        25 : '#C8C8C8',
        50 : '#919191',
        75 : '#5A5A5A',
        100: '#232323',
      },
      subtext: {
        25 : '#E8E8E8',
        50 : '#D1D1D1',
        75 : '#BABABA',
        100: '#A3A3A3',
      },
      overlay: {
        primary  : 'rgba(0, 0, 0, 0.2)',
        secondary: 'rgba(0, 0, 0, 0.1)',
      },
      black: '#000000',
      dark : {
        default: '#404040',
        50     : '#86888B',
        55     : '#7A7C7F',
        60     : '#6E7074',
        65     : '#626468',
        70     : '#56585D',
        75     : '#4A4D51',
        80     : '#3D4145',
        85     : '#31353A',
        90     : '#24292F',
        95     : '#232323',
        100    : '#000000',
      },
      grey : '#808080',
      light: {
        default: '#BFBFBF',
        60     : '#B6B8B9',
        65     : '#C2C3C5',
        70     : '#CFCFD1',
        75     : '#DBDCDD',
        80     : '#E7E8EA',
        85     : '#F3F4F5',
        90     : '#F7F8F9',
        95     : '#FAFBFC',
        100    : '#FCFDFE',
      },
      white      : '#FFFFFF',
      transparent: 'transparent',
      shimmer    : 'linear-gradient(90deg, rgba(249, 249, 250, 0.01) 0%, #EEEEEE 69.79%, rgba(245, 245, 245, 0.01) 100%)',
      labelBg    : 'linear-gradient(180deg, rgba(245, 247, 249, 0) 46.88%, #FFFFFF 46.88%)',
      subtextAlt : {
        25 : '#E7E7E7',
        50 : '#CFCFCF',
        75 : '#B7B7B7',
        100: '#9F9F9F',
      },
      backgroundAlt: {
        25 : '#F8F8F8',
        50 : '#F1F1F1',
        75 : '#E9E9E9',
        100: '#E2E2E2',
      },
      secondaryAlt: {
        25 : '#D3D3D3',
        50 : '#A8A8A8',
        75 : '#7D7D7D',
        100: '#515151',
      },
      alphaBlack: {
        10   : '#0000001A',
        20   : '#00000033',
        30   : '#0000004D',
        40   : '#00000066',
        50   : '#00000080',
        60   : '#00000099',
        70   : '#000000B2',
        80   : '#000000CC',
        90   : '#000000E5',
        light: '#0000000D',
      },
      alphaWhite: {
        10   : '#FFFFFF1A',
        20   : '#FFFFFF33',
        30   : '#FFFFFF4D',
        40   : '#FFFFFF66',
        50   : '#FFFFFF80',
        60   : '#FFFFFF99',
        70   : '#FFFFFFB2',
        80   : '#FFFFFFCC',
        90   : '#FFFFFFE5',
        light: '#FFFFFF0D',
      },
      blackWhite: {
        0  : '#000000',
        5  : '#FDFDFD',
        10 : '#FAFAFA',
        15 : '#F5F5F5',
        20 : '#E8E8E8',
        25 : '#DCDCDC',
        30 : '#D1D1D1',
        35 : '#C8C8C8',
        40 : '#BABABA',
        45 : '#B1B1B1',
        50 : '#A3A3A3',
        55 : '#969696',
        60 : '#919191',
        65 : '#808080',
        70 : '#737373',
        75 : '#626262',
        80 : '#5A5A5A',
        85 : '#565656',
        90 : '#404040',
        95 : '#232323',
        100: '#000000',
      },
      gradients: {
        secondary : 'linear-gradient(180deg, rgba(204, 204, 204, 0) 0%, #CCCCCC 49.8%)',
        background: 'linear-gradient(180deg, rgba(245, 245, 245, 0) 0%, #F5F5F5 40.1%)',
      },
    },
    borderRadius: {
      'none'   : '0rem',
      'tn'     : '0.25rem',
      'xs'     : '0.375rem',
      'sm'     : '0.438rem',
      'DEFAULT': '0.5rem',
      'md'     : '0.75rem',
      'lg'     : '0.875rem',
      'xl'     : '1rem',
      '2xl'    : '1.25rem',
      '3xl'    : '1.375rem',
      'full'   : '9999px',
    },
    boxShadow: {
      'sm'     : '0 1px 2px rgba(var(--tw-shadow-color, 0, 0, 0), 0.05)',
      'DEFAULT': '0 1px 3px rgba(var(--tw-shadow-color, 0, 0, 0), 0.1), 0 1px 2px rgba(var(--tw-shadow-color, 0, 0, 0), 0.06)',
      'md'     : '0 4px 6px -1px rgba(var(--tw-shadow-color, 0, 0, 0), 0.1), 0 2px 4px -1px rgba(var(--tw-shadow-color, 0, 0, 0), 0.06)',
      'lg'     : '0 10px 15px -3px rgba(var(--tw-shadow-color, 0, 0, 0), 0.1), 0 4px 6px -2px rgba(var(--tw-shadow-color, 0, 0, 0), 0.05)',
      'xl'     : '0 0 1px rgba(var(--tw-shadow-color, 0, 0, 0), 0.15), 0 8px 10px -6px rgba(var(--tw-shadow-color, 0, 0, 0), 0.1), 0 20px 25px -5px rgba(var(--tw-shadow-color, 0, 0, 0), 0.1)',
      '2xl'    : '0 25px 50px -12px rgba(var(--tw-shadow-color, 0, 0, 0), 0.25)',
      'inner'  : 'inset 2px 0 4px rgba(var(--tw-shadow-color, 0, 0, 0), 0.06), inset 0 4px 6px -1px rgba(var(--tw-shadow-color, 0, 0, 0), 0.06)',
      'none'   : 'none',
      'outline': '0 0 0 4px rgba(var(--tw-shadow-color, 220, 220, 220), 0.35)',
    },
    extend: {
      colors: {
        ...defaultTheme.colors.purple,
        purple: { 60: '#6E7074' },
      },
    },
  },
  plugins: [require('@privyid/tailwind-animation'), require('@privyid/tailwind-extended')],
}
