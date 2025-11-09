import { Outlet } from "react-router-dom";
import NavBar from "./Navbar";
import Footer from "./Footer";
import FooterCTA from "./FooterCTA";

const Body = () => {
    return (
        <>
            <NavBar />
            <Outlet />
            <FooterCTA />
            <Footer />
        </>
    );
}

export default Body;
