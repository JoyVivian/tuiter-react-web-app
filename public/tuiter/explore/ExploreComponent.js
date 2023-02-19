import PostSummaryList
    from "./PostSummaryList/index.js";

const ExploreComponent = () => {
    return (`
            <div class="row">
                       <!-- search field and cog -->
                        <div class="d-flex justify-content-between">
            <div class="col-11 my-3 rounded-pill border d-flex align-items-center" style="background-color: white; border-color: #dee2e6;">
                <i class="fas fa-search" style="margin-left: 10px"></i>
                <input type="text" class="form-control border-0 rounded-pill" placeholder="Search Twitter">
            </div>
            <div class="col-1 d-flex align-items-center justify-content-end">
                <a href="explore-settings.html"><i class="fa-solid fa-gear fa-lg"
                                                   style="color: rgb(0, 123, 255)"></i></a>
            </div>
        </div>
           </div>
           <ul class="nav mb-2 nav-tabs">
                      <!-- tabs -->
                       <div class="mb-2">
            <ul class="nav nav-tabs">
                <li class="nav-item">
                    <a class="nav-link active" href="./for-you.html">For you</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="./trending.html">Trending</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="./news.html">News</a>
                </li>
                <li>
                    <a class="nav-link" href="./sports.html">Sports</a>
                </li>
                <li class="d-none d-md-block">
                    <a class="nav-link" href="./entertainment.html">Entertainment</a>
                </li>
            </ul>
        </div>
           </ul>
           <!-- image with overlaid text -->
            <div class="position-relative mb-2">
                <img src="../../images/Starship.webp" class="card-img-top img-fluid">
                <p class="image-caption">Spacex's Starship</p>
            </div>
            
           ${PostSummaryList()}
    `);
}
export default ExploreComponent;
