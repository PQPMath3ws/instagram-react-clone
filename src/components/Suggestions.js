import Suggestion from "./Suggestion";

import "../assets/css/suggestions.css";

const suggestions = [
    {
        userImage: require("../assets/images/bad.vibes.memes.svg").default,
        userName: "bad.vibes.memes",
        userStatus: "Segue você"
    },
    {
        userImage: require("../assets/images/pqpmath3ws.svg").default,
        userName: "pqpmath3ws",
        userStatus: "Novo no Instagram"
    },
    {
        userImage: require("../assets/images/razoesparaacreditar.svg").default,
        userName: "razoesparaacreditar",
        userStatus: "Novo no Instagram"
    },
    {
        userImage: require("../assets/images/driven.education.svg").default,
        userName: "driven.education",
        userStatus: "Segue você"
    },
    {
        userImage: require("../assets/images/adorable_animals.svg").default,
        userName: "adorable_animals",
        userStatus: "Segue você"
    },
    {
        userImage: require("../assets/images/smallcutecats.svg").default,
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
        {suggestions.map(suggestion => <Suggestion key={suggestion.userName} userImage={suggestion.userImage} userName={suggestion.userName} userStatus={suggestion.userStatus}></Suggestion>)}
    </div>
);

export default Suggestions;
