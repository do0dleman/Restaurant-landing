import { NavLink } from "react-router-dom";
import Container from "../../components/Container/Container";
import './footer.scss'
export default function Footer() {
    return (
        <section className="footer">
            <Container className='footer__container'>
                <h4 className="footer__title">48 Cusine</h4>
                <ul className="footer__links">
                    <li>
                        <NavLink to={'/menu'}>
                            Menu
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/reservation'}>
                            Reservation
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/about'}>
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/contact us'}>
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