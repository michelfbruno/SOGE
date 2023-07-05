import { useForm, type SubmitHandler } from 'react-hook-form'
import * as S from './styles'

import { type FormField } from '../../../types/FormField'
import { Form } from '../../../components/Form'
import { type Purchase } from '../../../types/Purchase'
import { type Product } from '../../../types/Product'
import { useNavigate } from 'react-router-dom'

export default function CreatePurchase(): JSX.Element {
	const navigate = useNavigate()
	const { register, handleSubmit } = useForm<Purchase>()

	const getProduct = (id: number): Product => {
		const productsJson = localStorage.getItem('products') as string
		const products = JSON.parse(productsJson) as Product[]
		const product = products.find(product => product.id === +id) as Product
		return product
	}

	const updateProduct = (id: number, amount: number): void => {
		const productsJson = localStorage.getItem('products') as string
		const products = JSON.parse(productsJson) as Product[]
		const index = products.findIndex(product => product.id === +id)
		products[index].amount -= amount
		localStorage.setItem('products', JSON.stringify(products))
	}

	const onSubmit: SubmitHandler<Purchase> = data => {
		const product = getProduct(data.product)
		const totalPrice = +(+product.price * data.amount).toFixed(2)
		const purchasesJson = localStorage.getItem('purchases') as string
		let purchases = JSON.parse(purchasesJson) as Purchase[]
		if (purchases == null) purchases = []
		const id = purchases[purchases.length - 1]?.id ?? 0
		purchases.push({ ...data, totalPrice, id: +id + 1 })
		localStorage.setItem('purchases', JSON.stringify(purchases))
		updateProduct(data.product, data.amount)
		navigate('/purchases')
	}

	const fields: FormField[] = [
		{ name: 'user', displayName: 'Cliente' },
		{ name: 'product', displayName: 'Produto' },
		{ name: 'amount', displayName: 'Quantidade' },
	]

	return (
		<>
			<S.Title>Registrar Compra</S.Title>
			<S.FormContainer>
				<Form
					fields={fields}
					register={register}
					onSubmit={handleSubmit(onSubmit)}
					submitButtonText="Criar"
				/>
			</S.FormContainer>
		</>
	)
}
