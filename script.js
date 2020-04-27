// Open burger
function openBurger() {
    document.querySelector(".navTel").style.display = "flex";
}

// close Burger
function closeBurger() {
    document.querySelector(".navTel").style.display = "none";
}

//Dark mode
let btnDark = document.getElementById('btn-dark-theme');
let darkTheme = false;

function modeSombre() {

    if (darkTheme == false) {

        alert('mode sombre activé');
        btnDark.innerHTML ='<i class="fas fa-moon"></i>';
        return darkTheme = true;

    } else {

        alert('mode claire activé');
        btnDark.innerHTML ='<i class="fas fa-sun"></i>';
        return darkTheme = false;

    }
}

//Event listener for dark theme
btnDark.addEventListener('click', modeSombre);