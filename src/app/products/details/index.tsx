import { useCallback, useEffect, useState } from 'react'
import * as S from './styles'
import { type Product } from '../../../types/Product'
import { useNavigate, useParams } from 'react-router-dom'
import { Button } from '../../../components/Button'

export default function ProductDetails(): JSX.Element {
	const navigate = useNavigate()
	const { id } = useParams()
	const [product, setProduct] = useState<Product>()

	const getProduct = useCallback(async () => {
		const productsJson = localStorage.getItem('products') as string
		const products = JSON.parse(productsJson) as Product[]
		const product = products.find(product => product.id === +(id as string))
		setProduct(product)
	}, [id])

	const deleteProduct = (): void => {
		const productsJson = localStorage.getItem('products') as string
		const products = JSON.parse(productsJson) as Product[]
		const index = products.findIndex(product => product.id === +(id as string))
		products.splice(index, 1)
		localStorage.setItem('products', JSON.stringify(products))
		navigate('/products')
	}

	useEffect(() => {
		void getProduct()
	}, [id])

	return (
		<>
			<S.DeleteFlex>
				<S.EntityDetailsTitle>Detalhes do Produto</S.EntityDetailsTitle>
				<div>
					<Button onClick={deleteProduct}>Apagar</Button>
				</div>
			</S.DeleteFlex>
			<S.EntityDetailsContainer>
				<S.EntityInfo>
					ID da Entidade: <br />
					{id}
				</S.EntityInfo>
				<S.EntityInfo>
					Nome: <br />
					{product?.name}
				</S.EntityInfo>
				<S.EntityInfo>
					Descrição: <br />
					{product?.description}
				</S.EntityInfo>
				<S.EntityInfo>
					Quantidade: <br />
					{product?.amount}
				</S.EntityInfo>
				<S.EntityInfo>
					Preço: <br />
					{product?.price}
				</S.EntityInfo>
			</S.EntityDetailsContainer>
		</>
	)
}
