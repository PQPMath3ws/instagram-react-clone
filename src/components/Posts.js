import { useState } from 'react';
import { BookmarkOutline, HeartOutline } from 'react-ionicons';

import Post from "./Post";

const Posts = () => {
    let posts = [
        {
            id: 1,
            userImage: require("../assets/images/meowed.svg"),
            userName: "meowed",
            contentImage: require("../assets/images/gato-telefone.svg"),
            likedUserImage: require("../assets/images/respondeai.svg"),
            heartOutline: HeartOutline({cssClasses:"ion-icon", color:"#262626", width:"24px", height:"24px", style: {fill: "#FA383E"}, onClick:function () { likeBtn(1); }}),
            bookmarkOutline: BookmarkOutline({cssClasses:"ion-icon", color:"#262626", width:"24px", height:"24px", style: {fill: "#262626"}, onClick:function () { savePost(1); }}),
            spClass: "saved-posts",
            likedText: <div className="texto">Curtido por <strong>respondeai</strong> e <strong>outras 101.523 pessoas</strong></div>
        },
        {
            id: 2,
            userImage: require("../assets/images/barked.svg"),
            userName: "barked",
            contentImage: require("../assets/images/dog.svg"),
            likedUserImage: require("../assets/images/adorable_animals.svg"),
            heartOutline: HeartOutline({cssClasses:"ion-icon", color:"#262626", width:"24px", height:"24px", style: {fill: "#FA383E"}, onClick:function () { likeBtn(2); }}),
            bookmarkOutline: BookmarkOutline({cssClasses:"ion-icon", color:"#262626", width:"24px", height:"24px", style: {fill: "#262626"}, onClick:function () { savePost(2); }}),
            spClass: "saved-posts",
            likedText: <div className="texto">Curtido por <strong>adorable_animals</strong> e <strong>outras 99.159 pessoas</strong></div>
        }
    ];

    const [postsState, setPostsState] = useState(posts);

    let bookmarkTO = [null, null, null, null, null];

    function likeBtn(id) {
        changeBtn("", id);
    }

    function changeBtn(fillValue, id) {
        let post = posts.filter(post => post.id === id)[0];
        let heart = {...post.heartOutline};
        let heartProps = {...heart.props};
        let heartChildren = {...heartProps.children};
        let svgProps = {...heartChildren.props};
        let pathChildren = {...svgProps.children[1]};
        let pathProps = {...pathChildren.props};
        if (!fillValue) fillValue = pathProps.fill;
        pathProps.fill = fillValue === "none" ? "1" : "none";
        pathChildren.props = pathProps;
        svgProps.children = ["", pathChildren];
        heartChildren.props = svgProps;
        heartProps.children = heartChildren;
        if (fillValue === "none") heartProps.color = "#FA383E";
        else heartProps.color = "#262626";
        heart.props = heartProps;
        post.heartOutline = heart;
        posts = posts.map(pm => {
            if (pm.id === id) pm = post;
            return pm;
        });
        setPostsState(posts);
    }

    function savePost(id) {
        let post = posts.filter(post => post.id === id)[0];
        let bookmark = {...post.bookmarkOutline};
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
        post.bookmarkOutline = bookmark;
        posts = posts.map(pm => {
            if (pm.id === id) pm = post;
            return pm;
        });
        setPostsState(posts);
        if (fillValue === "none") {
            bookmarkTO.forEach(to => {
                if (to) clearInterval(to);
            });
            bookmarkTO[0] = setTimeout(function () {
                post.spClass = "saved-posts saved-posts-display fadeIn";
                posts = posts.map(pm => {
                    if (pm.id === id) pm = post;
                    return pm;
                });
                setPostsState(posts);
                bookmarkTO[1] = setTimeout(function () {
                    post.spClass = "saved-posts saved-posts-display";
                    posts = posts.map(pm => {
                        if (pm.id === id) pm = post;
                        return pm;
                    });
                    setPostsState(posts);
                    bookmarkTO[2] = setTimeout(function () {
                        bookmarkTO[3] = setTimeout(function () {
                            post.spClass = "saved-posts saved-posts-display fadeOut";
                            posts = posts.map(pm => {
                                if (pm.id === id) pm = post;
                                return pm;
                            });
                            setPostsState(posts);
                            bookmarkTO[4] = setTimeout(function () {
                                post.spClass = "saved-posts";
                                posts = posts.map(pm => {
                                    if (pm.id === id) pm = post;
                                    return pm;
                                });
                                setPostsState(posts);
                            }, 300);
                        }, 1000);
                    }, 20);
                }, 300);
            }, 50);
        }
    }

    let count = -1;
    return (
        <div id="posts">
            {postsState.map(postItem => {
                count++;
                return (
                    <Post key={"key-" + count} userImage={postItem.userImage.default} userName={postItem.userName} contentImage={postItem.contentImage.default} likedUserImage={postItem.likedUserImage.default} heartOutline={postItem.heartOutline} bookmarkOutline={postItem.bookmarkOutline} spClass={postItem.spClass} likedText={postItem.likedText}></Post>
                );
            })}
        </div>
    );
};

export default Posts;