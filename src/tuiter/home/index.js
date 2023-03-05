import postArray from './posts-content.json';
import PostItem from './home-screen-item';

const HomeScreen = () => {
  return (
    <ul className="list-group">
      {
        postArray.map((post) =>
          <PostItem key={post._id} post={post}/>)
      }
    </ul>
  );
};

export default HomeScreen;
