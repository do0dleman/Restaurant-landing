import { NavLink, NavLinkProps } from "react-router-dom"
import base from "../../../utils/base"

interface NavBarLinkProps extends NavLinkProps {

}
export default function NavBarLink(props: NavBarLinkProps) {
    const { to, children, ...rest } = props
    const className = "navbar__link"
    return (
        <li className="navbar__item">
            <NavLink
                draggable='false'
                {...rest}
                className={({ isActive }) => {
                    return isActive ?
                        `${className} ${className}-active` :
                        `${className}`
                }}
                to={`${base}${to}`}
            >{children}</NavLink>
        </li>
    )
}