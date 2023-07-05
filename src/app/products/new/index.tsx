import { useForm, type SubmitHandler } from 'react-hook-form'
import * as S from './styles'
import { type FormField } from '../../../types/FormField'
import { Form } from '../../../components/Form'
import { type Product } from '../../../types/Product'
import { useNavigate } from 'react-router-dom'

export default function CreateProduct(): JSX.Element {
	const navigate = useNavigate()
	const { register, handleSubmit } = useForm<Product>()

	const onSubmit: SubmitHandler<Product> = data => {
		const productsJson = localStorage.getItem('products') as string
		let products = JSON.parse(productsJson) as Product[]
		if (products == null) products = []
		const id = (products[products.length - 1]?.id ?? 0) + 1
		products.push({ ...data, id })
		localStorage.setItem('products', JSON.stringify(products))
		navigate('/products')
	}

	const fields: FormField[] = [
		{ name: 'name', displayName: 'Nome' },
		{ name: 'description', displayName: 'Descrição' },
		{ name: 'amount', displayName: 'Quantidade' },
		{ name: 'price', displayName: 'Preço' },
	]

	return (
		<>
			<S.Title>Criar Produto</S.Title>
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
