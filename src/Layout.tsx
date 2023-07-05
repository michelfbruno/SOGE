import { Outlet } from 'react-router-dom'
import { Sidebar } from './components/Sidebar'
import * as S from './styles'

export function Layout(): JSX.Element {
	return (
		<>
			<S.Body>
				<Sidebar />
				<S.Main>
					<Outlet />
				</S.Main>
			</S.Body>
		</>
	)
}
