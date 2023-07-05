import type { UseFormRegisterReturn } from 'react-hook-form'
import * as S from './styles'

interface InputProps {
	name: string
	placeholder?: string
	register: UseFormRegisterReturn
	error?: string
}

export function Input({
	name,
	register,
	placeholder,
	error,
}: InputProps): JSX.Element {
	return (
		<S.InputContainer>
			<S.Label>{name}</S.Label>
			<S.Input placeholder={placeholder ?? ''} {...register} />
			{error !== null && <S.Error>{}</S.Error>}
		</S.InputContainer>
	)
}
