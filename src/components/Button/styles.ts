import styled from 'styled-components'

export const Button = styled.button`
	outline: none;
	border: none;
	background: ${props => props.theme.colors.dark.button.normal};
	color: ${props => props.theme.colors.dark.text.onFill};
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 8px 16px;
	cursor: pointer;
	border-radius: 0px;
	text-transform: uppercase;
	font-weight: ${props => props.theme.textStyles.button.desktop.fontWeight};
	line-height: ${props => props.theme.textStyles.button.desktop.lineHeight};
	text-decoration: ${props =>
		props.theme.textStyles.button.desktop.textDecoration};
	font-size: ${props => props.theme.textStyles.button.desktop.fontSize};

	&:hover {
		background: ${props => props.theme.colors.dark.button.hover};
	}
`
