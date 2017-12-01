 
function playSound(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"`);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
}

function removeTransition(e) {
    if(e.propertyName !== 'transform') return;
    this.classList.remove('playing');
    }

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);
   
//document.getElementById("yes").addEventListener("click", function( event ) {
$( 'body' ).on( 'click', '.key', function() {
    var y = $(this).attr('data-key');
    const audio = document.querySelector(`audio[data-key="${y}"`);
    const key = document.querySelector(`.key[data-key="${y}"`);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
}); 