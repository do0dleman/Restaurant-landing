import Container from "../../components/Container/Container";
import BigTitle from "../../ui/bigTitle/BigTitle";
import ImageDiv from "../../ui/imageDiv/ImageDiv";
import OurTeamCard from "./components/OurTeamCard";
import img1 from './img/img1.jpg'
import img2 from './img/img2.jpg'
import img3 from './img/img3.jpg'
import img4 from './img/img4.jpg'
import './ourTeam.scss'

export default function OurTeam() {
    return (
        <section className="our-team">
            <Container className="our-team__container">
                <BigTitle className="our-team__title">
                    Our Team
                </BigTitle>
                <p className="our-team__paragraph">
                    We have a team of professional chefs who have worked in the culinary world for decades.
                </p>
                <div className="our-team__cards">
                    <OurTeamCard
                        name='Mr. Izumi'
                        post='Manager'
                        imageDiv={<ImageDiv
                            style={{ background: `url(${img1})` }} />}
                    />
                    <OurTeamCard
                        name='Mr. Naka'
                        post='Head Chef'
                        imageDiv={<ImageDiv
                            style={{ background: `url(${img2})` }} />}
                    />
                    <OurTeamCard
                        name='David Zain'
                        post='Chef'
                        imageDiv={<ImageDiv
                            style={{ background: `url(${img3})` }} />}
                    />
                    <OurTeamCard
                        name='Alison'
                        post='Sous Chef'
                        imageDiv={<ImageDiv
                            style={{ background: `url(${img4})` }} />}
                    />
                </div>
            </Container>
        </section>
    )
}