const WhoToFollowListItem = (who) => {
    return (`
         <div class="list-group-item">
                <div class="row">
                    <div class="col-xxl-2 col-xl-2 col-lg-2">
                        <img src=${who.avatarIcon} class="rounded-circle" width="45" , height="45">
                    </div>
                    <div class=" col-xxl-8 col-xl-8 col-lg-8 d-flex align-items-center">
                        <div>
                            <span><strong>${who.userName}</strong></span><i
                                class="fa-solid fa-circle px-2"></i><br/>
                            <span>${who.handle}</span>
                        </div>
                    </div>
                    <div class="col-xxl-2 col-xl-2 col-lg-2 d-flex align-items-center justify-content-end">
                        <button type="button" class="btn btn-primary rounded-pill">Follow</button>
                    </div>
                </div>
            </div>
    `);
};

export default WhoToFollowListItem;