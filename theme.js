

function isDarkThemeEnabled(){
    return document.body.classList.contains('dark-theme');
}

function switchTheme(){
    document.body.classList.toggle('dark-theme');
    
    if(isDarkThemeEnabled()){
        document.getElementById("switch-theme-bt").innerHTML = "Light Mode 🌞";
        document.getElementById("instagram-phone-img").style.display = "none";
        document.getElementById("instagram-phone-black-img").style.display = "flex";
        document.getElementById("instagram-logo-img").style.filter = "invert(100%)";
    } else {
        document.getElementById("switch-theme-bt").innerHTML = "Night Mode 🌙";
        document.getElementById("instagram-phone-img").style.display = "flex";
        document.getElementById("instagram-phone-black-img").style.display = "none";
        document.getElementById("instagram-logo-img").style.filter = "invert(0%)";
    }
}