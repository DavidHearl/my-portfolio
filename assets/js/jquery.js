var mode = "dark"

// Background colors
let blue = "repeating-linear-gradient(135deg, rgb(30,100,150) 6px, rgb(40, 110, 160) 12px)";
let white = "repeating-linear-gradient(135deg, rgb(240, 240, 240) 6px, rgb(230, 230, 230) 12px)";
let black = "repeating-linear-gradient(135deg, rgb(40, 40, 40) 6px, rgb(30, 30, 30) 12px)";
let gray = "repeating-linear-gradient(135deg, rgb(60, 60, 60) 6px, rgb(50, 50, 50) 12px)";

// This obviouisly changed the settings of the darkmode button, set it to change text first
$(".toggle").on("click", function() {

    if (mode == "dark") {

        // Button text
        $(this).text("Dark Mode");

        // Lightmode - Background Color:
        $(".navbar").css("background", blue);
        $("footer").css("background", blue);
        $(".list-group-item").css("background", blue);
        $(".card").css("background", blue);
        $(".card-body").css("background", blue);
        $(".accordion-item").css("background", blue);
        $(".accordion-button").css("background", blue);
        $(".background").css("background", white);
        $(".dropdown-menu").css("background", white);

        // Text Color
        $("h1").css("color", "#000000");
        $("h2").css("color", "#000000");
        $("h3").css("color", "#000000");
        $("p").css("color", "#000000");
        $("li").css("color", "#000000");

        //
        $("hr").css("background-color", "black");

        // Variables
        mode = "light";

    } else {

        // Button Text
        $(this).text("Light Mode");

        // Darkmode - Background Color:
        $(".navbar").css("background", gray);
        $("footer").css("background", gray);
        $(".list-group-item").css("background", gray);
        $(".card").css("background", gray);
        $(".card-body").css("background", gray);
        $(".accordion-item").css("background", gray);
        $(".accordion-button").css("background", gray);

        $(".background").css("background", black);
        $(".dropdown-menu").css("background", black);

        // Text Color
        $("h1").css("color", "#e2e2e2");
        $("h2").css("color", "#e2e2e2");
        $("h3").css("color", "#e2e2e2");
        $("p").css("color", "#e2e2e2");
        $("li").css("color", "#e2e2e2");

        //
        $("hr").css("background-color", "white");

        // Variables
        mode = "dark";

    }
})