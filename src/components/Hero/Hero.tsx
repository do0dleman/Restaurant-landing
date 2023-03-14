import './hero.scss'

interface HeroProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {

}
export default function Hero(props: HeroProps) {
    const { className, children, ...rest } = props
    return (
        <section {...rest} className={`${className} hero`}>
            {children}
        </section>
    )
}