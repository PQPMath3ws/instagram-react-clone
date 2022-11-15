import { ChevronForwardCircle } from 'react-ionicons';

import "../assets/css/stories.css";

import Story from "./Story";

const stories = [
    {
        userName: "9gag",
        userImage: require("../assets/images/9gag.svg"),
    },
    {
        userName: "meowed",
        userImage: require("../assets/images/meowed.svg"),
    },
    {
        userName: "barked",
        userImage: require("../assets/images/barked.svg"),
    },
    {
        userName: "nathanwpylestrangeplanet",
        userImage: require("../assets/images/nathanwpylestrangeplanet.svg"),
    },
    {
        userName: "wawawicomics",
        userImage: require("../assets/images/wawawicomics.svg"),
    },
    {
        userName: "respondeai",
        userImage: require("../assets/images/respondeai.svg"),
    },
    {
        userName: "filomoderna",
        userImage: require("../assets/images/filomoderna.svg"),
    },
    {
        userName: "memeriagourmet",
        userImage: require("../assets/images/memeriagourmet.svg"),
    }
];

const Stories = () => (
    <div id="stories">
        {stories.map(storyItem => {
            return (
                <Story key={storyItem.userName} userImage={storyItem.userImage.default} userName={storyItem.userName}></Story>
            )
        })}
        <div id="setinha">
            <ChevronForwardCircle cssClasses="ion-icon" color="#FFFFFF" width="28px" height="28px"></ChevronForwardCircle>
        </div>
    </div>
);

export default Stories;