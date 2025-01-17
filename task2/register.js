let male = document.querySelector(".male");
let female = document.querySelector(".female");
let button = document.querySelector("input[type=button]");
localStorage.setItem("user_visits", 0);
let clicked = false;
var gender = "";

male.addEventListener("click", function() {
    clicked = true;
    gender = "male";
});

female.addEventListener("click", function() {
    clicked = true;
    gender = "female";
});

button.addEventListener("click", function() {
    let fname = document.querySelector("#name").value;
    let age = document.querySelector("#age").value;
    let color = document.querySelector("#color").value;
    localStorage.setItem("name", fname);
    localStorage.setItem("age", age);
    visits = parseInt(localStorage.getItem("user_visits"));
    localStorage.setItem("user_visits", visits + 1);
    if (clicked) {
        localStorage.setItem("gender", gender);
    }
    localStorage.setItem("color", color);
    window.location.href = "profile.html";
})