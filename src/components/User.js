import { useState } from 'react';
import { Pencil } from 'react-ionicons'

import "../assets/css/user.css";

const User = () => {
    const [userName, setUsername] = useState("Catana");
    const [userImage, setUserImage] = useState(require("../assets/images/catanacomics.svg").default);

    function changeUsername() {
        const name = prompt("Qual o seu novo (e belo) nome de usuário?");
        setUsername(name ? name : userName);
    }

    function changeUserImage() {
        const image = prompt("Insira sua nova (e bela) imagem de perfil por uma URL:");
        try {
            new URL(image);
            if (image.match(/\.(jpeg|jpg|png)$/) != null) setUserImage(image);
            else alert("Somente imagens JPG/JPEG e PNG são aceitas.");
        } catch (error) {
            alert("O link que você inseriu não é válido! :-(");
        }
    }

    return (
        <div id="usuario" data-test="user">
            <img src={userImage} alt="" onClick={changeUserImage} data-test="profile-image" />
            <div id="texto">
                <strong>catanacomics</strong>
                <span data-test="name">
                    {userName}
                    <Pencil cssClasses="ion-icon" color="#8E8E8E" width="14px" height="14px" onClick={changeUsername} data-test="edit-name"></Pencil>
                </span>
            </div>
        </div>
    )
};

export default User;