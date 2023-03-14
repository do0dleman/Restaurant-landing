import { Link, LinkProps } from 'react-router-dom'
import './button.scss'

interface ButtonProps {
    className: string
    children: React.ReactNode
    to: string
    state?: Object
}
export default function Button(props: ButtonProps) {
    const { children, className, state, to } = props
    return (
        <Link to={to} state={state} className={`${className} --button`}>{children}</Link>
    )
}