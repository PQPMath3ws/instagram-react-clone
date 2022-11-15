import { CompassOutline, HeartOutline, LogoInstagram, PaperPlaneOutline, PersonOutline } from "react-ionicons";

import "../assets/css/navbar.css";

const logo = require("../assets/images/logo.png");

const Navbar = () => (
    <div id="navbar">
        <div id="container">
            <div id="logo">
                <LogoInstagram cssClasses="ion-icon" color="#262626" width="22px" height="22px"></LogoInstagram>
                <div id="separador"></div>
                <img src={logo} alt="" />
            </div>
            <div id="logo-mobile">
                <LogoInstagram cssClasses="ion-icon" color="#262626"></LogoInstagram>
            </div>
            <div id="instagram-mobile">
                <img src={logo} alt="" />
            </div>
            <div id="pesquisa">
                <input type="text" placeholder="Pesquisar" />
            </div>
            <div id="icones">
                <PaperPlaneOutline cssClasses="ion-icon" color="#262626"></PaperPlaneOutline>
                <CompassOutline cssClasses="ion-icon" color="#262626"></CompassOutline>
                <HeartOutline cssClasses="ion-icon" color="#262626"></HeartOutline>
                <PersonOutline cssClasses="ion-icon" color="#262626"></PersonOutline>
            </div>
            <div id="icones-mobile">
                <PaperPlaneOutline cssClasses="ion-icon" color="#262626"></PaperPlaneOutline>
            </div>
        </div>
    </div>
);

export default Navbar;