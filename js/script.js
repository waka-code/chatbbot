/* 

hola,hol,holis,holaaa
Bien y tu
Cual es tu Pasatiempo favorito
Cuál es tu comida favorita
Cual es tu estación favorita del año
Cual es tu Ciudad o campo
*/

let inputTxt = document.getElementById("inputTxt");
let chatp = document.getElementById("chatp");
let btn = document.getElementById("chatbtn");
let pregunta = "";
let respuesta1 = "";

window.addEventListener("keydown",keyDownHandler, false);
btn.addEventListener("click",Enviar, false);
inputTxt.focus();

function keyDownHandler(e){
    if(e.keyCode === 13){
        Enviar()
    }
}

function Enviar(){
    
     pregunta = inputTxt.value;
    if (pregunta === "hola"|| pregunta ===`hol`|| pregunta ===`holis`||pregunta ===`holaaa`){
        respuesta1 = " Hola, como estas";
    }
    else if (pregunta === "Bien y tu" || pregunta === `bien y tu`){
        respuesta1 = "Muy bien, en que puedo ayudarte";
    }
    else if (pregunta === "Cual es tu Pasatiempo favorito"){
        respuesta1 = "Codear y tu";
    }
    else if (pregunta === "Cuál es tu comida favorita"){
        respuesta1 = "bit y tu humano";
    }
    else if (pregunta === "Cual es tu estación favorita del año"){
        respuesta1 = "ninguna y el suyo";
    }
    else if (pregunta === "Cual es tu Ciudad o campo"){
        respuesta1 = "la web y el suyo";
    }
    else{
        respuesta1 = "No soy capaz de entender el origen de su pregunta";
    }

    chatp.innerHTML = respuesta1;
    inputTxt.value ="";
    inputTxt.focus();
}