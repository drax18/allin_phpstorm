$(document).ready(function () {
    if(window.innerWidth > 768){
        $('#parallax').parallax({imageSrc: 'page/images/plate.png'});
    }else{
        $('#parallax').addClass('fixedbg');
    }
    if(window.innerWidth  < 1200){
        $('#thegallery img').addClass('img-responsive');
    }
    $('#myCarousel').carousel({
        interval: 5000
    })
});
