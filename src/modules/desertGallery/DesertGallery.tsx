import Container from "../../components/Container/Container";
import ImageDiv from "../../ui/imageDiv/ImageDiv";
import './desertGallery.scss'
import IDesert from "./interfaces/desert";
import img1 from './img/img1.jpg'
import img2 from './img/img2.jpg'
import img3 from './img/img3.jpg'
import img4 from './img/img4.jpg'
import img5 from './img/img5.jpg'
import img6 from './img/img6.jpg'
import img7 from './img/img7.jpg'
import img8 from './img/img8.jpg'
import DesertCard from "./components/DesertCard";
export default function DesertGallery() {
    const deserts: IDesert[] = [
        {
            name: 'Oreo Ice Cream',
            price: 8,
            imageDiv: <ImageDiv
                style={{ background: `url(${img1})` }} />
        },
        {
            name: 'White Ice Cream',
            price: 8,
            imageDiv: <ImageDiv
                style={{ background: `url(${img2})` }} />
        },
        {
            name: 'Chocolate Cupcake',
            price: 8,
            imageDiv: <ImageDiv
                style={{ background: `url(${img3})` }} />
        },
        {
            name: 'Strawberry sandwich',
            price: 8,
            imageDiv: <ImageDiv
                style={{ background: `url(${img4})` }} />
        },
        {
            name: 'Banana sandwich',
            price: 8,
            imageDiv: <ImageDiv
                style={{ background: `url(${img5})` }} />
        },
        {
            name: 'Brown cake',
            price: 8,
            imageDiv: <ImageDiv
                style={{ background: `url(${img6})` }} />
        },
        {
            name: 'Black forest cake',
            price: 8,
            imageDiv: <ImageDiv
                style={{ background: `url(${img7})` }} />
        },
        {
            name: 'Strawberry ice cream',
            price: 8,
            imageDiv: <ImageDiv
                style={{ background: `url(${img8})` }} />
        },
    ]
    return (
        <section className="desert-gallery">
            <Container className='desert-gallery__container'>
                {deserts.map((item) =>
                    <DesertCard desert={item} key={item.name} />)}
            </Container>
        </section>
    )
}