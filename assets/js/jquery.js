let mode = "dark"

// This obviouisly changed the settings of the darkmode button, set it to change text first
$(".toggle").on("click", function() {
    if (mode == "dark") {

        // Light Mode Settings
        $(this).text("Dark Mode");
        $(".background").css("background", "repeating-linear-gradient(135deg, rgb(240, 240, 240) 6px, rgb(230, 230, 230) 12px)");
        $(".navbar").css("background", "repeating-linear-gradient(135deg, rgb(30,100,150) 6px, rgb(40, 110, 160) 12px)");
        $("footer").css("background", "repeating-linear-gradient(135deg, rgb(30,100,150) 6px, rgb(40, 110, 160) 12px)");
        //$("body").css("color", "#e2e2e2;");
        mode = "light";

    } else {

        // Dark Mode Settings
        $(this).text("Light Mode");
        $(".background").css("background", "repeating-linear-gradient(135deg, rgb(40, 40, 40) 6px, rgb(30, 30, 30) 12px)");
        $(".navbar").css("background", "repeating-linear-gradient(135deg, rgb(60, 60, 60) 6px, rgb(50, 50, 50) 12px)");
        $("footer").css("background", "repeating-linear-gradient(135deg, rgb(60, 60, 60) 6px, rgb(50, 50, 50) 12px)");
        //$("body").css("color", "#e2e2e2;");
        mode = "dark";

    }
})