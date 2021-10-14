const start = document.getElementById("start");
const game = document.querySelector(".game");

let randomNumber =Math.floor(Math.random()*100);
let submit = document.getElementById("submit");
let prevGuessLabel = document.getElementById("prevGuessLabel");
let anterioresSupo = document.getElementById("anterioresSupo");;
let hint = document.getElementById("hint");
let reiniciar = document.getElementById("reiniciar");
let contador = 0;


start.addEventListener('click',iniciarJuego);
function iniciarJuego(){
    game.style.display='block' //game.classList.remove("game")
    start.style.display= 'none'
}


myForm.addEventListener("submit", (e) =>{
    e.preventDefault();
});


submit.addEventListener('click', validation);
function validation(){
    let playerGuess= parseInt(document.getElementById("guess").value);
    contador++;

    if (playerGuess === ""){
        hint.textContent= "Por favor ingresa un número valido"
    } else if (playerGuess === randomNumber){
        hint.textContent= "GANASTE COMPI!!!"
        reiniciar.style.display='block';
    } else if (playerGuess > randomNumber){
        hint.textContent= "Cerca, pero el número que ingresaste es mayor que la respuesta"
    } else if (playerGuess < randomNumber){
        hint.textContent= "Cerca, pero el número que ingresaste es menor que la respuesta"
    }
    anterioresSupo.textContent+= playerGuess + ' ';

    if (contador === 10){
        game.style.display='none';
        reiniciar.style.display='block';
        document.getElementById('gameover').textContent = "JAJAJA, PERDISTE ÑERI!!!"
    }
}
function reload(){
    history.go(0);
}