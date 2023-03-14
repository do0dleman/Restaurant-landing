import { Outlet } from "react-router";
import Footer from "../../modules/footer/Footer";
import Navbar from "../../modules/navbar/Navbar";

export default function Layout() {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    )
}