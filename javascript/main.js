// FUNCIONALIDAD DE LA BARRA DE NAVEGACIÓN
const btnToggle = document.querySelector('.toggle-btn');
const blackScreen = document.querySelector('.black-screen');
const btnCloseSidebar = document.querySelector('.btn-close-i');
const liSidebar = document.querySelectorAll('#liSidebar');

btnToggle.addEventListener('click', function () {
    document.getElementById('sidebar').classList.toggle('active');
    blackScreen.classList.add('active');
});

blackScreen.addEventListener('click', function () {
    document.getElementById('sidebar').classList.remove('active');
    blackScreen.classList.remove('active');
});

btnCloseSidebar.addEventListener('click', function () {
    document.getElementById('sidebar').classList.remove('active');
    blackScreen.classList.remove('active');
});

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        document.getElementById('sidebar').classList.remove('active');
        blackScreen.classList.remove('active');
    }
});

liSidebar.forEach(function (li) {
    li.addEventListener('click', function () {
        document.getElementById('sidebar').classList.remove('active');
        blackScreen.classList.remove('active');
    });
});

// COPIAR AL PORTAPAPELES EL E-MAIL
const btnCopy = document.querySelector('#copy');

copy.onclick = async () => {
    try {
        await navigator.clipboard.writeText('mateogasme@gmail.com');
    } catch (error) {
        console.error(error);
    }
}