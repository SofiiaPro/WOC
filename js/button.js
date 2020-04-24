function openFunction () {
    let moreText = document.getElementById("readMore");

    if (document.getElementById("moreButton").onclick) {
        moreText.style.display = "inline";
        document.getElementById('moreButton').style.display = "none";
        document.getElementById('lessButton').style.display = "inline";
    }
}
function closeButton () {
    let moreText = document.getElementById("readMore");

    if (document.getElementById("lessButton").onclick) {
        moreText.style.display = "none";
        document.getElementById('lessButton').style.display = "none";
        document.getElementById('moreButton').style.display = "inline";
        document.getElementById('statistics-description').scrollIntoView();
        document.getElementsByClassName('main-header').style.height = "1150px";
    }
}
function signInFunction () {
    if (document.getElementById("signInButton").onclick) {
        document.getElementById("registerForm").style.display = "none";
        document.getElementById("signInForm").style.display = "inline";
    }
}
function registerVerification () {
    if (document.getElementById("registerVerification-button").onclick) {
        document.getElementById("registerForm").style.display = "none";
        document.getElementById("signInForm").style.display = "none";
        document.getElementById("verificationForm").style.display = "inline";
    }
}
function registerFunction () {
    if (document.getElementById("registerButton").onclick) {
        document.getElementById("registerForm").style.display = "inline";
        document.getElementById("signInForm").style.display = "none";
    }
}
function GoHomeFunction () {
    if (document.getElementById("HomeButton").onclick) {
        document.getElementById("signInForm").style.display = "none";
        document.getElementById("verificationForm").style.display = "none";
        document.getElementById("registerForm").style.display = "inline";
    }
}
function goToRegisterFunction () {
    if (document.getElementById("goToRegisterForm").onclick) {
        document.getElementById('registerForm').scrollIntoView();
    }
}
