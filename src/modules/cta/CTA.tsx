import Container from "../../components/Container/Container";
import GrandTitle from "../../components/GrandTitle/GrandTitle";
import './cta.scss'

export default function CTA() {
    return (
        <section className="cta">
            <Container className={'cta__contaienr'}>
                <GrandTitle
                    className="cta__grandtitle"
                    title={'48 Cuisine'}
                    button
                    description={
                        'Welcome 48 Cuisine. We have a wide variety of Asian  food. Cooked by profesional chef.'
                    } />
            </Container>
        </section>
    )
}