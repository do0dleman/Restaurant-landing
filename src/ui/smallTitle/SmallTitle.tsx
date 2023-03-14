import './smallTitle.scss'
interface SmallTitleProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {

}
export default function SmallTitle(props: SmallTitleProps) {
    const { className, ...rest } = props

    return (
        <h4 {...rest} className={`${className} --small-title`}></h4>
    )
}