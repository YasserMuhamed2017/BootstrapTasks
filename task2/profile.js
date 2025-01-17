let image = document.querySelector("img");
let fname = localStorage.getItem("name");
let color = localStorage.getItem("color");
let age = localStorage.getItem("age");
let gender = localStorage.getItem("gender");
let visits = localStorage.getItem("user_visits");
if (gender == "male") {
    document.querySelector("#container").innerHTML = `<img class="male" width="250" height="250" src="https://img.icons8.com/deco-glyph/480/user-male.png" alt="user-male"/>`;
}

if (gender == "female") {
    document.querySelector("#container").innerHTML = `<img class="female" width="250" height="250" src="https://img.icons8.com/ios-filled/250/user-female.png" alt="user-female"/>`
}

document.querySelector("#header").textContent = "Welcome " + fname + " you have visited this site " + visits + " times," + " and your age is " + age;
localStorage.setItem("user_visits", visits + 1);