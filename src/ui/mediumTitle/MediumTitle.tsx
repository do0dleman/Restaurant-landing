import './mediumtitle.scss'

interface MediumTitleProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {

}

export default function MediumTitle(props: MediumTitleProps) {
    const { className, children } = props
    return (
        <h3 className={`${className} --mediumTitle`}>
            {children}
        </h3>
    )
}