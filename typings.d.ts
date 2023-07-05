import 'styled-components'

export interface DesignSystem {
	textStyles: DesignSystemTextStyles
	colors: DesignSystemTheme
}

type HEX = `#${string}`
type JsColor = `0x${string}`
type RGB = `rgb(${number}, ${number}, ${number})`
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`
type Color = HEX | JsColor | RGB | RGBA
type FontWeight = 200 | 300 | 'regular' | 500 | 'bold' | 900

interface DesignSystemTheme {
	light: DesignSystemColors
	dark: DesignSystemColors
}

interface FontStyle {
	lineHeight: number
	fontSize: number
	fontWeight: FontWeight
	textDecoration?: 'underline'
}

interface DesignSystemTextStyles {
	largeText: {
		mobile: FontStyle
	}
	h1: {
		mobile: FontStyle
		desktop: FontStyle
	}
	h2: {
		mobile: FontStyle
		desktop: FontStyle
	}
	h3: {
		mobile: FontStyle
		desktop: FontStyle
	}
	h4: {
		mobile: FontStyle
		desktop: FontStyle
	}
	h5: {
		mobile: FontStyle
		desktop: FontStyle
	}
	h6: {
		mobile: FontStyle
		desktop: FontStyle
	}
	button: {
		mobile: FontStyle
		desktop: FontStyle
	}
	subtitle: {
		mobile: FontStyle
	}
	body: {
		mobile: FontStyle
		mobileLink: FontStyle
		desktop: FontStyle
		desktopLink: FontStyle
	}
	bodyAlt: {
		mobile: FontStyle
		mobileLink: FontStyle
	}
	subtitleAlt: {
		mobile: FontStyle
	}
	capture: {
		mobile: FontStyle
		mobileLink: FontStyle
	}
	overline: {
		mobile: FontStyle
		mobileLink: FontStyle
	}
}

interface DesignSystemColors {
	text: {
		body: Color
		description: Color
		placeholder: Color
		onFill: Color
		link: Color
		visited: Color
		alert: Color
		disabled: Color
	}
	icon: {
		label: Color
		active: Color
		disabled: Color
		alert: Color
	}
	button: {
		normal: Color
		hover: Color
		active: Color
		disabled: Color
	}
	background: {
		primary: Color
		secondary: Color
		tertiary: Color
	}
	border: {
		field: Color
		divider: Color
		focused: Color
		selected: Color
		alert: Color
		disabled: Color
	}
	status: {
		success: Color
		alert: Color
		warning: Color
	}
	chart: {
		primary: Color
		secondary: Color
	}
}

declare module 'styled-components' {
	export interface DefaultTheme extends DesignSystem {}
}
