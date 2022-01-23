var mode = "dark"

// This obviouisly changed the settings of the darkmode button, set it to change text first
$(".toggle").on("click", function() {

    if (mode == "dark") {

        // Button text
        $(this).text("Dark Mode");

        // Lightmode - Background Color:
        // Blue: 30,100,150 - 40,110,160
        // White: 230,230,230 - 240,240,240
        $(".navbar").css("background", "repeating-linear-gradient(135deg, rgb(30,100,150) 6px, rgb(40, 110, 160) 12px)");
        $("footer").css("background", "repeating-linear-gradient(135deg, rgb(30,100,150) 6px, rgb(40, 110, 160) 12px)");
        $(".list-group-item").css("background", "repeating-linear-gradient(135deg, rgb(60, 60, 60) 6px, rgb(50, 50, 50) 12px)");
        $(".card").css("background", "repeating-linear-gradient(135deg, rgb(30,100,150) 6px, rgb(40, 110, 160) 12px)");
        $(".card-body").css("background", "repeating-linear-gradient(135deg, rgb(30,100,150) 6px, rgb(40, 110, 160) 12px)");
        $(".accordion-item").css("background", "repeating-linear-gradient(135deg, rgb(30,100,150) 6px, rgb(40, 110, 160) 12px)");
        $(".accordion-button").css("background", "repeating-linear-gradient(135deg, rgb(30,100,150) 6px, rgb(40, 110, 160) 12px)");

        $(".background").css("background", "repeating-linear-gradient(135deg, rgb(240, 240, 240) 6px, rgb(230, 230, 230) 12px)");
        $(".dropdown-menu").css("background", "repeating-linear-gradient(135deg, rgb(240, 240, 240) 6px, rgb(230, 230, 230) 12px)");

        // Text Color
        $("h1").css("color", "#000000");
        $("h2").css("color", "#000000");
        $("h3").css("color", "#000000");
        $("p").css("color", "#000000");
        $("li").css("color", "#000000");

        // Variables
        mode = "light";


    } else {

        // Button Text
        $(this).text("Light Mode");

        // Darkmode - Background Color:
        // Black: 40,40,40 - 30,30,30
        // Gray: 60,60,60 - 50,50,50
        $(".background").css("background", "repeating-linear-gradient(135deg, rgb(40, 40, 40) 6px, rgb(30, 30, 30) 12px)");
        $(".dropdown-menu").css("background", "repeating-linear-gradient(135deg, rgb(40, 40, 40) 6px, rgb(30, 30, 30) 12px)");
        $(".card-body").css("background", "repeating-linear-gradient(135deg, rgb(40,40,40) 6px, rgb(30, 30, 30) 12px)");

        $(".navbar").css("background", "repeating-linear-gradient(135deg, rgb(60, 60, 60) 6px, rgb(50, 50, 50) 12px)");
        $("footer").css("background", "repeating-linear-gradient(135deg, rgb(60, 60, 60) 6px, rgb(50, 50, 50) 12px)");
        $(".list-group-item").css("background", "repeating-linear-gradient(135deg, rgb(60, 60, 60) 6px, rgb(50, 50, 50) 12px)");
        $(".card").css("background", "repeating-linear-gradient(135deg, rgb(60, 60, 60) 6px, rgb(50, 50, 50) 12px);");
        $(".accordion-item").css("background", "repeating-linear-gradient(135deg, rgb(60, 60, 60) 6px, rgb(50, 50, 50) 12px)");
        $(".accordion-button").css("background", "repeating-linear-gradient(135deg, rgb(60, 60, 60) 6px, rgb(50, 50, 50) 12px)");

        // Text Color
        $("h1").css("color", "#e2e2e2");
        $("h2").css("color", "#e2e2e2");
        $("h3").css("color", "#e2e2e2");
        $("p").css("color", "#e2e2e2");
        $("li").css("color", "#e2e2e2");

        // Variables
        mode = "dark";

    }
})