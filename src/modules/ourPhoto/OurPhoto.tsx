import Container from "../../components/Container/Container";
import ArrowLink from "../../ui/arrowLink/ArrowLink";
import BigTitle from "../../ui/bigTitle/BigTitle";
import ImageDiv from "../../ui/imageDiv/ImageDiv";
import './ourphoto.scss'

export default function OurPhoto() {
    return (
        <section className="our-photo">
            <Container className='our-photo__container'>
                <div className="our-photo__top">
                    <BigTitle className="our-photo__title">
                        Our Photo
                    </BigTitle>
                    <ArrowLink
                        className="our-photo__link"
                        to={'/about'}>
                        View All
                    </ArrowLink>
                </div>
                <div className="our-photo__gallery">
                    <ImageDiv className="our-photo__img-1" />
                    <ImageDiv className="our-photo__img-2" />
                    <ImageDiv className="our-photo__img-3" />
                    <ImageDiv className="our-photo__img-4" />
                    <ImageDiv className="our-photo__img-5" />
                    <ImageDiv className="our-photo__img-6" />
                </div>
            </Container>
        </section>
    )
}