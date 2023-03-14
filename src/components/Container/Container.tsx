interface ContainerProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {

}
import './container.scss'
export default function Container(props: ContainerProps) {
    const { className, children, ...rest } = props
    return (
        <div
            {...rest}
            className={`${className} --container`}
        >
            {children}
        </div>
    )
}