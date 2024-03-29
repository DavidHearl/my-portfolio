$(document).ready(function () {
    // Get the height of the navigation bar
    var navHeight = $('nav').outerHeight();

    // Store section IDs in an array
    var sectionIds = ['#home', '#about', '#projects', '#work', '#education', '#contact'];

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

        // Close navbar and toggle hamburger icon
        $('.navbar-collapse').collapse('hide');
        $('#nav-icon').removeClass('open');
    });

    // Toggle hamburger icon
    $('#nav-icon').click(function () {
        $(this).toggleClass('open');
    });
});