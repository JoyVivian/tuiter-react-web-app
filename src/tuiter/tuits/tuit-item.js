import PostSummary from '../home/post-summary';
import TuitStatus from "./tuit-stats";

const TuitItem = ({post}) => {
    return (
        <div className="row" style={{border: '1px solid rgb(229,234,237)'}}>
            <div
                className="mt-3 col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-2 d-flex flex-column justify-content-start">
                <img className="wd-avatar"
                     src={post.avatarIcon}
                     style={{width: '48px', height: '48px', borderRadius: '50%'}}/>
            </div>
            <div
                className="mt-3 col-xxl-10 col-xl-10 col-lg-10 col-md-10 col-sm-10 d-flex flex-column justify-content-center">
                <PostSummary post={post} isDot={false}/>
                <TuitStatus post={post}/>
            </div>

        </div>
    );
};

export default TuitItem;
