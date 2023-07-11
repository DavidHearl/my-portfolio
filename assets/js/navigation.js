$(document).ready(function () {
    // Get the height of the navigation bar
    var navHeight = $('nav').outerHeight();

    // Store section IDs in an array
    var sectionIds = ['#home', '#about', '#skills', '#projects', '#work', '#education', '#contact'];

    // Update the active navigation item based on the section in view
    function updateActiveNavItem() {
        var currentScrollPos = $(window).scrollTop() + navHeight;

        sectionIds.forEach(function (sectionId) {
            var sectionTop = $(sectionId).offset().top;
            var sectionHeight = $(sectionId).outerHeight();

            if (currentScrollPos >= sectionTop && currentScrollPos < sectionTop + sectionHeight) {
                $('.navbar-nav li').removeClass('active');
                $('a[href="' + sectionId + '"]').closest('li').addClass('active');
            }
        });
    }

    // On scroll, update the active navigation item
    $(window).scroll(function () {
        updateActiveNavItem();
    });

    // On page load or refresh, update the active navigation item
    updateActiveNavItem();

    // Smooth scrolling to section when a navigation link is clicked
    $('a.nav-link').click(function (event) {
        event.preventDefault();
        var target = $(this).attr('href');
        var offset = $(target).offset().top - navHeight + 1;
        $('html, body').animate({ scrollTop: offset }, 500);
    });
});

$(document).ready(function () {
    // Close navbar on link click
    $('.navbar-nav > li > a').on('click', function () {
        $('.navbar-collapse').collapse('hide');
    });
});

$(document).ready(function(){
	$('#nav-icon').click(function(){
		$(this).toggleClass('open');
	});
});