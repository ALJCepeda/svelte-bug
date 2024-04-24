export const styles = {
	widthLimit: 1920,
	breakLg: 1150,
	breakMd: 1024,
	breakSm: 768,
	breakXs: 660,
	mobileLg: 420,
	primaryColor: '#0F137B',
	secondaryColor: '#FA00FF',
	tertiaryColor: '#00F0FF',
	primaryGradient: 'linear-gradient(53.22deg, #0F137B 16.09%, #FA00FF 192.11%)',
	secondaryGradient:
		'linear-gradient(53.22deg, #0F137B 16.09%, #00F0FF 192.11%)',
	goldGradient: 'linear-gradient(53.22deg, #FED500 26.09%, #FA00FF 160.11%)',
	black: '#111111',
	greyDark: '#707070',
	greyDarkHover: '#303030',
	greyLight: '#EBECF0',
	white: '#FFFFFF',
	gold: '#FED500',
	green: '#0ACC35',
	red: '#F12222',
	black25: 'rgba(0, 0, 0, 0.25)',
	black50: 'rgba(0, 0, 0, 0.5)',
	white75: 'rgba(255, 255, 255, 0.75)',
	facebookBlue: '#3578E5'
}

export const gradients = {
	'primary-gradient': 'linear-gradient(89deg, #0F137B 0%, #FA00FF 307.5%)',
	'primary-to-transparent-gradient':
		'linear-gradient(53.22deg, #0F137B 16.09%, rgba(255, 255, 255, 0))',
	'secondary-gradient':
		'linear-gradient(53.22deg, #0F137B 16.09%, #00F0FF 192.11%)',
	'gold-gradient': 'linear-gradient(89deg, #FED500 0%, #FA00FF 390%);',
	'performer-banner-gradient':
		'linear-gradient(rgba(17, 17, 17, 0) 34.99%, rgba(17, 17, 17, 0.5) 100%)',
	'event-item-gradient':
		'linear-gradient(rgba(17, 17, 17, 0) 42.71%, rgba(17, 17, 17, 0.9) 100%)',
	'performer-item-gradient':
		'linear-gradient(180deg, rgba(17, 17, 17, 0) 42.71%, rgba(17, 17, 17, 0.9) 100%)',
	'blue-gradient': 'linear-gradient(89deg, #0F137B 0%, #00F0FF 332.5%);',
	'dark-gradient':
		'linear-gradient(0deg, rgba(17, 17, 17, 0.6), rgba(17, 17, 17, 0.6))',
	'white-gradient':
		'linear-gradient(0deg, rgba(255, 255, 255, 1), rgba(255, 255, 255, 1))',
	'white-to-transparent-gradient':
		'linear-gradient(0deg, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0))'
}

export const screenSizes = {
	'mobile-sm': 320,
	mobile: 420,
	xs: 660,
	sm: 768,
	md: 1024,
	lg: 1150,
	xl: 1345,
	'2xl': 1920
}

export const screens = {
	'mobile-sm': `${screenSizes['mobile-sm']}px`,
	mobile: `${screenSizes.mobile}px`,
	xs: `${screenSizes.xs}px`,
	sm: `${screenSizes.sm}px`,
	md: `${screenSizes.md}px`,
	lg: `${screenSizes.lg}px`,
	xl: `${screenSizes.xl}px`,
	'2xl': `${screenSizes['2xl']}px`
}

export const colors = {
	primary: '#0F137B',
	secondary: '#FA00FF',
	tertiary: '#00F0FF',
	'facebook-blue': '#3578E5',
	'twitter-blue': '#1DA1F2',
	white: '#ffffff',
	black: {
		DEFAULT: '#111111',
		true: '#000000'
	},
	grey: {
		dark: {
			DEFAULT: '#707070',
			hover: '#303030'
		},
		light: '#EBECF0'
	},
	gold: '#FED500',
	green: '#0ACC35',
	red: '#F12222',
	transparent: 'transparent',
	current: 'currentColor'
}
