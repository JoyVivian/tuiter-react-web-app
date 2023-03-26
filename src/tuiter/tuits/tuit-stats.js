const TuitStatus = ({post}) => {
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
                        <a href="#"><i className="bi bi-heart me-3"
                                       style={{color: 'lightgray'}}></i></a>
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
