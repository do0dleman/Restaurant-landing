import Container from "../../components/Container/Container";
import ArrowLink from "../../ui/arrowLink/ArrowLink";
import ImageDiv from "../../ui/imageDiv/ImageDiv";
import MediumTitle from "../../ui/mediumTitle/MediumTitle";
import './story.scss'

export default function Story() {
    return (
        <section className="story">
            <Container className={'story__container'}>
                <ImageDiv className="story__top-image" />
                <ImageDiv className="story__middle-image" />
                <ImageDiv className="story__bottom-image" />
                <article className="story__article">
                    <MediumTitle className="story__header">
                        Story 48 Cuisine Restaurant
                    </MediumTitle>
                    <p className="story__paragraph">
                        Welcome to  the 48 Cuisine Restaurant. This restaurant was founded in 2012 with the concept of Asian food fine dining, and cooked by professional chef.
                    </p>
                    <p className="story__paragraph">
                        Our restaurant provides a variety of Asian dishes including Chinese food, Japanese Food, Korean Food.
                    </p>
                    <ArrowLink
                        to={'/about#about-story'}
                        className={'story__link'}>
                        Read More
                    </ArrowLink>
                </article>
            </Container>
        </section>
    )
}