const PostItem = (post) => {
    return (`
        <div  class="row" style="border: 1px solid rgb(47, 51, 54)">
            <div class="mt-3 col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-2 d-flex justify-content-start">
                <img class="wd-avatar"
                     src=${post.avatarIcon} 
                     style="width: 48px; height: 48px; border-radius: 50%"/>
            </div>
            <div class="mt-3 col-xxl-10 col-xl-10 col-lg-10 col-md-10 col-sm-10 d-flex flex-column justify-content-center">
               <div class="row">
                    <div class="col-xxl-10 col-xl-10 col-lg-10 col-md-10 col-sm-10 col-10">
         
                        <span><strong>${post.userName}</strong></span><i class="fa-solid fa-circle-check me-1 ms-1"></i><span>${post.handle}</span><span class="font-gray"> .23h</span><br/>
                        <p style="max-width: 480px">${post.tuit}</p>
                    </div>
                    <div class="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2 d-flex align-items-start justify-content-end"> 
                        <i class="fa-solid fa-ellipsis" style="color: lightgrey"></i>
                    </div>  
               </div>
               <div class="mt-2">
                    <div class="card" style="border: 1px solid rgb(47, 51, 54); border-radius: 15px" >
                         <div style="border-radius: 15px">
                             <img src=${post.image} style="width: 100%; height: 300px; border-radius: 15px" />
                        </div>
                        <div class="card-body" style="background-color: black">
                             <div class="wd-link-title-wrapper">
                        <label class="wd-link-title"><b>${post.title}</b></label>
                    </div>
                    <div>
                        <p class="wd-link-content">${post.content}</p>
                    </div>
                    <div>
                        <i class="fa-solid fa-link me-1" style="color: lightgrey"></i><span>${post.site}</span>
                    </div>
                        </div>
                    </div>
               <div>
               <div class="d-flex justify-content-between mt-3 mb-3">
                    <div>
                        <a href="#"><i class="fa-regular fa-message fa-lg" style="color: lightgrey"></i></a>
                        <span class="wd-icon-num">22</span>
                    </div>
                    <div>
                        <a href="#"><i class="fa-solid fa-retweet fa-lg" style="color: lightgrey"></i></a>
                        <span class="wd-icon-num">9</span>
                    </div>
                    <div>
                        <a href="#"><i class="fa-regular fa-heart fa-lg" style="color: lightgrey"></i></a>
                        <span class="wd-icon-num"><em class="">37</em></span>
                    </div>
                    <div>
                        <a href="#"><i class="fa-sharp fa-solid fa-arrow-up-from-bracket fa-lg " style="color: lightgrey"></i></a>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </div>
    `);
};

export default PostItem;