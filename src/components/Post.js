import { useState } from 'react';
import { BookmarkOutline, ChatbubbleOutline, EllipsisHorizontal, HeartOutline, PaperPlaneOutline } from 'react-ionicons';

import "../assets/css/post.css";

let bookmark = null;
let bookmarkTO = [null, null, null, null, null];

const Post = (props) => {
    const [ioniconsActions, setIoniconsActions] = useState({
        heartOutline: HeartOutline({cssClasses:"ion-icon", color:"#262626", width:"24px", height:"24px", style: {fill: "#101010"}}),
        bookmarkOutline: BookmarkOutline({cssClasses:"ion-icon", color:"#262626", width:"24px", height:"24px", style: {fill: "#262626"}, onClick:savePost})
    });
    const [spClass, setSpClass] = useState("saved-posts");

    function savePost() {
        if (bookmark === null) bookmark = {...ioniconsActions.bookmarkOutline};
        let bookmarkProps = {...bookmark.props};
        let bookmarkChildren = {...bookmarkProps.children};
        let svgProps = {...bookmarkChildren.props};
        let pathChildren = {...svgProps.children[1]};
        let pathProps = {...pathChildren.props};
        const fillValue = pathProps.fill;
        pathProps.fill = fillValue === "none" ? "1" : "none";
        pathChildren.props = pathProps;
        svgProps.children = ["", pathChildren];
        bookmarkChildren.props = svgProps;
        bookmarkProps.children = bookmarkChildren;
        bookmark.props = bookmarkProps;
        if (fillValue === "none") {
            bookmarkTO.forEach(to => {
                if (to) clearInterval(to);
            });
            bookmarkTO[0] = setTimeout(function () {
                setSpClass("saved-posts saved-posts-display fadeIn");
                bookmarkTO[1] = setTimeout(function () {
                    setSpClass("saved-posts saved-posts-display");
                    bookmarkTO[2] = setTimeout(function () {
                        bookmarkTO[3] = setTimeout(function () {
                            setSpClass("saved-posts saved-posts-display fadeOut");
                            bookmarkTO[4] = setTimeout(function () {
                                setSpClass("saved-posts");
                            }, 300);
                        }, 1000);
                    }, 20);
                }, 300);
            }, 50);
        }
        setIoniconsActions({
            heartOutline: ioniconsActions.heartOutline,
            bookmarkOutline: bookmark
        });
    }
    
    return (
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
                <div className={spClass}>
                    <p>Seu post foi salvo com sucesso!</p>
                </div>
            </div>
            <div className="fundo">
                <div className="acoes">
                    <div>
                        {ioniconsActions.heartOutline}
                        <ChatbubbleOutline cssClasses="ion-icon" color="#262626" width="24px" height="24px"></ChatbubbleOutline>
                        <PaperPlaneOutline cssClasses="ion-icon" color="#262626" width="24px" height="24px"></PaperPlaneOutline>
                    </div>
                    <div>
                        {ioniconsActions.bookmarkOutline}
                    </div>
                </div>
                <div className="curtidas">
                    <img src={props.likedUserImage} alt="" />
                    {props.likedText}
                </div>
            </div>
        </div>
    );
};

export default Post;