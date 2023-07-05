import type { SubmitHandler, UseFormRegister } from 'react-hook-form'
import { type FormField } from '../../types/FormField'
import { Button } from '../Button'
import { Input } from '../Input'
import * as S from './styles'

interface FormProps {
	fields: FormField[]
	onSubmit: SubmitHandler<any>
	register: UseFormRegister<any>
	submitButtonText: string
}

export function Form({
	fields,
	register,
	onSubmit,
	submitButtonText,
}: FormProps): JSX.Element {
	return (
		<form onSubmit={onSubmit}>
			<S.InputsContainer>
				{fields.map(field => (
					<Input
						name={field.displayName}
						key={field.name}
						register={register(field.name, field.options)}
					/>
				))}
			</S.InputsContainer>
			<S.SubmitContainer>
				<Button type="submit">{submitButtonText}</Button>
			</S.SubmitContainer>
		</form>
	)
}
