import {
	useReactTable,
	getCoreRowModel,
	getPaginationRowModel,
	flexRender,
	type ColumnDef,
} from '@tanstack/react-table'
import React from 'react'
import Select from 'react-select'
import * as S from './styles'
import { Button } from '../Button'
import { ChevronLeft, ChevronRight } from 'react-feather'

interface PaginationTableProps {
	data: any[]
	columns: Array<ColumnDef<any, any>>
	onRowClick: (rowId: number) => void
	redirectKey: string
}

export function PaginationTable({
	data,
	columns,
	onRowClick,
	redirectKey,
}: PaginationTableProps): JSX.Element {
	const table = useReactTable({
		data,
		columns,
		getPaginationRowModel: getPaginationRowModel(),
		getCoreRowModel: getCoreRowModel(),
	})

	return (
		<div>
			<S.Table>
				<thead>
					{table.getHeaderGroups().map(headerGroup => (
						<tr key={headerGroup.id}>
							{headerGroup.headers.map(header => (
								<S.Th key={header.id}>
									{header.isPlaceholder
										? null
										: flexRender(
												header.column.columnDef.header,
												header.getContext()
										  )}
								</S.Th>
							))}
						</tr>
					))}
				</thead>
				<S.TBody>
					{table.getRowModel().rows.map(row => (
						<S.Tr
							key={row.id}
							onClick={() => {
								onRowClick(row.getValue(redirectKey))
							}}
						>
							{row.getVisibleCells().map(cell => (
								<S.Td key={cell.id}>
									{flexRender(cell.column.columnDef.cell, cell.getContext())}
								</S.Td>
							))}
						</S.Tr>
					))}
				</S.TBody>
				<tfoot>
					{table.getFooterGroups().map(footerGroup => (
						<tr key={footerGroup.id}>
							{footerGroup.headers.map(header => (
								<th key={header.id}>
									{header.isPlaceholder
										? null
										: flexRender(
												header.column.columnDef.footer,
												header.getContext()
										  )}
								</th>
							))}
						</tr>
					))}
				</tfoot>
			</S.Table>
			<S.TablePagination>
				<S.TablePaginationButtons>
					<Button
						onClick={() => {
							table.setPageIndex(0)
						}}
						disabled={!table.getCanPreviousPage()}
					>
						Primeira
					</Button>
					<Button
						onClick={() => {
							table.previousPage()
						}}
						disabled={!table.getCanPreviousPage()}
					>
						<ChevronLeft />
					</Button>
					<Button
						onClick={() => {
							table.nextPage()
						}}
						disabled={!table.getCanNextPage()}
					>
						<ChevronRight />
					</Button>
					<Button
						onClick={() => {
							table.setPageIndex(table.getPageCount() - 1)
						}}
						disabled={!table.getCanNextPage()}
					>
						Última
					</Button>
				</S.TablePaginationButtons>
				<S.TablePaginationButtons>
					Página {table.getState().pagination.pageIndex + 1} de{' '}
					{table.getPageCount()}
				</S.TablePaginationButtons>
				<Select
					placeholder="Itens a exibir"
					options={[
						{ label: 'Exibir 10 itens por página', value: 10 },
						{ label: 'Exibir 20 itens por página', value: 20 },
						{ label: 'Exibir 30 itens por página', value: 30 },
						{ label: 'Exibir 40 itens por página', value: 40 },
						{ label: 'Exibir 50 itens por página', value: 50 },
					]}
					onChange={option => {
						table.setPageSize(option?.value ?? 10)
					}}
				/>
			</S.TablePagination>
		</div>
	)
}
