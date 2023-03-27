import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {useNavigate} from "react-router";
import {updateProfile} from "./profile-reducer";

const EditProfile = () => {
    const user = useSelector((state) => state.profile);
    const [profile, setProfile] = useState(user);

    const dispath = useDispatch();
    const navigate = useNavigate();

    const handleSave = () => {
        dispath(updateProfile(profile));
        navigate('/tuiter/profile');
    }

    return (
        <div>
            <div className="row d-flex align-items-center mb-3">
                <div className="col-1 col-md-1 col-lg-1 col-xl-1 "><i
                    className="bi bi-x-lg"></i></div>
                <div className="col-10 col-md-10 col-lg-10 col-xl-10 d-flex align-items-start"
                     style={{fontSize: "25px"}}><strong>Edit
                    Profile</strong></div>
                <div className="col-1 col-md-1 col-lg-1 col-xl-1">
                    <button className="btn rounded-pill border-secondary mt-2"
                            style={{border: "ipx solid lightgray", color: "white", backgroundColor: "black"}}
                            onClick={handleSave}>Save
                    </button>
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

            </div>

            <div className="row mb-3">
                <form className="form-floating col-6 col-md-6 col-lg-6 col-xl-6">
                    <input type="text" className="form-control"
                           placeholder="First Name"
                           defaultValue={user.firstname}
                           onChange={(e) => setProfile({...profile, firstname: e.target.value})}
                    />
                    <label>First Name</label>
                </form>
                <form className="form-floating col-6 col-md-6 col-lg-6 col-xl-6">
                    <input type="text" className="form-control"
                           placeholder="Last Name"
                           defaultValue={user.lastname}
                           onChange={(e) => setProfile({...profile, lastname: e.target.value})}
                    />
                    <label>Last Name</label>
                </form>
            </div>

            <div className="mb-3">
                <form className="form-floating">
                    <input type="text" className="form-control"
                           placeholder="Bio"
                           defaultValue={user.bio}
                           onChange={(e) => setProfile({...profile, bio: e.target.value})}
                    />
                    <label>Bio</label>
                </form>
            </div>

            <div className="mb-3">
                <form className="form-floating">
                    <input type="text" className="form-control"
                           placeholder="Location"
                           defaultValue={user.location}
                           onChange={(e) => setProfile({...profile, location: e.target.value})}
                    />
                    <label>Location</label>
                </form>
            </div>

            <div className="mb-3">
                <form className="form-floating">
                    <input type="text" className="form-control"
                           placeholder="Website"
                           defaultValue={user.website}
                           onChange={(e) => setProfile({...profile, website: e.target.value})}
                    />
                    <label>Website</label>
                </form>
            </div>

            <div className="mb-5">
                <form className="form-floating">
                    <input type="text" className="form-control"
                           placeholder="Birth Date"
                           defaultValue={user.dateOfBirth}
                           onChange={(e) => setProfile({...profile, dateOfBirth: e.target.value})}
                    />
                    <label>Birth Date</label>
                </form>
            </div>

            <div className="justify-content-between d-flex">
                <span><strong>Switch to professional</strong></span>
                <i className="bi bi-arrow-right"></i>
            </div>

        </div>
    );
}

export default EditProfile;
