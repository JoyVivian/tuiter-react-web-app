import postArray from './tuits.json';
import TuitItem from "./tuit-item";

const TuitsList = () => {
    return (
        <ul className="list-group">
            {
                postArray.map((post) =>
                    <TuitItem key={post._id} post={post}/>)
            }
        </ul>
    );
};

export default TuitsList;
