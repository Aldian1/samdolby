var catchScroll = function() {
    var $window = $(window);
    var $winHeight = $(window).height();
    var $body = $('body');
    var $scroll = $window.scrollTop();

    if ($scroll >= ($winHeight - 120)) {
        $body.addClass("scrolled");
        } else {
            $body.removeClass("scrolled");
        }
};

var dismissNotify = function() {
    var $dismissBtn = $('.dismiss-message');
    var $notifyWrapper = $('.notify-wrapper');

    $dismissBtn.click(function (event) {
        event.preventDefault();
        $notifyWrapper.slideUp("slow");
    });
};

var smoothscroll = function () {
    var $contactBtn = $('.contact-btn');

    $contactBtn.click(function (event) {
       event.preventDefault();
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;

            });
        } // End if
    });
};

$(window).scroll(catchScroll);
$(document).ready(smoothscroll);
$(document).ready(dismissNotify);