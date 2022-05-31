const mario = document.querySelector('.mario');
const tubo = document.querySelector('.tubo');

const jump = () =>{
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    },400);
}

  const loop = setInterval(() => {
    const tuboPosition = tubo.offsetLeft;
    const marioPosition = window.getComputedStyle(mario).bottom.replace('px', '');
    if(tuboPosition <= 100 ){
        tubo.style.animation = 'none';
        tubo.style.left = '${tuboPosition}px';
    }
},10);
document.addEventListener('keydown', jump);