import Suggestion from "./Suggestion";

import "../assets/css/suggestions.css";

const suggestions = [
    {
        userImage: require("../assets/images/bad.vibes.memes.svg").default,
        userName: "bad.vibes.memes",
        userStatus: "Segue você"
    },
    {
        userImage: "https://scontent-prg1-1.cdninstagram.com/v/t51.2885-19/432264055_1087299835659296_3973590506900206786_n.jpg?_nc_ht=scontent-prg1-1.cdninstagram.com&_nc_cat=108&_nc_ohc=-F5p-PbJ4e8Q7kNvgF04nZc&edm=AEF8tYYBAAAA&ccb=7-5&oh=00_AYCsN5a9mHCtdCZMbQRTs29a-ofgLgLijVNYg-x6o3V0vQ&oe=666567F5&_nc_sid=1e20d2",
        userName: "pqpmath3ws",
        userStatus: "Novo no Instagram"
    },
    {
        userImage: require("../assets/images/razoesparaacreditar.svg").default,
        userName: "razoesparaacreditar",
        userStatus: "Novo no Instagram"
    },
    {
        userImage: "https://instagram.fbts9-1.fna.fbcdn.net/v/t51.2885-19/225779500_345952210555486_912384195934464447_n.jpg?_nc_ht=instagram.fbts9-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=q4TUa1qUR1wQ7kNvgHl8yBD&edm=AEF8tYYBAAAA&ccb=7-5&oh=00_AYDYVhKDpxHQ3-u0fX341czc5FMGi0AFLK8vzvwW0ACwAw&oe=66661FE2&_nc_sid=1e20d2",
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
