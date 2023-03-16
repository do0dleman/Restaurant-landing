import Container from "../../components/Container/Container";
import ImageDiv from "../../ui/imageDiv/ImageDiv";
import MediumTitle from "../../ui/mediumTitle/MediumTitle";
import './aboutStory.scss'
export default function AboutStory() {
    return (
        <section className="about-story" id="about-story">
            <Container className='about-story__container'>
                <article className="about-story__article">
                    <MediumTitle className="about-story__title">
                        Story 48 Cuisine Restaurant
                    </MediumTitle>
                    <p className="about-story__paragraph">Welcome to  the 48 Cuisine Restaurant. This restaurant was founded in 2012 with the concept of Asian food fine dining, and cooked by professional chef.</p>
                    <p className="about-story__paragraph">Our restaurant provides a variety of Asian dishes including Chinese food, Japanese Food, Korean Food.</p>
                    <p className="about-story__paragraph">We have 3 restaurants with 3 different concepts. first outdoor restaurant with a lakeside view. second, a classic concept restaurant with a beautiful rustic feel. third, a restaurant with a modern concept in the middle of the city.</p>
                </article>
                <ImageDiv className="about-story__image" />
            </Container>
        </section>
    )
}