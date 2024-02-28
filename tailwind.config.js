module.exports = {
  content: [
    './src/*.{html,js,vue}',
	'./src/**/*.{html,js,vue}'
  ],
  theme: {
	fontFamily: {
      'display': ['"Zilla Slab"', 'serif'],
      'body': ['"Libre Franklin"', 'sans-serif'],
    },
    extend: {
      boxShadow: {
        default: '0 1px 3px 0 rgba(0, 0, 0, .1), 0 1px 2px 0 rgba(0, 0, 0, .06)',
        md: ' 0 4px 6px -1px rgba(0, 0, 0, .1), 0 2px 4px -1px rgba(0, 0, 0, .06)',
        lg: ' 0 10px 15px -3px rgba(0, 0, 0, .1), 0 4px 6px -2px rgba(0, 0, 0, .05)',
        xl: ' 0 20px 25px -5px rgba(0, 0, 0, .1), 0 10px 10px -5px rgba(0, 0, 0, .04)',
        inner: 'inset 0 2px 4px 0 rgba(0,0,0,0.06)',
        outline: '0 0 0 3px rgba(96,171,210,0.5)',
        focus: '0 0 0 3px rgba(96,171,210,0.5)',
        'none': 'none',
      },
	    colors: {
	        'gray': {
	          100: '#F8F8F8',
	          200: '#D5D5D3',
	          300: '#B4B3B0',
	          400: '#93908D',
	          500: '#726E6B',
	          600: '#5E5B57',
	          700: '#4B4845',
	          800: '#373533',
	          900: '#242322',
	        },
	        'orange': {
	          100: '#FFEADC',
	          200: '#F7C5A4',
	          300: '#F0A16D',
	          400: '#E97D36',
	          500: '#E05A00',
	          600: '#C04B00',
	          700: '#9F3E00',
	          800: '#7D3100',
	          900: '#5C2500',
	        },
	        'green': {
	          100: '#F4FDE4',
	          200: '#CEE2AA',
	          300: '#AAC871',
	          400: '#85AD3A',
	          500: '#63921A',
	          600: '#558203',
	          700: '#4A7104',
	          800: '#3F6005',
	          900: '#354F0E',
	        },
	         'blue': {
	          100: '#EAF8FF',
	          200: '#BBDEF0',
	          300: '#8EC4E1',
	          400: '#60ABD2',
	          500: '#3994C1',
	          600: '#277CA7',
	          700: '#1B668B',
	          800: '#0F506F',
	          900: '#093B53',
	        },
	        'yellow': {
	          100: '#FFF7E4',
	          200: '#F9E7B9',
	          300: '#F4D88F',
	          400: '#EFC965',
	          500: '#E9B949',
	          600: '#CBA030',
	          700: '#AC8724',
	          800: '#8D6D18',
	          900: '#6E5416',
	        },
	        'red': {
	          100: '#FEEFEF',
	          200: '#EDBBB9',
	          300: '#DD8885',
	          400: '#CC5551',
	          500: '#BA2525',
	          600: '#A21A15',
	          700: '#89120E',
	          800: '#700A07',
	          900: '#560404',
	        }
	      }
      }
  },
  variants: {},
  plugins: []
}
