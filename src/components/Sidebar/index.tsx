import * as S from './styles'
import { Layers, Package } from 'react-feather'

interface SidebarRoute {
	name: string
	path: string
	icon: JSX.Element
}

export function Sidebar(): JSX.Element {
	const routes: SidebarRoute[] = [
		{ name: 'Produtos', path: '/products', icon: <Package /> },
		{ name: 'Compras', path: '/purchases', icon: <Layers /> },
	]

	return (
		<S.Sidebar>
			<S.Navigation>
				<S.NavigationTitle>MENU</S.NavigationTitle>
				{routes.map(route => (
					<S.NavigationItem key={route.name}>
						{route.icon}
						<S.NavigationLink to={route.path}>{route.name}</S.NavigationLink>
					</S.NavigationItem>
				))}
			</S.Navigation>
		</S.Sidebar>
	)
}
