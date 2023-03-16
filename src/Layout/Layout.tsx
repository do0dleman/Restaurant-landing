import { AnimationEventHandler } from "react";
import { Outlet } from "react-router";
import Footer from "../modules/footer/Footer";
import Navbar from "../modules/navbar/Navbar";

interface LayoutProps {
    transitionStage: string
    onAnimationEnd: AnimationEventHandler<HTMLDivElement>
}
export default function Layout(props: LayoutProps) {
    const { transitionStage, onAnimationEnd } = props
    return (
        <>
            <Navbar />
            <div
                className={`content ${transitionStage}`}
                onAnimationEnd={onAnimationEnd}>
                <Outlet />
            </div>
            <Footer />
        </>
    )
}