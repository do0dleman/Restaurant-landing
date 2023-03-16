import { Link, LinkProps } from 'react-router-dom'
import './button.scss'
import { HashLink } from 'react-router-hash-link';
import { MouseEventHandler } from 'react';

interface ButtonProps {
    className: string
    children: React.ReactNode
    to: string
    state?: Object
    onClick?: MouseEventHandler<HTMLAnchorElement>
}
export default function Button(props: ButtonProps) {
    const { children, className, state, to, ...rest } = props
    return (
        <HashLink
            smooth
            to={to}
            state={state}
            className={`${className} --button`}
            {...rest}>{children}</HashLink>
    )
}