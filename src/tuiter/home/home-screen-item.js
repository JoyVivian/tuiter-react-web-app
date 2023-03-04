const PostItem = (post) => {
    return (
        <div className="row" style="border: 1px solid rgb(47, 51, 54)">
            <div className="mt-3 col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-2 d-flex justify-content-start">
                <img className="wd-avatar"
                     src={post.avatarIcon}
                     style="width: 48px; height: 48px; border-radius: 50%"/>
            </div>
            <div
                className="mt-3 col-xxl-10 col-xl-10 col-lg-10 col-md-10 col-sm-10 d-flex flex-column justify-content-center">
                <div className="row">
                    <div className="col-xxl-10 col-xl-10 col-lg-10 col-md-10 col-sm-10 col-10">

                        <span><strong>${post.userName}</strong></span><i
                        className="fa-solid fa-circle-check me-1 ms-1"></i><span>${post.handle}</span><span
                        className="font-gray"> .23h</span><br/>
                        <p style="max-width: 480px">{post.tuit}</p>
                    </div>
                    <div
                        className="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2 d-flex align-items-start justify-content-end">
                        <i className="fa-solid fa-ellipsis" style="color: lightgrey"></i>
                    </div>
                </div>
                <div className="mt-2">
                    <div className="card" style="border: 1px solid rgb(47, 51, 54); border-radius: 15px">
                        <div style="border-radius: 15px">
                            <img src={post.image} style="width: 100%; height: 300px; border-radius: 15px"/>
                        </div>
                        <div className="card-body" style="background-color: black">
                            <div className="wd-link-title-wrapper">
                                <label className="wd-link-title"><b>{post.title}</b></label>
                            </div>
                            <div>
                                <p className="wd-link-content">{post.content}</p>
                            </div>
                            <div>
                                <i className="fa-solid fa-link me-1"
                                   style="color: lightgrey"></i><span>{post.site}</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="d-flex justify-content-between mt-3 mb-3">
                            <div>
                                <a href="#"><i className="fa-regular fa-message fa-lg" style="color: lightgrey"></i></a>
                                <span className="wd-icon-num">22</span>
                            </div>
                            <div>
                                <a href="#"><i className="fa-solid fa-retweet fa-lg" style="color: lightgrey"></i></a>
                                <span className="wd-icon-num">9</span>
                            </div>
                            <div>
                                <a href="#"><i className="fa-regular fa-heart fa-lg" style="color: lightgrey"></i></a>
                                <span className="wd-icon-num"><em className="">37</em></span>
                            </div>
                            <div>
                                <a href="#"><i className="fa-sharp fa-solid fa-arrow-up-from-bracket fa-lg "
                                               style="color: lightgrey"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostItem;