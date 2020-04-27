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

        //Active darky mode 
        document.querySelector(':root').style.setProperty("--var-color-bg-nav", '#e8b5db');//ok
        document.querySelector(':root').style.setProperty("--var-color-border-section", '#333333');//ok
        document.querySelector(':root').style.setProperty("--var-color-contour-profil", '#d476bc');
        document.querySelector(':root').style.setProperty("--var-color-font-standard", '#cecece');
        document.querySelector(':root').style.setProperty("--var-color-text-contenu", '#c0c0c0');
        document.querySelector(':root').style.setProperty("--var-color-white", '#121212');//ok

        document.getElementById('logo-fb-header').innerHTML = '<img src="images/iconFb-ms.png" alt="logo-fb" class="logo-fb">'
        btnDark.innerHTML ='<i class="fas fa-moon"></i>';
        return darkTheme = true;

    } else {

        //active clear mode
        document.querySelector(':root').style.setProperty("--var-color-bg-nav", '#5d23a0');
        document.querySelector(':root').style.setProperty("--var-color-border-section", '#cecece');
        document.querySelector(':root').style.setProperty("--var-color-contour-profil", '#8228b6');
        document.querySelector(':root').style.setProperty("--var-color-font-standard", '#343a40');
        document.querySelector(':root').style.setProperty("--var-color-text-contenu", '#868e96');
        document.querySelector(':root').style.setProperty("--var-color-white", '#ffffff');

        btnDark.innerHTML ='<i class="fas fa-sun"></i>';
        return darkTheme = false;

    }
}

//Event listener for dark theme
btnDark.addEventListener('click', modeSombre);