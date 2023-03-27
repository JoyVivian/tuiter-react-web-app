import postArray from './tuits.json';
import TuitItem from "./tuit-item";
import {useSelector} from "react-redux";

const TuitsList = () => {
    const postArray = useSelector((state) => state.tuits);
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
