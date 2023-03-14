import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import About from "../../pages/About";
import ContactUs from "../../pages/ContactUs";
import Menu from "../../pages/Menu";
import Reservations from "../../pages/Reservations";
import Welcome from "../../pages/Welcome";
import Layout from "./Layout";
import './animation.scss'

export default function Router() {
    const location = useLocation()
    const [displayLocation, setDisplayLocation] = useState(location)
    const [transitionStage, setTransitionStage] = useState('fade-in')
    useEffect(() => {
        // setDisplayLocation(location)
        setTransitionStage('fade-out')
    }, [location])
    function HandleAnimationEnd() {
        setTransitionStage('fade-in')
        setDisplayLocation(location)
    }
    return (
        <Routes location={displayLocation}>
            <Route path='/' element={
                <Layout
                    onAnimationEnd={HandleAnimationEnd}
                    transitionStage={transitionStage}
                />}>
                <Route index element={<Welcome />} />
                <Route path='menu' element={<Menu />} />
                <Route path='reservations' element={<Reservations />} />
                <Route path='about' element={<About />} />
                <Route path='contact' element={<ContactUs />} />
            </Route>
        </Routes>
    )
}