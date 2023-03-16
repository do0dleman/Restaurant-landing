import { useNavigate } from "react-router";
import { HashLink } from "react-router-hash-link";
import ImageDiv from "../../../ui/imageDiv/ImageDiv";
import base from "../../../utils/base";
import './menu-card.scss'
interface OurMenuCardProps {
    imageClass: string
    title: string
    to: string
}

export default function OurMenuCard(props: OurMenuCardProps) {
    const { imageClass, title, to } = props

    return (
        <article
            className="our-menu__card menu-card-preview"
        >
            <HashLink to={`${base}${to}`}>
                <ImageDiv className={imageClass} />
                <h4 className="menu-card-preview__title">{title}</h4>
            </HashLink>

        </article >
    )
}