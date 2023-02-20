import NavigationSidebar from "../explore/NavigationSidebar/index.js";
import PostSummaryList from "../explore/PostSummaryList/index.js";
import PostList from "./PostList/index.js";

function homeComponent() {
    $('#wd-home').append(`
  <div class="row ">
   <div class="mt-3 col-2 col-md-2 col-lg-1 col-xl-2">
    ${NavigationSidebar()}
   </div>
   <div class="mt-3 col-10 col-lg-7 col-xl-6">
    ${PostList()}
   </div>
   <div class="mt-3 d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
    ${PostSummaryList()}
   </div>
  </div>
   `);
}

$(homeComponent);