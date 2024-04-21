import { NavLink } from "react-router-dom";
import Container from "../../components/Container/Container";
import base from "../../utils/base"

import './footer.scss'

export default function Footer() {
    return (
        <section className="footer">
            <Container className='footer__container'>
                <h4 className="footer__title">48 Cusine</h4>
                <ul className="footer__links">
                    <li>
                        <NavLink to={`${base}/menu`}>
                            Menu
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={`${base}/reservations`}>
                            Reservation
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={`${base}/about`}>
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={`${base}/contact`}>
                            Contact Us
                        </NavLink>
                    </li>
                    <li>
                        <a href="https://www.facebook.com/">
                            Social Media
                        </a>
                    </li>
                </ul>
            </Container>
            <span className="footer__copyright">
                © 48 Cuisine Restaurant. All Rights Reserved. 2022
            </span>
        </section>
    )
}