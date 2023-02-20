import posts from './posts.js';
import PostItem from './PostItem.js';

const PostList = () => {
    console.log(posts);
    return (`
        <ul class="list-group">
            ${posts.map(post => PostItem(post)).join('')}
        </ul>
    `);
};

export default PostList;
