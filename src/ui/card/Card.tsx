import { ReactNode } from "react"
import './card.scss'
interface CardProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    imageDiv: ReactNode
}

export default function Card(props: CardProps) {
    const { className, children, imageDiv, ...rest } = props

    return (
        <div {...rest} className={`${className} card`}>
            {imageDiv}
            <div className='card__info'>
                {children}
            </div>
        </div>
    )
}