import type { DesignSystem } from '../typings'

export const theme: DesignSystem = {
	textStyles: {
		largeText: {
			mobile: {
				fontSize: 32,
				fontWeight: 'bold',
				lineHeight: 1.5,
			},
		},
		h1: {
			mobile: {
				fontSize: 26,
				fontWeight: 'bold',
				lineHeight: 1.5,
			},
			desktop: {
				fontSize: 42,
				fontWeight: 'bold',
				lineHeight: 1.5,
			},
		},
		h2: {
			mobile: {
				fontSize: 24,
				fontWeight: 'bold',
				lineHeight: 1.5,
			},
			desktop: {
				fontSize: 32,
				fontWeight: 'bold',
				lineHeight: 1.5,
			},
		},
		h3: {
			mobile: {
				fontSize: 22,
				fontWeight: 'bold',
				lineHeight: 1.5,
			},
			desktop: {
				fontSize: 26,
				fontWeight: 'bold',
				lineHeight: 1.5,
			},
		},
		h4: {
			mobile: {
				fontSize: 20,
				fontWeight: 'bold',
				lineHeight: 1.5,
			},
			desktop: {
				fontSize: 22,
				fontWeight: 'bold',
				lineHeight: 1.5,
			},
		},
		h5: {
			mobile: {
				fontSize: 18,
				fontWeight: 'bold',
				lineHeight: 1.5,
			},
			desktop: {
				fontSize: 20,
				fontWeight: 'bold',
				lineHeight: 1.5,
			},
		},
		h6: {
			mobile: {
				fontSize: 16,
				fontWeight: 'bold',
				lineHeight: 1.5,
			},
			desktop: {
				fontSize: 18,
				fontWeight: 'bold',
				lineHeight: 1.5,
			},
		},
		button: {
			mobile: {
				fontSize: 16,
				fontWeight: 'bold',
				lineHeight: 1.5,
			},
			desktop: {
				fontSize: 16,
				fontWeight: 'bold',
				lineHeight: 1.5,
			},
		},
		subtitle: {
			mobile: {
				fontSize: 16,
				fontWeight: 'regular',
				lineHeight: 1.75,
			},
		},
		body: {
			mobile: {
				fontSize: 16,
				fontWeight: 'regular',
				lineHeight: 1.5,
			},
			mobileLink: {
				fontSize: 16,
				fontWeight: 'bold',
				lineHeight: 1.5,
				textDecoration: 'underline',
			},
			desktop: {
				fontSize: 16,
				fontWeight: 'regular',
				lineHeight: 1.75,
			},
			desktopLink: {
				fontSize: 16,
				fontWeight: 'regular',
				lineHeight: 1.75,
				textDecoration: 'underline',
			},
		},
		bodyAlt: {
			mobile: {
				fontSize: 14,
				fontWeight: 'regular',
				lineHeight: 1.5,
			},
			mobileLink: {
				fontSize: 14,
				fontWeight: 'regular',
				lineHeight: 1.5,
				textDecoration: 'underline',
			},
		},
		subtitleAlt: {
			mobile: {
				fontSize: 14,
				fontWeight: 500,
				lineHeight: 1.75,
			},
		},
		capture: {
			mobile: {
				fontSize: 12,
				fontWeight: 'regular',
				lineHeight: 1.5,
			},
			mobileLink: {
				fontSize: 12,
				fontWeight: 'regular',
				lineHeight: 1.5,
				textDecoration: 'underline',
			},
		},
		overline: {
			mobile: {
				fontSize: 10,
				fontWeight: 'regular',
				lineHeight: 1.5,
			},
			mobileLink: {
				fontSize: 10,
				fontWeight: 'regular',
				lineHeight: 1.5,
				textDecoration: 'underline',
			},
		},
	},
	colors: {
		dark: {
			text: {
				body: '#e8e8e8',
				description: '#67696b',
				placeholder: '#949497',
				onFill: '#e8e8e8',
				link: '#4a7ff8',
				visited: '#9DB7F9',
				alert: '#FF4B36',
				disabled: '#252728',
			},
			icon: {
				label: '#FFFFFF',
				active: '#7096F8',
				disabled: '#757578',
				alert: '#FF4B36',
			},
			button: {
				normal: '#4a7ff8',
				hover: '#3F72F6',
				active: '#3F72F6',
				disabled: '#949497',
			},
			background: {
				primary: '#161819',
				secondary: '#1f2123',
				tertiary: '#27292b',
			},
			border: {
				field: '#FFFFFF',
				divider: '#626264',
				focused: '#D18D0F',
				selected: '#7096F8',
				alert: '#FF4B36',
				disabled: '#949497',
			},
			status: {
				success: '#259D63',
				alert: '#FF4B36',
				warning: '#D18D0F',
			},
			chart: {
				primary: '#C5D7FB',
				secondary: '#9DB7F9',
			},
		},
		light: {
			text: {
				body: '#1A1A1C',
				description: '#626264',
				placeholder: '#757578',
				onFill: '#FFFFFF',
				link: '#003EE5',
				visited: '#0000BE',
				alert: '#EC0000',
				disabled: '#949497',
			},
			icon: {
				label: '#1A1A1C',
				active: '#003EE5',
				disabled: '#949497',
				alert: '#EC0000',
			},
			button: {
				normal: '#003EE5',
				active: '#0030B2',
				hover: '#0030B2',
				disabled: '#949497',
			},
			background: {
				primary: '#FFFFFF',
				secondary: '#F1F1F4',
				tertiary: '#F8F8FB',
			},
			border: {
				field: '#1A1A1C',
				divider: '#D8D8DB',
				focused: '#D18D0F',
				selected: '#003EE5',
				alert: '#EC0000',
				disabled: '#949497',
			},
			status: {
				success: '#259D63',
				alert: '#EC0000',
				warning: '#C16800',
			},
			chart: {
				primary: '#003EE5',
				secondary: '#4979F5',
			},
		},
	},
}
