import { useNavigate } from "react-router";
import ImageDiv from "../../../ui/imageDiv/ImageDiv";
import './menu-card.scss'
interface OurMenuCardProps {
    imageClass: string
    title: string
}

export default function OurMenuCard(props: OurMenuCardProps) {
    const { imageClass, title } = props

    const navigate = useNavigate()
    function HandleCardClick() {
        navigate('/menu', { state: { section: title } })
    }
    return (
        <article
            className="our-menu__card menu-card-preview"
            onClick={HandleCardClick}>
            <ImageDiv className={imageClass} />
            <h4 className="menu-card-preview__title">{title}</h4>
        </article>
    )
}