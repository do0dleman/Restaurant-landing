interface ImageDivProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {

}
import './image.scss'
export default function ImageDiv(props: ImageDivProps) {
    const { className, style, ...rest } = props
    return (
        <div
            {...rest}
            className={`${className} --image`}
            style={style} />
    )
}