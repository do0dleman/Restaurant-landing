import { ReactNode } from "react"
import './ourTeamCard.scss'

interface OurTeamCardProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    imageDiv: ReactNode
    name: string
    post: string
}

export default function OurTeamCard(props: OurTeamCardProps) {
    const { imageDiv, name, post, ...rest } = props
    return (
        <div className={`our-team__card`} {...rest}>
            {imageDiv}
            <p className="our-team__name">{name}</p>
            <p className="our-team__post">{post}</p>
        </div>
    )
}