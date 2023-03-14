import Container from '../../components/Container/Container'
import Card from '../../ui/card/Card'
import ImageDiv from '../../ui/imageDiv/ImageDiv'
import './reservationCards.scss'
import img1 from './img/img1.jpg'
import img2 from './img/img2.jpg'
import img3 from './img/img3.jpg'
import SmallTitle from '../../ui/smallTitle/SmallTitle'

export default function ReservationCards() {
    return (
        <section className="reservation-cards">
            <Container className='reservation-cards__container'>
                <Card
                    className='reservation-cards__card'
                    imageDiv={<ImageDiv style={{ background: `url(${img1})` }} />}>
                    <SmallTitle className='reservation-cards__title'>
                        Individual
                    </SmallTitle>
                    <p className="reservation-cards__paragraph">
                        48 Cuisine restaurant is a suitable restaurant for private dinners, romantic dinners, family gatherings, and meetings.
                    </p>
                    <p className="reservation-cards__paragraph">
                        Make your dinner more special with our special restaurant menu.
                    </p>
                </Card>
                <Card
                    className='reservation-cards__card'
                    imageDiv={<ImageDiv style={{ background: `url(${img2})` }} />}>
                    <SmallTitle className='reservation-cards__title'>
                        Company
                    </SmallTitle>
                    <p className="reservation-cards__paragraph">
                        Our restaurant can be used for corporate meetings with custom-made decorations
                    </p>
                    <p className="reservation-cards__paragraph">
                        Make your meetings more special with our special restaurant menu.
                    </p>
                </Card>
                <Card
                    className='reservation-cards__card'
                    imageDiv={<ImageDiv style={{ background: `url(${img3})` }} />}>
                    <SmallTitle className='reservation-cards__title'>
                        Group
                    </SmallTitle>
                    <p className="reservation-cards__paragraph">
                        Our restaurant has a large space
                        which can be used by about 40 to 150 people for community activities, groups, weddings and others.
                    </p>
                    <p className="reservation-cards__paragraph">
                        We also have several special menus that can be ordered for specific events.
                    </p>
                </Card>
            </Container>
        </section>
    )
}