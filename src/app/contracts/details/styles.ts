import styled from 'styled-components'

export const DeleteFlex = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`

export const ContractDetailsContainer = styled.div`
	border-radius: 16px;
	padding: 16px;
	border: 1px solid ${props => props.theme.colors.dark.border.divider};
	background: ${props => props.theme.colors.dark.background.secondary};
	display: grid;
	grid-template-columns: repeat(2, 1fr);
`

export const ContractDetailsTitle = styled.h1`
	margin: 24px 0;
	color: ${props => props.theme.colors.dark.text.body};
	font-size: ${props => props.theme.textStyles.h1.desktop.fontSize};
	line-height: ${props => props.theme.textStyles.h1.desktop.lineHeight};
	text-decoration: ${props => props.theme.textStyles.h1.desktop.textDecoration};
	font-weight: ${props => props.theme.textStyles.h1.desktop.fontWeight};
`

export const ContractInfo = styled.p`
	color: ${props => props.theme.colors.dark.text.body};
	font-size: ${props => props.theme.textStyles.body.desktop.fontSize};
	line-height: ${props => props.theme.textStyles.body.desktop.lineHeight};
	text-decoration: ${props =>
		props.theme.textStyles.body.desktop.textDecoration};
	font-weight: ${props => props.theme.textStyles.body.desktop.fontWeight};
	margin-bottom: 16px;
`
