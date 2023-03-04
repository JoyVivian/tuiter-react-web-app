import posts from "./posts.json";
import PostItem from "./home-screen-item";

const HomeScreen = () => {
    return (
        <ul class="list-group">
            {posts.map(post => <PostItem key={post._id} post={post}/>)}
        </ul>
    );
};

export default HomeScreen;