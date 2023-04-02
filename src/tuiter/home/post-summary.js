import {useDispatch} from "react-redux";
import {deleteTuitThunk} from "../services/tuits-thunks";
// import {deleteTuit} from "../tuits/tuits-reducer";

const PostSummary = ({post, isDot}) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuitThunk(id));
    }

    return (
        <div className="row me-3">
            <div className="col-xxl-10 col-xl-10 col-lg-10 col-md-10 col-sm-10 col-10"
                 style={{textAlign: 'start'}}>
                <span className="me-1"><strong>{post.userName}</strong></span><i
                className="bi bi-patch-check-fill"
                style={{color: 'rgb(29,155,240)'}}></i><span className="ms-1"
                                                             style={{color: 'gray'}}>{post.handle}</span>
                <span> . </span>
                <span
                    style={{color: 'gray'}}>{post.time}</span><br/>
                <p>{post.tuit}
                    {post.isLink &&
                        <span style={{color: post.linkColor}}><i
                            className="bi bi-arrow-right me-1 ms-1"></i>{post.link}</span>}</p>
            </div>
            {
                isDot && <div
                    className="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2 d-flex align-items-start justify-content-end">
                    <i className="bi bi-three-dots" style={{color: 'gray'}}></i>
                </div>
            }
            <div
                className="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2 d-flex align-items-start justify-content-end">
                <i className="bi bi-x-lg float-end"
                   onClick={() => deleteTuitHandler(post._id)}></i>
            </div>
        </div>
    );
};

export default PostSummary;
