import { useState } from 'react';
import { Pencil } from 'react-ionicons'

import "../assets/css/user.css";

const userImage = require("../assets/images/catanacomics.svg");

const User = () => {
    const [userName, setUsername] = useState("Catana");

    function changeUsername() {
        let name = prompt("Qual o seu novo (e belo) nome de usuário?");
        setUsername(name ? name : userName);
    }

    return (
        <div id="usuario">
            <img src={userImage.default} alt="" />
            <div id="texto">
                <strong>catanacomics</strong>
                <span>
                    {userName}
                    <Pencil cssClasses="ion-icon" color="#8E8E8E" width="14px" height="14px" onClick={changeUsername}></Pencil>
                </span>
            </div>
        </div>
    )
};

export default User;