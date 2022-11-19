import Suggestion from "./Suggestion";

import "../assets/css/suggestions.css";

const suggestions = [
    {
        userImage: require("../assets/images/bad.vibes.memes.svg"),
        userName: "bad.vibes.memes",
        userStatus: "Segue você"
    },
    {
        userImage: require("../assets/images/chibirdart.svg"),
        userName: "chibirdart",
        userStatus: "Segue você"
    },
    {
        userImage: require("../assets/images/razoesparaacreditar.svg"),
        userName: "razoesparaacreditar",
        userStatus: "Novo no Instagram"
    },
    {
        userImage: require("../assets/images/adorable_animals.svg"),
        userName: "adorable_animals",
        userStatus: "Segue você"
    },
    {
        userImage: require("../assets/images/smallcutecats.svg"),
        userName: "smallcutecats",
        userStatus: "Segue você"
    }
];

const Suggestions = () => (
    <div id="sugestoes">
        <div id="titulo">
            Sugestões para você
            <div>Ver tudo</div>
        </div>
        {suggestions.map(suggestion => <Suggestion key={suggestion.userName} userImage={suggestion.userImage.default} userName={suggestion.userName} userStatus={suggestion.userStatus}></Suggestion>)}
    </div>
);

export default Suggestions;