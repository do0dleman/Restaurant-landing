import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import Container from "../../components/Container/Container";
import useIsOnScrolTop from "../../hooks/useIsOnScrolTop";
import BurgerButton from "../../ui/burgerButton/BurgerButton";
import Button from "../../ui/button/Button";
import SmallTitle from "../../ui/smallTitle/SmallTitle";
import base from "../../utils/base";
import NavBarLink from "./components/NavBarLink";
import './navbar.scss'

export default function Navbar() {

    const [isOpened, setOpened] = useState(false)
    const isOnTop = useIsOnScrolTop()
    function HandleBurgerButtonClick() {
        setOpened(!isOpened)
    }
    function HandleLinkClick() {
        setOpened(false)
    }

    const location = useLocation()
    const [isSolid, setSolid] = useState(false)

    useEffect(() => {
        if (location.pathname === base + '/contact')
            setSolid(true)
        if (location.pathname !== base + '/contact')
            setSolid(false)
    }, [location])

    const containerClasses = [
        'navbar__container',
        isOpened ? 'navbar__container-active' : ''
    ].join(' ')

    const navbarClasses = [
        "navbar",
        isSolid ? 'navbar-solid' : '',
        isOnTop ? "navbar-on-top" : '',
    ].join(' ')

    return (
        <nav className={navbarClasses}>
            <BurgerButton
                className={'navbar__burgerbutton'}
                state={isOpened}
                function={HandleBurgerButtonClick} />
            <SmallTitle className="navbar__mobile-title">
                48 Cusine
            </SmallTitle>
            <Container className={containerClasses}>
                <ul className="navbar__list">
                    <NavBarLink to='/'
                        onClick={HandleLinkClick}>
                        Welcome
                    </NavBarLink>
                    <NavBarLink to='/menu'
                        onClick={HandleLinkClick}>
                        Menu
                    </NavBarLink>
                    <NavBarLink to='/reservations'
                        onClick={HandleLinkClick}>
                        Reservations
                    </NavBarLink>
                </ul>
                <h4 className="navbar__header">
                    48 Cusine
                </h4>
                <ul className="navbar__list">
                    <NavBarLink to='/about'
                        onClick={HandleLinkClick}>
                        About
                    </NavBarLink>
                    <NavBarLink to='/contact'
                        onClick={HandleLinkClick}>
                        Contact us
                    </NavBarLink>
                    <Button
                        onClick={HandleLinkClick}
                        to='/reservations#reservation'
                        className={'navbar__button'}
                    >Order Now</Button>
                </ul>
            </Container>
        </nav>
    )
}