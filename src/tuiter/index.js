import Nav from '../nav';
import NavigationSidebar from './navigation-sidebar';
import WhoToFollowList from './who-to-follow-list';
import ExploreComponent from './explore';
import {Routes, Route} from 'react-router';
import HomeScreen from './home';
import whoReducer from "./reducers/who-reducer";
import {configureStore} from "@reduxjs/toolkit";
import {Provider} from "react-redux";
import tuitsReducer from "./tuits/tuits-reducer";
import profileReducer from "./profile/profile-reducer";
import HomeComponent from "./home";
import ProfileComponent from "./profile";
import EditProfile from "./profile/edit-profile";

const store = configureStore({reducer: {who: whoReducer, tuits: tuitsReducer, profile: profileReducer}});

function Tuiter() {
    return (
        <Provider store={store}>
            <div className="row mt-2">
                {/*uncomment these lines to test whotofollow list.*/}
                <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                    <NavigationSidebar active="explore"/>
                </div>
                {/*<div className="col-10 col-md-10 col-lg-7 col-xl-6"*/}
                {/*    style={{"position": "relative"}}>*/}
                {/*   <ExploreComponent/>*/}
                {/*</div>*/}

                <div className="col-10 col-md-10 col-lg-7 col-xl-6" style={{'position': 'relative'}}>
                    <Routes>
                        <Route index element={<HomeComponent/>}></Route>
                        {/*<Route path="home" element={<HomeScreen/>}></Route>*/}
                        <Route path="explore" element={<ExploreComponent/>}></Route>
                        <Route path="profile" element={<ProfileComponent/>}></Route>
                        <Route path="edit-profile" element={<EditProfile/>}></Route>
                    </Routes>
                </div>

                <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
                    <WhoToFollowList/>
                </div>
            </div>
        </Provider>
    );
}

export default Tuiter;
