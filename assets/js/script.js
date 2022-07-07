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
})

function searchIcon() {
    document.getElementById('searchForm').style = "transform:scaleX(1)";
}

// Set the date we're counting down to
var countDownDate = new Date("Oct 1, 2022 24:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function () {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id="countdown"
    document.getElementById("countdown").innerHTML = "<h3>Starting in:</h3><p style='margin-bottom: 0'><span class='countdown-time'>" + days + "</span>" + " d</p>" + "<hr>" + "<p style='margin-bottom: 0'><span class='countdown-time'>" + hours + "</span>" + " h</p>" + "<hr>" + "<p style='margin-bottom: 0'><span class='countdown-time'>" + minutes + "</span>" + " m</p>" + "<hr>" + "<p style='margin-bottom: 0'><span class='countdown-time'>" + seconds + "</span>" + " s</p>";

    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "EXPIRED";
    }
}, 1000);