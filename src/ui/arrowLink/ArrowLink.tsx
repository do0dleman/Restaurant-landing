import { NavHashLink } from "react-router-hash-link";
import base from "../../utils/base";
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
        <NavHashLink
            to={`${base}${to}`}
            className={`${className} --arowLink`}
            draggable={false}
            state={state}>
            {children}
            <span></span><span></span><span></span>
        </NavHashLink>
    )
}