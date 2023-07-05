import { ThemeProvider } from 'styled-components'
import { theme } from './theme'
import { Route, Routes } from 'react-router-dom'
import { GlobalStyle } from './globalStyles'

import { Layout } from './Layout'

import Contracts from './app/contracts'
import PurchaseDetails from './app/contracts/details'
import CreateContract from './app/contracts/new'
import Products from './app/products'
import ProductDetails from './app/products/details'
import CreateProduct from './app/products/new'

function App(): JSX.Element {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<h1>test</h1>} />

					<Route path="purchases" element={<Contracts />} />
					<Route path="purchases/:id" element={<PurchaseDetails />} />
					<Route path="purchases/new" element={<CreateContract />} />

					<Route path="products" element={<Products />} />
					<Route path="products/:id" element={<ProductDetails />} />
					<Route path="products/new" element={<CreateProduct />} />
				</Route>
			</Routes>
		</ThemeProvider>
	)
}

export default App
