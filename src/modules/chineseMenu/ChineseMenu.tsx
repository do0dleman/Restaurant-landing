import MenuCard from "../../components/MenuCard/MenuCard";
import IMenuItem from "../../interfaces/IMenuItem";
import ImageDiv from "../../ui/imageDiv/ImageDiv";
import './chineseMenu.scss'

export default function ChineseMenu() {
    const menuItems: IMenuItem[] = [
        {
            name: 'Kung Pao Chicken',
            ingredients: 'Chicken, dried chili, and cashews',
            price: 15
        },
        {
            name: 'Wonton Sup',
            ingredients: 'Stuffed dumplings with savory sauce',
            price: 8
        },
        {
            name: 'Peking Duck',
            ingredients: 'Peking duck roasted with special spices',
            price: 35
        },
        {
            name: 'Hainan Rice',
            ingredients: 'Hainan rice with grilled chicken',
            price: 15
        },
        {
            name: 'Dimsum',
            ingredients: 'Dim Sum Chicken, Shrimp and Mushrooms',
            price: 8
        },
        {
            name: 'Angsio Tofu',
            ingredients: 'Chicken, dried chili, and cashews',
            price: 8
        },
    ]
    return (
        <section className="chinese-menu" id='chinese-menu'>
            <MenuCard
                menuItems={menuItems}
                title="Chinese Food"
                image={
                    <ImageDiv className="chinese-menu__img" />
                } />
        </section>
    )
}