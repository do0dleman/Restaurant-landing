import Container from '../../components/Container/Container'
import Button from '../../ui/button/Button'
import ImageDiv from '../../ui/imageDiv/ImageDiv'
import MediumTitle from '../../ui/mediumTitle/MediumTitle'
import './place.scss'

export default function Place() {
    return (
        <section className="place">
            <Container className='place__container'>
                <article className="place__article">
                    <MediumTitle className='place__title'>
                        The Best Place With Best Food
                    </MediumTitle>
                    <p className="place__paragrapah">We have place with 3 different concepts. First open room with a lakeside view. Both rooms with classic feel. And third room with a modern concept.</p>
                    <p className="place__paragrapah">Please book your place now and get the best dining experience.</p>
                    <Button
                        to={'/reservations'}
                        state={{ title: 'book a table' }}
                        className='place__button'
                    >
                        Book A Table
                    </Button>
                </article>
                <ImageDiv className='place__img-1' />
                <ImageDiv className='place__img-2' />
                <ImageDiv className='place__img-3' />
            </Container>
        </section>
    )
}