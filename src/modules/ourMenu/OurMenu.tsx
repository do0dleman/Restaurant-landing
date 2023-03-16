import Container from "../../components/Container/Container";
import BigTitle from "../../ui/bigTitle/BigTitle";
import OurMenuCard from "./components/OurMenuCard";

import './ourMenu.scss'

export default function OurMenu() {

    return (
        <section className="our-menu">
            <Container className={'our-menu__container'}>
                <BigTitle
                    className="our-menu__title">
                    Our Menu
                </BigTitle>
                <OurMenuCard
                    to='/menu#chinese-menu'
                    imageClass={'our-menu__img-1'}
                    title={'Chinese Food'}
                ></OurMenuCard>
                <OurMenuCard
                    to='/menu#japanese-menu'
                    imageClass={'our-menu__img-2'}
                    title={'Japanese Food'}
                ></OurMenuCard>
                <OurMenuCard
                    to='/menu#korean-menu'
                    imageClass={'our-menu__img-3'}
                    title={'Korean Food'}
                ></OurMenuCard>
            </Container>
        </section>
    )
}