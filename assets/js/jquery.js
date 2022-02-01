// Background colors
var blue = "repeating-linear-gradient(135deg, rgb(50,110,180) 6px, rgb(60, 120, 190) 12px)";
var white = "repeating-linear-gradient(135deg, rgb(240, 240, 245) 6px, rgb(250, 250, 255) 12px)";
var black = "repeating-linear-gradient(135deg, rgb(40, 40, 40) 6px, rgb(30, 30, 30) 12px)";
var gray = "repeating-linear-gradient(135deg, rgb(60, 60, 60) 6px, rgb(50, 50, 50) 12px)";

function darkMode() {
    // Button Text
    $(".toggle").text("Light Mode");

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
    $("hr").css("background-color", "white");
}

function lightMode() {

    // Button text
    $(".toggle").text("Dark Mode");

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

    $("hr").css("background-color", "black");

}

document.addEventListener('DOMContentLoaded', function() {

    try {
        theme;
    } catch (e) {
        e; // => ReferenceError
        localStorage.setItem("theme", "dark")
        theme = localStorage.getItem("theme")
    };

    if (theme == "light") {
        lightMode();
        localStorage.setItem("theme", "dark");
        theme = localStorage.getItem("theme");
        console.log(theme);
    } else {
        darkMode();
        localStorage.setItem("theme", "light");
        theme = localStorage.getItem("theme");
        console.log(theme);
    }

    console.log(theme)

}, false);

$(".toggle").on("click", function() {
    if (theme == "dark") {
        lightMode();
        localStorage.setItem("theme", "light");
        theme = localStorage.getItem("theme");
        console.log(theme);
    } else {
        darkMode();
        localStorage.setItem("theme", "dark");
        theme = localStorage.getItem("theme");
        console.log(theme);
    }
})