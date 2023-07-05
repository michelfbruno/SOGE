import type { RegisterOptions } from 'react-hook-form'

export interface FormField {
	name: string
	displayName: string
	options?: RegisterOptions<any, string>
}
