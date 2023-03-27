import {useSelector} from "react-redux";

const ProfileComponent = () => {
    // const {user} = useSelector((state) => state.profile);

    return (
        <div>
            <div className="row">
                <div className="d-flex align-items-center col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2">
                    <i className="bi bi-arrow-left"></i>
                </div>
                <div
                    className="col-xxl-10 col-xl-10 col-lg-10 col-md-10 col-sm-10 col-10 d-flex justify-content-start flex-column">
                    <div className="d-flex align-items-start"><span
                        style={{fontSize: "28px"}}><strong>Wei Zhang</strong></span></div>
                    <div className="d-flex align-items-start"><span style={{color: "gray"}}>520 Tweets</span></div>
                </div>
            </div>
            <div>
                <img
                    src="../../images/Starship.webp"
                    style={{height: '200px', width: '100%'}} className="img-fluid"/>
            </div>
            <div className="d-flex justify-content-between ms-4">
                <img
                    src="../../images/java.png"
                    style={{
                        width: '150px',
                        height: '150px',
                        borderRadius: '50%',
                        position: 'relative',
                        top: '-75px',
                        borderLeft: '1px solid lightgray',
                        borderRight: '1px solid lightgray',
                        borderBottom: '1px solid lightgray',
                    }}/>
                <button className="btn rounded-pill border-secondary mt-2"
                        style={{height: "50px", width: "200px", border: "ipx solid lightgray"}}>Edit Profile
                </button>
            </div>
            <div>
                <div className="d-flex align-items-start"><span
                    style={{fontSize: "28px"}}><strong>Wei Zhang</strong></span></div>
                <div className="d-flex align-items-start"><span style={{color: "gray"}}>@weizhang</span></div>
            </div>
            <div className="mt-4 mb-4 d-flex align-items-start">
                Test, test, test, test, test, test
            </div>

            <div className="d-flex justify-content-start mb-3">
                <div className="me-4"><i className="bi bi-geo-alt"></i><span className="ms-2" style={{color: "gray"}}>Boston, MA</span>
                </div>
                <div className="me-4"><i className="bi bi-balloon"></i><span className="ms-2"
                                                                             style={{color: "gray"}}>06/30/1997</span>
                </div>
                <div><i className="bi bi-calendar-check"></i><span className="ms-2" style={{color: "gray"}}>Joined April 2023</span>
                </div>
            </div>

            <div className="d-flex justify-content-start">
                <span><strong>340</strong> Following</span>
                <span className="ms-4"><strong>223</strong> Followers</span>
            </div>
        </div>
    );
}

export default ProfileComponent;