import Container from "../../components/Container/Container";
import GrandTitle from "../../components/GrandTitle/GrandTitle";
import Hero from "../../components/Hero/Hero";
import './reservationCTA.scss'

export default function ReservationCTA() {
    return (
        <Hero className="reservation-cta">
            <Container className="reservation-cta__container">
                <GrandTitle
                    title="Reservation"
                    description='We have Chinese food, Japanese food, and Korean food'
                />
            </Container>
        </Hero>
    )
}