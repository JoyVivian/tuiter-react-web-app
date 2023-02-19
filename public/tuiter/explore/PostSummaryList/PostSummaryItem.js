const PostSummaryItem = (post) => {
    return (`
        <div class="list-group-item">
        <div class="row" style="border: 1px">
                    <div class="col-xxl-10 col-xl-10 col-lg-10 col-md-10 col-sm-10 col-10">
                        <span class="font-gray">${post.topic}</span><br/>
                        <span><strong>${post.userName}</strong></span><i
                            class="fa-solid fa-circle px-2"></i><span class="font-gray"> - ${post.time}</span><br/>
                        <p style="max-width: 480px"><strong>${post.title}</strong></p>
                    </div>
                    <div class="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2 d-flex align-items-center justify-content-end">
                        <img src=${post.image} style="width: 70px; height: 70px">
                    </div>
                </div>
        </div>
    `);
};

export default PostSummaryItem;