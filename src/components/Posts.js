import { useState } from 'react';
import { BookmarkOutline, HeartOutline } from 'react-ionicons';

import Post from "./Post";

const Posts = () => {
    let postsCount = [
        101523,
        1500,
        99159,
        1322
    ];
    const [postsCountState, setPostsCountState] = useState(postsCount);
    
    let posts = [
        {
            id: 1,
            userImage: require("../assets/images/meowed.svg").default,
            userName: "meowed",
            contentImage: require("../assets/images/gato-telefone.svg").default,
            likedUserImage: require("../assets/images/respondeai.svg").default,
            heartOutline: HeartOutline({cssClasses:"ion-icon", color:"#262626", width:"24px", height:"24px", style: {fill: "#FA383E"}, onClick:function () { likeBtn(1); }}),
            bookmarkOutline: BookmarkOutline({cssClasses:"ion-icon", color:"#262626", width:"24px", height:"24px", style: {fill: "#262626"}, onClick:function () { savePost(1); }}),
            spClass: "saved-posts",
            liked: "respondeai",
            likedText: <div className="texto">Curtido por <strong>respondeai</strong> e <strong data-test="likes-number">outras {(postsCountState[0]).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} pessoas</strong></div>
        },
        {
            id: 2,
            userImage: require("../assets/images/pqpmath3ws.svg").default,
            userName: "pqpmath3ws",
            contentImage: require("../assets/images/pqpmath3ws.svg").default,
            likedUserImage: require("../assets/images/pqpmath3ws.svg").default,
            heartOutline: HeartOutline({cssClasses:"ion-icon", color:"#262626", width:"24px", height:"24px", style: {fill: "#FA383E"}, onClick:function () { likeBtn(2); }}),
            bookmarkOutline: BookmarkOutline({cssClasses:"ion-icon", color:"#262626", width:"24px", height:"24px", style: {fill: "#262626"}, onClick:function () { savePost(2); }}),
            spClass: "saved-posts",
            liked: "pqpmath3ws",
            likedText: <div className="texto">Curtido por <strong>pqpmath3ws</strong> e <strong data-test="likes-number">outras {(postsCountState[1]).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} pessoas</strong></div>
        },
        {
            id: 3,
            userImage: require("../assets/images/barked.svg").default,
            userName: "barked",
            contentImage: require("../assets/images/dog.svg").default,
            likedUserImage: require("../assets/images/adorable_animals.svg").default,
            heartOutline: HeartOutline({cssClasses:"ion-icon", color:"#262626", width:"24px", height:"24px", style: {fill: "#FA383E"}, onClick:function () { likeBtn(3); }}),
            bookmarkOutline: BookmarkOutline({cssClasses:"ion-icon", color:"#262626", width:"24px", height:"24px", style: {fill: "#262626"}, onClick:function () { savePost(3); }}),
            spClass: "saved-posts",
            liked: "adorable_animals",
            likedText: <div className="texto">Curtido por <strong>adorable_animals</strong> e <strong data-test="likes-number">outras {(postsCountState[2]).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} pessoas</strong></div>
        },
        {
            id: 4,
            userImage: require("../assets/images/driven.education.svg").default,
            userName: "driven.education",
            contentImage: require("../assets/images/driven.education.svg").default,
            likedUserImage: require("../assets/images/driven.education.svg").default,
            heartOutline: HeartOutline({cssClasses:"ion-icon", color:"#262626", width:"24px", height:"24px", style: {fill: "#FA383E"}, onClick:function () { likeBtn(4); }, "data-test": "like-post"}),
            bookmarkOutline: BookmarkOutline({cssClasses:"ion-icon", color:"#262626", width:"24px", height:"24px", style: {fill: "#262626"}, onClick:function () { savePost(4); }, "data-test": "save-post"}),
            spClass: "saved-posts",
            liked: "driven.education",
            likedText: <div className="texto">Curtido por <strong>driven.education</strong> e <strong data-test="likes-number">outras {(postsCountState[3]).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} pessoas</strong></div>
        },
    ];

    const [postsState, setPostsState] = useState(posts);

    let bookmarkTO = [null, null, null, null, null];

    function likeBtn(id) {
        changeBtn("", id, false);
    }

    function changeBtn(fillValue, id, isPhotoLike) {
        let post = posts.filter(post => post.id === id)[0];
        let heart = {...post.heartOutline};
        let heartProps = {...heart.props};
        let heartChildren = {...heartProps.children};
        let svgProps = {...heartChildren.props};
        let pathChildren = {...svgProps.children[1]};
        let pathProps = {...pathChildren.props};
        if (!fillValue) fillValue = pathProps.fill;
        if (!isPhotoLike) {
            pathProps.fill = fillValue === "none" ? "1" : "none";
        } else {
            pathProps.fill = "1";
        }
        pathChildren.props = pathProps;
        svgProps.children = ["", pathChildren];
        heartChildren.props = svgProps;
        heartProps.children = heartChildren;
        if (fillValue === "none") heartProps.color = "#FA383E";
        else heartProps.color = "#262626";
        heart.props = heartProps;
        post.heartOutline = heart;
        if (pathProps.fill !== fillValue) {
            if (fillValue === "none") postsCount[id - 1] = postsCount[id - 1] + 1;
            else postsCount[id - 1] = postsCount[id - 1] - 1;
        }
        setPostsCountState(postsCount);
        post.likedText = <div className="texto">Curtido por <strong>{post.liked}</strong> e <strong data-test="likes-number">outras {(postsCountState[id - 1]).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} pessoas</strong></div>
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
                    <Post key={"key-" + count} userImage={postItem.userImage} userName={postItem.userName} contentImage={postItem.contentImage} likedUserImage={postItem.likedUserImage} heartOutline={postItem.heartOutline} bookmarkOutline={postItem.bookmarkOutline} spClass={postItem.spClass} likedText={postItem.likedText}></Post>
                );
            })}
        </div>
    );
};

export default Posts;