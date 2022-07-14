$(window).scroll(function () {
    var sticky = $('.sticky'),
        scroll = $(window).scrollTop();

    if (scroll >= 100) sticky.addClass('fixed');
    else sticky.removeClass('fixed');
});

$('.owl-carousel').owlCarousel({
    items: 1,
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 5
        }
    }
});

var mybutton = document.getElementById("backTop");


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

setTimeout(() => {
    document.getElementById("preloader").style.opacity = "0";
    setTimeout(() => {
        document.getElementById("preloader").style.display = "none";
    }, 4000);
}, 1000);

document.onkeydown = function (e) {
    if (event.keyCode == 123) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
        return false;
    }
};

document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
  });

function searchIcon() {
    document.getElementById('searchForm').style = "transform:scaleX(1)";
};

$(document).ready(function() {

    /** ---------------------------- //
     *  @group viewport trigger script 
     * for adding or removing classes from elements in view within viewport
    */
  
    var $animationElements = $('.animation-fadeleft');
    var $window = $(window);

    // ps: Let's FIRST disable triggering on small devices!
    var isMobile = window.matchMedia("only screen and (max-width: 768px)");
    if (isMobile.matches) {
        $animationElements.removeClass('animation-fadeleft');
    }

    function checkIfInView() {

        var windowHeight = $window.height();
        var windowTopPosition = $window.scrollTop();
        var windowBottomPosition = (windowTopPosition + windowHeight);

        $.each($animationElements, function () {
            var $element = $(this);
            var elementHeight = $element.outerHeight();
            var elementTopPosition = $element.offset().top;
            var elementBottomPosition = (elementTopPosition + elementHeight);

//check to see if this current container is within viewport
            if ((elementBottomPosition >= windowTopPosition) &&
                (elementTopPosition <= windowBottomPosition)) {
                $element.addClass('animate__animated animate__fadeInLeft');
            } else {
                $element.removeClass('animate__animated animate__fadeInLeft');
            }
        });
    }

    $window.on('scroll resize', checkIfInView);
    $window.trigger('scroll');
});

$(document).ready(function() {

    /** ---------------------------- //
     *  @group viewport trigger script 
     * for adding or removing classes from elements in view within viewport
    */
  
    var $animationElements = $('.animation-faderight');
    var $window = $(window);

    // ps: Let's FIRST disable triggering on small devices!
    var isMobile = window.matchMedia("only screen and (max-width: 768px)");
    if (isMobile.matches) {
        $animationElements.removeClass('animation-faderight');
    }

    function checkIfInView() {

        var windowHeight = $window.height();
        var windowTopPosition = $window.scrollTop();
        var windowBottomPosition = (windowTopPosition + windowHeight);

        $.each($animationElements, function () {
            var $element = $(this);
            var elementHeight = $element.outerHeight();
            var elementTopPosition = $element.offset().top;
            var elementBottomPosition = (elementTopPosition + elementHeight);

//check to see if this current container is within viewport
            if ((elementBottomPosition >= windowTopPosition) &&
                (elementTopPosition <= windowBottomPosition)) {
                $element.addClass('animate__animated animate__fadeInRight');
            } else {
                $element.removeClass('animate__animated animate__fadeInRight');
            }
        });
    }

    $window.on('scroll resize', checkIfInView);
    $window.trigger('scroll');
});

$(document).ready(function() {

    /** ---------------------------- //
     *  @group viewport trigger script 
     * for adding or removing classes from elements in view within viewport
    */
  
    var $animationElements = $('.animation-bouncein');
    var $window = $(window);

    // ps: Let's FIRST disable triggering on small devices!
    var isMobile = window.matchMedia("only screen and (max-width: 768px)");
    if (isMobile.matches) {
        $animationElements.removeClass('animation-bouncein');
    }

    function checkIfInView() {

        var windowHeight = $window.height();
        var windowTopPosition = $window.scrollTop();
        var windowBottomPosition = (windowTopPosition + windowHeight);

        $.each($animationElements, function () {
            var $element = $(this);
            var elementHeight = $element.outerHeight();
            var elementTopPosition = $element.offset().top;
            var elementBottomPosition = (elementTopPosition + elementHeight);

//check to see if this current container is within viewport
            if ((elementBottomPosition >= windowTopPosition) &&
                (elementTopPosition <= windowBottomPosition)) {
                $element.addClass('animate__animated animate__bounceIn');
            } else {
                $element.removeClass('animate__animated animate__bounceIn');
            }
        });
    }

    $window.on('scroll resize', checkIfInView);
    $window.trigger('scroll');
});

$(document).ready(function() {

    /** ---------------------------- //
     *  @group viewport trigger script 
     * for adding or removing classes from elements in view within viewport
    */
  
    var $animationElements = $('.animation-backinup');
    var $window = $(window);

    // ps: Let's FIRST disable triggering on small devices!
    var isMobile = window.matchMedia("only screen and (max-width: 768px)");
    if (isMobile.matches) {
        $animationElements.removeClass('animation-backinup');
    }

    function checkIfInView() {

        var windowHeight = $window.height();
        var windowTopPosition = $window.scrollTop();
        var windowBottomPosition = (windowTopPosition + windowHeight);

        $.each($animationElements, function () {
            var $element = $(this);
            var elementHeight = $element.outerHeight();
            var elementTopPosition = $element.offset().top;
            var elementBottomPosition = (elementTopPosition + elementHeight);

//check to see if this current container is within viewport
            if ((elementBottomPosition >= windowTopPosition) &&
                (elementTopPosition <= windowBottomPosition)) {
                $element.addClass('animate__animated animate__backInUp');
            } else {
                $element.removeClass('animate__animated animate__backInUp');
            }
        });
    }

    $window.on('scroll resize', checkIfInView);
    $window.trigger('scroll');
});

$(document).ready(function() {

    /** ---------------------------- //
     *  @group viewport trigger script 
     * for adding or removing classes from elements in view within viewport
    */
  
    var $animationElements = $('.animation-fadein');
    var $window = $(window);

    // ps: Let's FIRST disable triggering on small devices!
    var isMobile = window.matchMedia("only screen and (max-width: 768px)");
    if (isMobile.matches) {
        $animationElements.removeClass('animation-fadein');
    }

    function checkIfInView() {

        var windowHeight = $window.height();
        var windowTopPosition = $window.scrollTop();
        var windowBottomPosition = (windowTopPosition + windowHeight);

        $.each($animationElements, function () {
            var $element = $(this);
            var elementHeight = $element.outerHeight();
            var elementTopPosition = $element.offset().top;
            var elementBottomPosition = (elementTopPosition + elementHeight);

//check to see if this current container is within viewport
            if ((elementBottomPosition >= windowTopPosition) &&
                (elementTopPosition <= windowBottomPosition)) {
                $element.addClass('animate__animated animate__fadeIn');
            } else {
                $element.removeClass('animate__animated animate__fadeIn');
            }
        });
    }

    $window.on('scroll resize', checkIfInView);
    $window.trigger('scroll');
});

$(window).on('load', function () {
    $('#loading').hide();
  }) 