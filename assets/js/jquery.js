let mode = "light"

$("#theme").on("click", function () {

    if (mode == "light") {

        $(this).css("color", "red");
        $(this).css("background-color", "black");
        mode = "dark"

    } else {

        $(this).css("color", "black");
        $(this).css("background-color", "white");
        mode = "light"

    }

})