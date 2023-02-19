const NavigationSidebar = () => {
    return (`
    <div class="navigation-sidebar"><div class="list-group">
    <a href="#" class="list-group-item list-group-item-action"><i class="fa-brands fa-twitter"></i></a>
    <a href="../../home.html"
       class="list-group-item list-group-item-action">
        <div class="row">
            <div class="col-xxl-2 col-xl-2 d-flex justify-content-start align-items-center"><i
                class="fa-solid fa-house d-flex align-items-center"></i>
            </div>
            <div class="col-xxl-10 col-xl-10 d-none d-xl-block d-flex justify-content-start align-items-center"><span
            >Home</span></div>
        </div>
    </a>
    <a href="#" class="list-group-item list-group-item-action active">
        <div class="row">
            <div class="col-xxl-2 col-xl-2 d-flex justify-content-start align-items-center">
                <i
                    class="fas fa-hashtag"></i>
            </div>
            <div class="col-xxl-10 col-xl-10 d-none d-xl-block d-flex justify-content-start align-items-center">
                <span>Explore</span>
            </div>
        </div>
    </a>
    <a href="../../notifications.html" class="list-group-item list-group-item-action">
        <div class="row">
            <div class="col-xxl-2 col-xl-2 d-flex justify-content-start align-items-center">
                <i
                    class="fa-sharp fa-solid fa-bell"></i>
            </div>
            <div class="col-xxl-10 col-xl-10 d-none d-xl-block d-flex justify-content-start align-items-center">
                <span>Notifications</span>
            </div>
        </div>
    </a>
    <a href="../../messages.html" class="list-group-item list-group-item-action">
        <div class="row">
            <div class="col-xxl-2 col-xl-2 d-flex justify-content-start align-items-center">
                <i
                    class="fa-solid fa-envelope"></i>
            </div>
            <div class="col-xxl-10 col-xl-10 d-none d-xl-block d-flex justify-content-start align-items-center">
                <span>Messages</span>
            </div>
        </div>
    </a>
    <a href="../../bookmarks.html" class="list-group-item list-group-item-action">
        <div class="row">
            <div class="col-xxl-2 col-xl-2 d-flex justify-content-start align-items-center">
                <i
                    class="fa-solid fa-bookmark"></i>
            </div>
            <div class="col-xxl-10 col-xl-10 d-none d-xl-block d-flex justify-content-start align-items-center">
                <span>Bookmarks</span>
            </div>
        </div>
    </a>
    <a href="../../lists.html" class="list-group-item list-group-item-action">
        <div class="row">
            <div class="col-xxl-2 col-xl-2 d-flex justify-content-start align-items-center">
                <i
                    class="fa-solid fa-list"></i>
            </div>
            <div class="col-xxl-10 col-xl-10 d-none d-xl-block d-flex justify-content-start align-items-center">
                <span>Lists</span>
            </div>
        </div>
    </a>
    <a href="../../profile.html" class="list-group-item list-group-item-action">
        <div class="row">
            <div class="col-xxl-2 col-xl-2 d-flex justify-content-start align-items-center">
                <i
                    class="fa-solid fa-user"></i>
            </div>
            <div class="col-xxl-10 col-xl-8 d-none d-xl-block d-flex justify-content-start align-items-center">
                <span>Profile</span>
            </div>
        </div>
    </a>
    <a href="../../more.html" class="list-group-item list-group-item-action">
        <div class="row">
            <div class="col-xxl-2 col-xl-2 d-flex justify-content-start align-items-center">
                <i class="fa-solid fa-circle"></i>
            </div>
            <div class="col-xxl-10 col-xl-8 d-none d-xl-block d-flex justify-content-start align-items-center">
                <span>More</span>
            </div>
        </div>
    </a>
</div>
<div class="mt-2">
    <button type="button" class="btn btn-primary rounded-pill text-center">Tweet
    </button>
</div>
</div>
    `);
}

export default NavigationSidebar;

