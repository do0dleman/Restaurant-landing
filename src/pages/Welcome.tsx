import CTA from "../modules/cta/CTA";
import OurMenu from "../modules/ourMenu/OurMenu";
import OurPhoto from "../modules/ourPhoto/OurPhoto";
import Place from "../modules/place/Place";
import Reservation from "../modules/reservations/Reservation";
import Story from "../modules/story/Story";

export default function Welcome() {
    return (
        <main>
            <CTA />
            <Story />
            <OurMenu />
            <Place />
            <OurPhoto />
            <Reservation />
        </main>
    )
}