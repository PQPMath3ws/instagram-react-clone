import { Pencil } from 'react-ionicons'

import "../assets/css/user.css";

const userImage = require("../assets/images/catanacomics.svg");

const User = () => (
    <div id="usuario">
        <img src={userImage.default} alt="" />
        <div id="texto">
            <strong>catanacomics</strong>
            <span>
                Catana
                <Pencil cssClasses="ion-icon" color="#8E8E8E" width="14px" height="14px"></Pencil>
            </span>
        </div>
    </div>
);

export default User;