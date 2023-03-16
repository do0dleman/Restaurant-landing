import { ReactNode } from 'react'
import Button from '../../ui/button/Button'
import './grandtitle.scss'

interface GrandTitleProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {
    title: string
    description?: ReactNode
    button?: boolean
}
export default function GrandTitle(props: GrandTitleProps) {
    const { title, description, button, className, children } = props
    const grandtitleClasses = [
        className,
        'grandtitle ',
        button ? 'grandtitle--button' : ''
    ].join(' ')
    return (
        <article className={grandtitleClasses}>
            <h1 className="grandtitle__title">
                {title}
            </h1>
            <p className="grandtitle__description">
                {description}
            </p>
            {children}
            {
                button ?
                    <Button
                        to='/#reservation'
                        className={'grandtitle__button'}>
                        Book A Table
                    </Button> :
                    <></>
            }
        </article>
    )
}