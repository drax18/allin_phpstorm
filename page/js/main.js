$(document).ready(function () {
    $('#parallax').parallax({imageSrc: 'page/images/plate.png'});

    /* Smooth anchor 

    $('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});
    */
    /* Menu if visible 
    function isElementVisible(elementToBeChecked)
    {
        var TopView = $(window).scrollTop();
        var BotView = TopView + $(window).height();
        var TopElement = $(elementToBeChecked).offset().top;
        var BotElement = TopElement + $(elementToBeChecked).height();
        return ((BotElement <= BotView) && (TopElement >= TopView));
    }
    $(".hidden-menu").sticky({topSpacing: 0});
    
    $(window).scroll(function () {
        isOnView = isElementVisible("");
        if (isOnView) {
            $('.hidden-menu').css('display', 'none');
        } else { // If not visible
            $('.hidden-menu').css('display', 'block');
        }
    });
*/


});
