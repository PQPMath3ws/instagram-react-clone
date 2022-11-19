import User from "./User";
import Suggestions from "./Suggestions";

import "../assets/css/sidebar.css";

const Sidebar = () => (
    <div id="sidebar">
        <User></User>
        <Suggestions></Suggestions>
        <div id="links">
            Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
        </div>
        <div id="copyright">
            © 2021 INSTAGRAM DO FACEBOOK
        </div>
    </div>
);

export default Sidebar;