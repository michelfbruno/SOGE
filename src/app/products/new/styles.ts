import styled from 'styled-components'

export const Title = styled.h1`
	font-size: ${props => props.theme.textStyles.h1.desktop.fontSize};
	color: ${props => props.theme.colors.dark.text.body};
	margin-bottom: 40px;
`

export const FormContainer = styled.section`
	border-radius: 16px;
	padding: 16px;
	border: 1px solid ${props => props.theme.colors.dark.border.divider};
	background: ${props => props.theme.colors.dark.background.secondary};
`
