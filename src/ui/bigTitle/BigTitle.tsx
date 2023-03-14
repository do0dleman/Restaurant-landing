import './bigtitle.scss'

interface BigTitleProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {

}

export default function BigTitleProps(props: BigTitleProps) {
    const { className, children } = props
    return (
        <h3 className={`${className} --bigTitle`}>
            {children}
        </h3>
    )
}