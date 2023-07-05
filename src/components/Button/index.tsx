import * as S from './styles'

interface ButtonProps {
	onClick?: () => void
	disabled?: boolean
	children: string | JSX.Element
	type?: 'button' | 'submit'
}

export function Button({
	onClick,
	disabled,
	children,
	type = 'button',
}: ButtonProps): JSX.Element {
	return (
		<S.Button onClick={onClick} type={type} disabled={disabled}>
			{children}
		</S.Button>
	)
}
