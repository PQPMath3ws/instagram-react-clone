import { CompassOutline, HeartOutline, LogoInstagram, PaperPlaneOutline, PersonOutline } from "react-ionicons";

import "../assets/css/navbar.css";

const logo = require("../assets/images/logo.png");

const Navbar = () => (
    <div id="navbar">
        <div id="container">
            <div id="logo">
                <LogoInstagram color={"#000000"}></LogoInstagram>
                <div id="separador"></div>
                <img src={logo} alt="" />
            </div>
            <div id="logo-mobile">
                <LogoInstagram color={"#000000"}></LogoInstagram>
            </div>
            <div id="instagram-mobile">
                <img src={logo} alt="" />
            </div>
            <div id="pesquisa">
                <input type="text" placeholder="Pesquisar" />
            </div>
            <div id="icones">
                <PaperPlaneOutline color={"#000000"}></PaperPlaneOutline>
                <CompassOutline color={"#000000"}></CompassOutline>
                <HeartOutline color={"#000000"}></HeartOutline>
                <PersonOutline color={"#000000"}></PersonOutline>
            </div>
            <div id="icones-mobile">
                <PaperPlaneOutline color={"#000000"}></PaperPlaneOutline>
            </div>
        </div>
    </div>
);

export default Navbar;