import Container from "../../components/Container/Container";
import MediumTitle from "../../ui/mediumTitle/MediumTitle";
import ReservationForm from "./components/reservationForm/reservationForm";
import './reservation.scss'

export default function Reservation() {
    return (
        <section className="reservation" id="reservation">
            <Container className="reservation__container">
                <MediumTitle className="reservation__title">
                    Reservation
                </MediumTitle>
                <ReservationForm />
            </Container>
        </section>
    )
}