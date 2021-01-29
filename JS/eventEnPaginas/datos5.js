$(document).ready(function(){
    const btnSlideInvert = document.querySelectorAll('.btn-slide-invert');

    $(btnSlideInvert).on({
        click:function(){
            expandirPanelInvert(btnSlideInvert,400);
        }
    })
});