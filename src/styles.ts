import styled from 'styled-components'

export const Body = styled.div`
	background: ${props => props.theme.colors.dark.background.primary};
	overflow-y: hidden;
	height: 100vh;
	display: grid;
	grid-template-columns: 2fr 10fr;
`

export const Main = styled.main`
	padding: 24px;
	overflow-y: scroll;
`
