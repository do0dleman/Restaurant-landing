import './menuItem.scss'

import IMenuItem from "../../../interfaces/IMenuItem"
import priceToString from '../../../utils/priceToString'

interface MenuItemProps {
    menuItem: IMenuItem
}

export default function MenuItem(props: MenuItemProps) {
    const { name, ingredients, price } = props.menuItem

    return (
        <div className="menu-card__item">
            <div className="menu-card__top">
                <h4 className="menu-card__item-title">
                    {name}
                </h4>
                <h4 className="menu-card__price">
                    {priceToString(price)}
                </h4>
            </div>
            <div className="menu-card__bottom">
                <p className="menu-card__paragraph">
                    {ingredients}
                </p>
            </div>
        </div>
    )
}