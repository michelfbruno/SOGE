import { createColumnHelper } from '@tanstack/react-table'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { PaginationTable } from '../../components/PaginationTable'
import * as S from './styles'
import { type Product } from '../../types/Product'
import { useNavigate } from 'react-router-dom'
import { Button } from '../../components/Button'
import { Plus } from 'react-feather'

export default function Products(): JSX.Element {
	const navigate = useNavigate()
	const [products, setProducts] = useState<Product[]>([])
	const columnHelper = createColumnHelper<Product>()
	const columns = useMemo(
		() => [
			columnHelper.accessor('id', {
				header: 'ID',
				cell: info => info.getValue(),
			}),
			columnHelper.accessor('name', {
				header: 'Nome',
				cell: info => info.getValue(),
			}),
			columnHelper.accessor('description', {
				header: 'Descrição',
				cell: info => info.getValue(),
			}),
			columnHelper.accessor('amount', {
				header: 'Quantidade',
				cell: info => info.getValue(),
			}),
			columnHelper.accessor('price', {
				header: 'Preço',
				cell: info => info.getValue(),
			}),
		],
		[]
	)

	const openProductId = (productId: number): void => {
		navigate(`/products/${productId}`)
	}

	const getProducts = useCallback(async (): Promise<void> => {
		const savedProductsJson = localStorage.getItem('products') as string
		const savedProducts = JSON.parse(savedProductsJson)
		setProducts(savedProducts ?? [])
	}, [])

	useEffect(() => {
		void getProducts()
	}, [])

	return (
		<>
			<S.TitleContainer>
				<S.Title>Produtos</S.Title>
				<div>
					<Button
						onClick={() => {
							navigate('/products/new')
						}}
					>
						<>
							<Plus /> Criar novo
						</>
					</Button>
				</div>
			</S.TitleContainer>
			<S.ProductsContainer>
				<PaginationTable
					data={products}
					columns={columns}
					redirectKey="id"
					onRowClick={openProductId}
				/>
			</S.ProductsContainer>
		</>
	)
}
