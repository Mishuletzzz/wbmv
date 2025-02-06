document.addEventListener("DOMContentLoaded", function() {
    const yesButton = document.getElementById("yesButton");

    yesButton.addEventListener("click", function() {
        alert("Yay! Happy Valentine's Day!");
        document.querySelector(".overlay").style.display = "none";
    });

    // Prevent user from closing the tab or leaving the page
    window.onbeforeunload = function() {
        return "Are you sure you want to leave? You haven't answered the question yet!";
    };

    // Prevent right-click and context menu
    document.addEventListener("contextmenu", function(event) {
        event.preventDefault();
    });

    // Prevent F12 (Developer Tools)
    document.addEventListener("keydown", function(event) {
        if (event.key === "F12" || (event.ctrlKey && event.shiftKey && event.key === "I")) {
            event.preventDefault();
        }
    });
});
