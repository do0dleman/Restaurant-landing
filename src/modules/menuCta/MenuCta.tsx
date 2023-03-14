import Container from "../../components/Container/Container";
import GrandTitle from "../../components/GrandTitle/GrandTitle";
import Hero from "../../components/Hero/Hero";
import './menuCta.scss'

export default function MenuCta() {
    return (
        <Hero className="menu-cta">
            <Container className="menu-cta__container">
                <GrandTitle
                    className="menu-cta__grandTitle"
                    title="Main Menu"
                    description="We have Chinese food, Japanese food, and Korean food" />
            </Container>
        </Hero>
    )
}