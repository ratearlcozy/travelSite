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
}

function closeLoginForm() {
    let form = document.getElementById("loginForm");
    form.style.display === "block" ?
    form.style.display = "none":
    form.style.display = "block";
}

function openFormSignup() {
    let form = document.getElementById("signupForm");
    form.style.display === "none" ?
    form.style.display = "block":
    form.style.display = "none";
}

function closeSignupForm() {
    let form = document.getElementById("signupForm");
    form.style.display === "block" ?
    form.style.display = "none":
    form.style.display = "block";
}

