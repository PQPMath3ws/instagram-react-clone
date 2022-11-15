import "../assets/css/left_content.css";

import Posts from "./Posts";
import Stories from "./Stories";

const LeftContent = () => (
    <div id="esquerda">
        <Stories></Stories>
        <Posts></Posts>
    </div>
);

export default LeftContent;