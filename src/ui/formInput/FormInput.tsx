import './forminput.scss'

interface FormInputProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {

}
export default function FormInput(props: FormInputProps) {
    const { className, ...rest } = props

    return (
        <input {...rest} className={`${className} --form-input`} />
    )
}