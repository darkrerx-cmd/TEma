const btnNo = document.getElementById('btn-no');
const btnSi = document.getElementById('btn-si');
const mainContainer = document.getElementById('main-container');
const letterContainer = document.getElementById('letter-container');

function moverBoton() {
    const anchoPantalla = window.innerWidth;
    const altoPantalla = window.innerHeight;

    const radioMovimiento = anchoPantalla < 600 ? 100 : 350; 

 
    const newX = (Math.random() * radioMovimiento * 2) - radioMovimiento;
    const newY = (Math.random() * radioMovimiento * 2) - radioMovimiento;

    btnNo.style.transform = `translate(${newX}px, ${newY}px)`;
}

btnNo.addEventListener('mouseover', moverBoton);

btnNo.addEventListener('touchstart', (e) => {
    e.preventDefault();
    moverBoton();
});

btnSi.addEventListener('click', () => {
    mainContainer.style.display = 'none';
    letterContainer.classList.remove('hidden');
});

function crearSobreLluvia() {
    const envelope = document.createElement('div');
    envelope.classList.add('rain-envelope');
    envelope.innerText = '💌'; 
    
    envelope.style.left = Math.random() * 100 + 'vw';
    
    const size = Math.random() * 20 + 20; 
    envelope.style.fontSize = size + 'px';
    
    const duration = Math.random() * 3 + 4; 
    envelope.style.animationDuration = duration + 's';
    
    document.body.appendChild(envelope);

    setTimeout(() => {
        envelope.remove();
    }, duration * 1000);
}

setInterval(crearSobreLluvia, 400);