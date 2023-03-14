import ReservationCards from "../modules/reservationCards/ReservationCards";
import ReservationCTA from "../modules/reservationCTA/ReservationCTA";
import Reservation from "../modules/reservations/Reservation";

export default function Reservations() {
    return (
        <main>
            <ReservationCTA />
            <ReservationCards />
            <Reservation />
        </main>
    )
}