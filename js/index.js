var imageSlider = document.querySelectorAll('.slide');
var arrowLeft = document.getElementById("arrow-left");
var arrowRight = document.getElementById("arrow-right");
var current = 0;

/* Função de Reset */

function reset(){
    for(let i = 0; i < imageSlider.length; i++){
        imageSlider[i].style.display = 'none';
        }
}

/* Começa Slide */

function startSlide(){
    reset();
    imageSlider[0].style.display = 'block';
}
/* Movimentos setas direita e esquerda */

function slideLeft(){
    reset();
    imageSlider[current - 1].style.display = 'block';
    current--;
}

function slideRight(){
    reset();
    imageSlider[current + 1].style.display = 'block';
    current++;
}
/* Evenetos Seta direita e esquerda */
arrowLeft.addEventListener('click', function(){
    if(current === 0){
        current = imageSlider.length;
    }
    slideLeft();
});

arrowRight.addEventListener('click', function(){
    if(current === imageSlider.length - 1){
        current = -1;
    }
    slideRight();
});
startSlide();