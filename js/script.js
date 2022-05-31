const mario = document.querySelector('.mario');
const tubo = document.querySelector('.tubo'); 

const jump = () =>{
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    },500);
}

  const loop = setInterval(() => {

    const tuboPosition = tubo.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    if(tuboPosition <= 100 && tuboPosition > 0 && marioPosition < 80 ){

        tubo.style.animation = 'none';
        tubo.style.left = '${tuboPosition}px';

        mario.style.animation = 'none';
        mario.style.bottom = '${marioPosition}px';

        mario.src = './img/mario-corre.gif';
        mario.style.marginLeft = '50px'
        
        clearInterval(loop);
    }
},10);
document.addEventListener('keydown', jump);