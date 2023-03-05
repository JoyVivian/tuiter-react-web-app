import Nav from "../nav";
import NavigationSidebar from "./navigation-sidebar"
import WhoToFollowList from "./who-to-follow-list";
import ExploreComponent from "./explore";
import {Routes, Route} from "react-router";
import HomeScreen from "./home";

function Tuiter() {
    return (
        <div className="row mt-2">
            {/*uncomment these lines to test whotofollow list.*/}
            {/*<div className="col-2 col-md-2 col-lg-1 col-xl-2">*/}
            {/*    <NavigationSidebar active="explore"/>*/}
            {/*</div>*/}
            {/*<div className="col-10 col-md-10 col-lg-7 col-xl-6"*/}
            {/*     style={{"position": "relative"}}>*/}
            {/*    <ExploreComponent/>*/}
            {/*</div>*/}
            {/*<div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">*/}
            {/*    <WhoToFollowList/>*/}
            {/*</div>*/}

            <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                <NavigationSidebar active="explore"/>
            </div>

            <div className="col-10 col-md-10 col-lg-7 col-xl-6" style={{"position": "relative"}}>
                <Routes>
                    <Route path="home" element={<HomeScreen/>}></Route>
                    <Route path="explore" element={<ExploreComponent/>}></Route>
                </Routes>
            </div>
        </div>

    );
}

export default Tuiter;