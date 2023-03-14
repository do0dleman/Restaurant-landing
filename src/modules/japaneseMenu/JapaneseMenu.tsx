import MenuCard from "../../components/MenuCard/MenuCard";
import IMenuItem from "../../interfaces/IMenuItem";
import ImageDiv from "../../ui/imageDiv/ImageDiv";
import './japaneseMenu.scss'

export default function JapaneseMenu() {
    const menuItems: IMenuItem[] = [
        {
            name: 'Sushi',
            ingredients: 'California roll, salmon roll, and dragon roll.',
            price: 15
        },
        {
            name: 'Sashimi',
            ingredients: 'Sashimi with soy sauce and lemon juice',
            price: 10
        },
        {
            name: 'Udon',
            ingredients: 'Noodles, but bigger and chewy',
            price: 15
        },
        {
            name: 'Yakiniku',
            ingredients: 'Beef yakiniku and lamb yakiniku',
            price: 15
        },
        {
            name: 'Soba',
            ingredients: 'Noodles made from wheat flour',
            price: 10
        },
        {
            name: 'Ramen',
            ingredients: 'Japanese noodles with chicken broth',
            price: 13
        },
    ]
    return (
        <section className="japanese-menu">
            <MenuCard
                menuItems={menuItems}
                title="Japanese Food"
                imageRight
                image={
                    <ImageDiv className="japanese-menu__img" />
                } />
        </section>
    )
}