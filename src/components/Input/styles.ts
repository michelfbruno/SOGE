import styled from 'styled-components'

export const InputContainer = styled.div``

export const Input = styled.input`
	border: 1px solid ${props => props.theme.colors.dark.border.field};
	border-radius: 4px;
	color: ${props => props.theme.colors.dark.text.body};
	padding: 8px 16px;
	background: ${props => props.theme.colors.dark.background.tertiary};
	font-weight: ${props => props.theme.textStyles.body.desktop.fontWeight};
	font-size: ${props => props.theme.textStyles.body.desktop.fontSize};
	line-height: ${props => props.theme.textStyles.body.desktop.lineHeight};
	outline: none;
`

export const Label = styled.label`
	display: block;
	color: ${props => props.theme.colors.dark.text.body};
	font-weight: ${props => props.theme.textStyles.body.desktop.fontWeight};
	font-size: ${props => props.theme.textStyles.body.desktop.fontSize};
	line-height: ${props => props.theme.textStyles.body.desktop.lineHeight};
	margin-bottom: 8px;
`

export const Error = styled.p``
