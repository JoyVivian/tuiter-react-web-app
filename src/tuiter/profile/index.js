import {useSelector} from "react-redux";
import {useNavigate} from "react-router";

const ProfileComponent = () => {
    const user = useSelector((state) => state.profile);

    const navigate = useNavigate();

    const handleEdit = () => {
        navigate('/tuiter/edit-profile');
    }

    const handleBack = () => {
        navigate('/tuiter');
    }

    return (
        <div>
            <div className="row">
                <div className="d-flex align-items-center col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2">
                    <i className="bi bi-arrow-left" onClick={handleBack}></i>
                </div>
                <div
                    className="col-xxl-10 col-xl-10 col-lg-10 col-md-10 col-sm-10 col-10 d-flex justify-content-start flex-column">
                    <div className="d-flex align-items-start"><span
                        style={{fontSize: "28px"}}><strong>{user.firstname} {user.lastname}</strong></span></div>
                    <div className="d-flex align-items-start"><span style={{color: "gray"}}>520 Tweets</span></div>
                </div>
            </div>
            <div>
                <img
                    src={`../../images/${user.bannerPicture}`}
                    style={{height: '200px', width: '100%'}} className="img-fluid"/>
            </div>
            <div className="d-flex justify-content-between ms-4">
                <img
                    src={`../../images/${user.profilePicture}`}
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
                        style={{height: "50px", width: "200px", border: "ipx solid lightgray"}}
                        onClick={handleEdit}>Edit Profile
                </button>
            </div>
            <div>
                <div className="d-flex align-items-start"><span
                    style={{fontSize: "28px"}}><strong>{user.firstname} {user.lastname}</strong></span></div>
                <div className="d-flex align-items-start"><span style={{color: "gray"}}>{user.handle}</span></div>
            </div>
            <div className="mt-4 mb-4 d-flex align-items-start">
                {user.bio}
            </div>

            <div className="d-flex justify-content-start mb-3">
                <div className="me-4"><i className="bi bi-geo-alt"></i><span className="ms-2"
                                                                             style={{color: "gray"}}>{user.location}</span>
                </div>
                <div className="me-4"><i className="bi bi-balloon"></i><span className="ms-2"
                                                                             style={{color: "gray"}}>{user.dateOfBirth}</span>
                </div>
                <div><i className="bi bi-calendar-check"></i><span className="ms-2"
                                                                   style={{color: "gray"}}>Joined {user.dateJoined}</span>
                </div>
            </div>

            <div className="d-flex justify-content-start">
                <span><strong>{user.followingCount}</strong> Following</span>
                <span className="ms-4"><strong>{user.followsCount}</strong> Followers</span>
            </div>
        </div>
    );
}

export default ProfileComponent;