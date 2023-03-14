import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "../../pages/About";
import ContactUs from "../../pages/ContactUs";
import Menu from "../../pages/Menu";
import Reservations from "../../pages/Reservations";
import Welcome from "../../pages/Welcome";
import Layout from "./Layout";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Welcome />} />
                    <Route path='menu' element={<Menu />} />
                    <Route path='reservations' element={<Reservations />} />
                    <Route path='about' element={<About />} />
                    <Route path='contact' element={<ContactUs />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}