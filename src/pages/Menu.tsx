import ChineseMenu from "../modules/chineseMenu/ChineseMenu";
import Desert from "../modules/desert/Desert";
import DesertGallery from "../modules/desertGallery/DesertGallery";
import JapaneseMenu from "../modules/japaneseMenu/JapaneseMenu";
import KoreanMenu from "../modules/koreanMenu/KoreanMenu";
import MenuCta from "../modules/menuCta/MenuCta";

export default function Menu() {
    return (
        <main>
            <MenuCta />
            <ChineseMenu />
            <JapaneseMenu />
            <KoreanMenu />
            <Desert />
            <DesertGallery />
        </main>
    )
}