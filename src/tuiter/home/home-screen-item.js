import PostSummary from "./post-summary";

const PostItem = ({post}) => {
    return (
        <div className="row" style={{border: "1px solid rgb(229,234,237)"}}>
            <div
                className="mt-3 col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-2 d-flex flex-column justify-content-start">
                {
                    post.isRetweet &&
                    <i className="bi bi-repeat d-flex justify-content-end" style={{color: "gray"}}></i>
                }
                <img className="wd-avatar"
                     src={post.avatarIcon}
                     style={{width: "48px", height: "48px", borderRadius: "50%"}}/>
            </div>
            <div
                className="mt-3 col-xxl-10 col-xl-10 col-lg-10 col-md-10 col-sm-10 d-flex flex-column justify-content-center">
                {
                    post.isRetweet &&
                    <span style={{color: "gray", textAlign: "start"}}><strong>{post.rename} retweeted</strong></span>
                }
                <PostSummary post={post} isDot={true}/>
                <div className="mt-2 me-3">
                    {
                        post.image &&
                        <div className="card" style={{border: "1px solid rgb(47, 51, 54)", borderRadius: "15px"}}>
                            <div style={{borderRadius: "15px"}}>
                                <img src={post.image} style={{width: "100%", maxHeight: "50%", borderRadius: "15px"}}/>
                            </div>
                        </div>
                    }
                    {
                        post.subPost &&
                        <div className="p-2" style={{border: "2px solid rgb(229,234,237)", borderRadius: "15px"}}>
                            <PostSummary
                                post={post.subPost} isDot={false}/></div>
                    }
                    <div>
                        <div className="d-flex justify-content-between mt-3 mb-3 me-5">
                            <div>
                                <a href="#"><i className="bi bi-chat me-3" style={{color: "lightgray"}}></i></a>
                                <span className="wd-icon-num" style={{color: "gray"}}>{post.commentCount}</span>
                            </div>
                            <div>
                                <a href="#"><i className="bi bi-repeat me-3"
                                               style={{color: "lightgray"}}></i></a>
                                <span className="wd-icon-num" style={{color: "gray"}}>{post.retweetCount}</span>
                            </div>
                            <div>
                                <a href="#"><i className="bi bi-heart me-3"
                                               style={{color: "lightgray"}}></i></a>
                                <span className="wd-icon-num" style={{color: "gray"}}><em
                                    className="">{post.likesCount}</em></span>
                            </div>
                            <div>
                                <a href="#"><i className="bi bi-upload"
                                               style={{color: "lightgray"}}></i></a>
                            </div>
                        </div>
                        {
                            post.isShowThread &&
                            <div className="d-flex justify-content-start mt-2 mb-3"><span
                                style={{color: "rgb(29,155,240)"}}>Show this thread</span></div>

                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostItem;