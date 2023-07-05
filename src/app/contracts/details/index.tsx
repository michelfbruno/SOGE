import { useNavigate, useParams } from 'react-router-dom'
import * as S from './styles'
import { useCallback, useEffect, useState } from 'react'
import { type Purchase } from '../../../types/Purchase'
import { Button } from '../../../components/Button'

export default function PurchaseDetails(): JSX.Element {
	const navigate = useNavigate()
	const { id } = useParams()
	const [purchase, setPurchase] = useState<Purchase>()

	const getPurchase = useCallback(async (): Promise<void> => {
		const purchaseJson = localStorage.getItem('products') as string
		const purchases = JSON.parse(purchaseJson) as Purchase[]
		const purchase = purchases.find(product => product.id === +(id as string))
		setPurchase(purchase)
	}, [id])

	const deletePurchase = (): void => {
		const purchasesJson = localStorage.getItem('purchases') as string
		const purchases = JSON.parse(purchasesJson) as Purchase[]
		const index = purchases.findIndex(
			purchase => purchase.id === +(id as string)
		)
		purchases.splice(index, 1)
		localStorage.setItem('purchases', JSON.stringify(purchases))
		navigate('/purchases')
	}

	useEffect(() => {
		void getPurchase()
	}, [id])

	return (
		<>
			<S.DeleteFlex>
				<S.ContractDetailsTitle>Detalhes da Compra</S.ContractDetailsTitle>
				<div>
					<Button onClick={deletePurchase}>Apagar</Button>
				</div>
			</S.DeleteFlex>
			<S.ContractDetailsContainer>
				<S.ContractInfo>
					ID da Compra: <br />
					{id}
				</S.ContractInfo>
				<S.ContractInfo>
					Produto: <br />
					{purchase?.product}
				</S.ContractInfo>
				<S.ContractInfo>
					Quantidade: <br />
					{purchase?.amount}
				</S.ContractInfo>
				<S.ContractInfo>
					Cliente: <br />
					{purchase?.user}
				</S.ContractInfo>
				<S.ContractInfo>
					Preço Total: <br />
					{purchase?.totalPrice}
				</S.ContractInfo>
			</S.ContractDetailsContainer>
		</>
	)
}
