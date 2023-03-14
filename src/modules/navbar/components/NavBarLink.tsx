import { NavLink, NavLinkProps } from "react-router-dom"

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
                to={to}
            >{children}</NavLink>
        </li>
    )
}