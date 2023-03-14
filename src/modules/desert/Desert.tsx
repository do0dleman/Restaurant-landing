import Container from "../../components/Container/Container";
import GrandTitle from "../../components/GrandTitle/GrandTitle";
import Hero from "../../components/Hero/Hero";
import './desert.scss'

export default function Desert() {
    return (
        <Hero className="desert">
            <Container className='desert__container'>
                <GrandTitle
                    className="desert__grandtitle"
                    title={"Desert"} />
            </Container>
        </Hero>
    )
}