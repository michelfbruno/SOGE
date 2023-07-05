import { useCallback, useEffect, useMemo, useState } from 'react'
import { PaginationTable } from '../../components/PaginationTable'
import { type Purchase } from '../../types/Purchase'
import * as S from './styles'
import { createColumnHelper } from '@tanstack/react-table'
import { Button } from '../../components/Button'
import { Plus } from 'react-feather'
import { useNavigate } from 'react-router-dom'

export default function Purchases(): JSX.Element {
	const navigate = useNavigate()
	const [purchases, setPurchases] = useState<Purchase[]>([])
	const columnHelper = createColumnHelper<Purchase>()
	const columns = useMemo(
		() => [
			columnHelper.accessor('id', {
				header: 'ID',
				cell: info => info.getValue(),
			}),
			columnHelper.accessor('amount', {
				header: 'Quantidade',
				cell: info => info.getValue(),
			}),
			columnHelper.accessor('product', {
				header: 'Produto',
				cell: info => info.getValue(),
			}),
			columnHelper.accessor('totalPrice', {
				header: 'Valor Total',
				cell: info => info.getValue(),
			}),
			columnHelper.accessor('user', {
				header: 'Usuário',
				cell: info => info.getValue(),
			}),
		],
		[]
	)

	const openPurchaseDetails = (purchaseId: number): void => {
		navigate(`/purchases/${purchaseId}`)
	}

	const getPurchases = useCallback(async (): Promise<void> => {
		const purchasesJson = localStorage.getItem('purchases') as string
		const savedPurchases = JSON.parse(purchasesJson) as Purchase[]
		setPurchases(savedPurchases ?? [])
	}, [])

	useEffect(() => {
		void getPurchases()
	}, [])

	return (
		<>
			<S.TitleContainer>
				<S.Title>Compras</S.Title>
				<div>
					<Button
						onClick={() => {
							navigate('/purchases/new')
						}}
					>
						<>
							<Plus /> Criar nova
						</>
					</Button>
				</div>
			</S.TitleContainer>
			<S.ContractsContainer>
				<PaginationTable
					redirectKey="id"
					data={purchases}
					columns={columns}
					onRowClick={openPurchaseDetails}
				/>
			</S.ContractsContainer>
		</>
	)
}
