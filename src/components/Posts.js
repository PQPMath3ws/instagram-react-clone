import Post from "./Post";

const posts = [
    {
        userImage: require("../assets/images/meowed.svg"),
        userName: "meowed",
        contentImage: require("../assets/images/gato-telefone.svg"),
        likedUserImage: require("../assets/images/respondeai.svg"),
        likedText: <div className="texto">Curtido por <strong>respondeai</strong> e <strong>outras 101.523 pessoas</strong></div>
    },
    {
        userImage: require("../assets/images/barked.svg"),
        userName: "barked",
        contentImage: require("../assets/images/dog.svg"),
        likedUserImage: require("../assets/images/adorable_animals.svg"),
        likedText: <div className="texto">Curtido por <strong>adorable_animals</strong> e <strong>outras 99.159 pessoas</strong></div>
    }
];

const Posts = () => {
    let count = -1;
    return (
        <div id="posts">
            {posts.map(postItem => {
                count++;
                return (
                    <Post key={"key-" + count} userImage={postItem.userImage.default} userName={postItem.userName} contentImage={postItem.contentImage.default} likedUserImage={postItem.likedUserImage.default} likedText={postItem.likedText}></Post>
                );
            })}
        </div>
    );
};

export default Posts;