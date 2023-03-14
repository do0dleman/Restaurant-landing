import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import Container from "../../components/Container/Container";
import useIsOnScrolTop from "../../hooks/useIsOnScrolTop";
import BurgerButton from "../../ui/burgerButton/BurgerButton";
import Button from "../../ui/button/Button";
import NavBarLink from "./components/NavBarLink";
import './navbar.scss'
export default function Navbar() {
    const [isOpened, setOpened] = useState(false)
    const isOnTop = useIsOnScrolTop()
    function HandleBurgerButtonClick() {
        setOpened(!isOpened)
    }

    const location = useLocation()
    const [isSolid, setSolid] = useState(false)
    useEffect(() => {
        if (location.pathname === '/contact')
            setSolid(true)
        if (location.pathname !== '/contact')
            setSolid(false)
    }, [location])
    const containerClasses = [
        'navbar__container',
        isOpened ? 'navbar__container-active' : ''
    ].join(' ')

    const navbarClasses = [
        "navbar",
        isOnTop ? "navbar-on-top" : '',
        isSolid ? 'navbar-solid' : '',
    ].join(' ')
    return (
        <nav className={navbarClasses}>
            <BurgerButton className={'navbar__burgerbutton'} function={HandleBurgerButtonClick} />
            <Container className={containerClasses}>
                <ul className="navbar__list">
                    <NavBarLink to='/'>
                        Welcome
                    </NavBarLink>
                    <NavBarLink to='/menu'>
                        Menu
                    </NavBarLink>
                    <NavBarLink to='/reservations'>
                        Reservations
                    </NavBarLink>
                </ul>
                <h4 className="navbar__header">
                    48 Cusine
                </h4>
                <ul className="navbar__list">
                    <NavBarLink to='/about'>
                        About
                    </NavBarLink>
                    <NavBarLink to='/contact'>
                        Contact us
                    </NavBarLink>
                    <Button
                        to='/reservations'
                        className={'navbar__button'}
                    >Order Now</Button>
                </ul>
            </Container>
        </nav>
    )
}