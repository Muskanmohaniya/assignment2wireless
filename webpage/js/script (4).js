document.addEventListener("DOMContentLoaded", function() {
    let form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
        alert("Your admission form has been submitted!");
        event.preventDefault();
    });
});
