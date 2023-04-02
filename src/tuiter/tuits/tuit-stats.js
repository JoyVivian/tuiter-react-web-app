import {useState} from "react";
import {useDispatch} from "react-redux";
import {updateTuitThunk} from "../services/tuits-thunks";


const TuitStatus = ({post}) => {
    const [tuit, setTuit] = useState(post);

    const dispatch = useDispatch();

    const likeHandler = () => {
        const newTuit = {
            ...tuit,
            likes: tuit.liked ? tuit.likes - 1 : tuit.likes + 1,
            liked: !tuit.liked
        };
        setTuit(newTuit);
        
        dispatch(updateTuitThunk(newTuit));
    }

    return (
        <div className="mt-2 me-3">
            <div>
                <div className="d-flex justify-content-between mt-3 mb-3 me-5">
                    <div>
                        <a href="#"><i className="bi bi-chat me-3" style={{color: 'lightgray'}}></i></a>
                        <span className="wd-icon-num" style={{color: 'gray'}}>{post.commentCount}</span>
                    </div>
                    <div>
                        <a href="#"><i className="bi bi-repeat me-3"
                                       style={{color: 'lightgray'}}></i></a>
                        <span className="wd-icon-num" style={{color: 'gray'}}>{post.retweetCount}</span>
                    </div>
                    <div>
                        <a href="#"><i
                            className={`bi bi-heart-fill me-3 clickable ${post.liked ? 'text-danger' : 'text-secondary'}`}
                            style={{color: 'lightgray'}} onClick={likeHandler}></i></a>
                        <span className="wd-icon-num" style={{color: 'gray'}}><em
                            className="">{post.likes}</em></span>
                    </div>
                    <div>
                        <a href="#"><i className="bi bi-upload"
                                       style={{color: 'lightgray'}}></i></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TuitStatus;
