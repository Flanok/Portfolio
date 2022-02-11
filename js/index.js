const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link')


navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
})

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})

function enableDarkMode() {
    var element = document.body;
    var darkModeText = document.getElementById('dark-mode-text');
    element.classList.toggle("dark");
    if (darkModeText.innerHTML == "Dark Mode") {
        darkModeText.innerHTML = "Light Mode";
    } else {
        darkModeText.innerHTML = "Dark Mode";
    }
}