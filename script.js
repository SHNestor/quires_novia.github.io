const btnYes = document.getElementById('btnYes');
const btnNo = document.getElementById('btnNo');

const somoNovios = () => {
    alert('Ahora somos novios');
    location.href = 'https://www.youtube.com/watch?v=am1_JLFDFMw=19s'
}

const evitar_Romper_Bobo = () => {
    btnNo.style.position = 'absolute';
    btnNo.style.top = (Math.random () * window.innerHeight) + 'px';
    btnNo.style.left = (Math.random () * window.innerWidth) + 'px';
}

btnYes.addEventListener('click', somoNovios);
btnNo.addEventListener('mouseover', evitar_Romper_Bobo);