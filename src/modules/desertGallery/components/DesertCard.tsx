import Card from '../../../ui/card/Card'
import priceToString from '../../../utils/priceToString'
import IDesert from '../interfaces/desert'
import './desertCard.scss'


interface DesertCardProps {
    className?: string
    desert: IDesert
}
export default function DesertCard(props: DesertCardProps) {
    const { className } = props
    const { name, price, imageDiv } = props.desert

    return (
        <Card className={`${className} desert-card`} imageDiv={imageDiv}>
            <div className='desert-card__info'>
                <p className='desert-card__name'>{name}</p>
                <p className='desert-card__price'>{priceToString(price)}</p>
            </div>
        </Card>
    )
}