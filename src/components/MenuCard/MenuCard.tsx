import { ReactNode } from "react";
import IMenuItem from "../../interfaces/IMenuItem";
import BigTitle from "../../ui/bigTitle/BigTitle";
import ImageDiv from "../../ui/imageDiv/ImageDiv";
import GrandTitle from "../GrandTitle/GrandTitle";
import MenuItem from "./components/MenuItem";
import "./menuCard.scss"

interface MenuCardProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {
    menuItems: IMenuItem[]
    title: string
    image: ReactNode
    imageRight?: boolean
}

export default function MenuCard(props: MenuCardProps) {
    const { className, title, menuItems, image, imageRight, ...rest } = props
    const rightImageClass = imageRight ? 'menu-card-right' : ''
    return (
        <GrandTitle
            title={""}
            {...rest}
            className={`${className} menu-card ${rightImageClass}`}
        >
            <BigTitle className="menu-card__title">
                {title}
            </BigTitle>
            {menuItems.map((item) =>
                <MenuItem menuItem={item} key={item.name} />)}
            {image}
        </GrandTitle>
    )
}