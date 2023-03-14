import { NavLink } from "react-router-dom";
import './arowlink.scss'

interface NavLinkProps {
    to: string
    className: string
    children: React.ReactNode
    state?: Object
}
export default function ArrowLink(props: NavLinkProps) {
    const { to, className, state, children } = props
    return (
        <NavLink
            to={to}
            className={`${className} --arowLink`}
            draggable={false}
            state={state}>
            {children}
            <span></span><span></span><span></span>
        </NavLink>
    )
}