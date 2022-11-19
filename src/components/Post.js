import { ChatbubbleOutline, EllipsisHorizontal, PaperPlaneOutline } from 'react-ionicons';

import "../assets/css/post.css";

const Post = (props) => (
    <div className="post">
        <div className="topo">
            <div className="usuario">
                <img src={props.userImage} alt="" />
                {props.userName}
            </div>
            <div className="acoes">
                <EllipsisHorizontal cssClasses="ion-icon" color="#262626" width="14px" height="14px"></EllipsisHorizontal>
            </div>
        </div>
        <div className="conteudo">
            <img src={props.contentImage} alt="" />
            <div className={props.spClass}>
                <p>Seu post foi salvo com sucesso!</p>
            </div>
        </div>
        <div className="fundo">
            <div className="acoes">
                <div>
                    {props.heartOutline}
                    <ChatbubbleOutline cssClasses="ion-icon" color="#262626" width="24px" height="24px"></ChatbubbleOutline>
                    <PaperPlaneOutline cssClasses="ion-icon" color="#262626" width="24px" height="24px"></PaperPlaneOutline>
                </div>
                <div>
                    {props.bookmarkOutline}
                </div>
            </div>
            <div className="curtidas">
                <img src={props.likedUserImage} alt="" />
                {props.likedText}
            </div>
        </div>
    </div>
);

export default Post;