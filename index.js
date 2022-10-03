function toggleNav() {
    let nav = document.getElementById("links");
    nav.style.display === "block" ? 
    nav.style.display = "none" : 
    nav.style.display = "block";
}

function openFormLogin() {
    let form = document.getElementById("loginForm");
    form.style.display === "none" ?
    form.style.display = "block":
    form.style.display = "none";

    form.dataset.active === "false" ?
    form.dataset.active = "true" :
    form.dataset.active = "false";

    let background = document.querySelectorAll(".hero-container");
    
    form.dataset.active === "true" ?
    document.querySelector(".hero-container").style.filter = "blur(0px)":
    document.querySelector(".hero-container").style.filter = "blur(4px)";

 }

function closeLoginForm() {
    let form = document.getElementById("loginForm");
    form.style.display === "block" ?
    form.style.display = "none":
    form.style.display = "block";

    form.dataset.active === "false" ?
    form.dataset.active = "true" :
    form.dataset.active = "false";

    form.dataset.active === "true" ?
    document.querySelector(".hero-container").style.filter = "blur(0px)":
    document.querySelector(".hero-container").style.filter = "blur(4px)";

}

function openFormSignup() {
    let form = document.getElementById("signupForm");
    form.style.display === "none" ?
    form.style.display = "block":
    form.style.display = "none";

    form.dataset.active === "false" ?
    form.dataset.active = "true" :
    form.dataset.active = "false";

    
    
    form.dataset.active === "true" ?
    document.querySelector(".hero-container").style.filter = "blur(0px)":
    document.querySelector(".hero-container").style.filter = "blur(4px)";
}

function closeSignupForm() {
    let form = document.getElementById("signupForm");
    form.style.display === "block" ?
    form.style.display = "none":
    form.style.display = "block";

    form.dataset.active === "false" ?
    form.dataset.active = "true" :
    form.dataset.active = "false";

    form.dataset.active === "true" ?
    document.querySelector(".hero-container").style.filter = "blur(0px)":
    document.querySelector(".hero-container").style.filter = "blur(4px)";

}

