import Container from '../../components/Container/Container'
import SmallTitle from '../../ui/smallTitle/SmallTitle'
import ContactInfoSection from './components/ContactInfoSection'
import './contactInfo.scss'

export default function ContactInfo() {

    return (
        <section className="contact-info">
            <Container className='contact-info__container'>
                <article className="contact-info__article">
                    <ContactInfoSection title='Working Hours'>
                        <p className='contact-info__paragraph'>
                            Everyday : 10.00am - 11.30pm
                        </p>
                    </ContactInfoSection>
                    <ContactInfoSection title='Address'>
                        <p className='contact-info__paragraph'>
                            48 Cuisine Restaurant
                        </p>
                        <p className='contact-info__paragraph'>
                            48 Roadhill, Milbrae City, San Francisco. USA
                        </p>
                    </ContactInfoSection>
                    <ContactInfoSection title='Contact'>
                        <p className='contact-info__paragraph'>
                            Phone  : +89 8735 4625 673
                        </p>
                        <p className='contact-info__paragraph'>
                            Email  : 48cuisine@gmail.com
                        </p>
                        <p className='contact-info__paragraph'>
                            Instagram  : @48cuisinerestaurant
                        </p>
                    </ContactInfoSection>
                </article>
            </Container>
        </section>
    )
}