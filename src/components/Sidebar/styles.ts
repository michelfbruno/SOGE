import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Sidebar = styled.aside`
	background: ${props => props.theme.colors.dark.background.secondary};
	padding-top: 24px;
	padding-bottom: 24px;
`

export const LogoContainer = styled.div`
	display: flex;
	justify-content: center;
	margin-bottom: 40px;
`

export const Logo = styled.img``

export const Navigation = styled.nav`
	height: 100%;
`

export const NavigationTitle = styled.p`
	font-size: ${props => props.theme.textStyles.overline.mobile.fontSize};
	color: ${props => props.theme.colors.dark.text.description};
	margin-left: 24px;
	margin-bottom: 16px;
`

export const NavigationItem = styled.div`
	display: flex;
	border-bottom: 1px solid ${props => props.theme.colors.dark.text.disabled};
	padding-bottom: 16px;
	padding-top: 16px;
	cursor: pointer;
	align-items: center;
	padding-left: 24px;
	box-sizing: border-box;
	color: ${props => props.theme.colors.dark.text.body};

	&:hover {
		background: ${props => props.theme.colors.dark.button.active};

		a {
			color: ${props => props.theme.colors.dark.text.body};
		}
	}
`

export const NavigationLink = styled(Link)`
	text-decoration: none;
	color: ${props => props.theme.colors.dark.text.description};
	margin-left: 16px;
`
