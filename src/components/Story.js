import "../assets/css/story.css";

const bgImage = require("../assets/images/story-circle.svg");

const style = {
    backgroundImage: `url("${bgImage.default}")`
};

const Story = (props) => (
    <div className="story">
        <div className="imagem" style={style}>
            <img src={props.userImage} alt="" />
        </div>
        <div className="usuario">
            {props.userName}
        </div>
    </div>
);

export default Story;