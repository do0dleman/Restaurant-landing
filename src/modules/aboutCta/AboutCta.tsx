import Container from "../../components/Container/Container";
import GrandTitle from "../../components/GrandTitle/GrandTitle";
import Hero from "../../components/Hero/Hero";
import './aboutCta.scss'

export default function AboutCta() {
    return (
        <Hero className="about-cta">
            <Container className="about-cta__container">
                <GrandTitle
                    className="about-cta__grandtitle"
                    title="About"
                    description='48 Cuisine Restaurant. We have a wide variety of Asian  food.' />
            </Container>
        </Hero>
    )
}