import styled from 'styled-components'

export const Table = styled.table`
	width: 100%;
	border-spacing: 0;
	border-collapse: collapse;
`

export const Th = styled.th`
	text-align: left;
	color: ${props => props.theme.colors.dark.text.body};
	padding: 16px 0;
	border-bottom: 1px solid ${props => props.theme.colors.dark.border.divider};
`

export const TBody = styled.tbody``

export const Tr = styled.tr`
	border-bottom: 1px solid ${props => props.theme.colors.dark.border.divider};
	cursor: pointer;

	&:hover {
		background: ${props => props.theme.colors.dark.background.tertiary};
	}
`

export const Td = styled.td`
	color: ${props => props.theme.colors.dark.text.body};
	padding: 8px 0;
`

export const TablePagination = styled.div`
	display: flex;
	flex: 1;
	margin-top: 16px;
	justify-content: space-between;
`

export const TablePaginationButtons = styled.div`
	display: flex;
	color: ${props => props.theme.colors.dark.text.body};
`
