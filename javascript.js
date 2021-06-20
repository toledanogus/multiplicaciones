let n1 = document.querySelector('#n1');
let n2 = document.querySelector('#n2');

let ran1 = 1;
let ran2 = Math.floor(Math.random() * 10) + 1;

n1.innerText = ran1;
n2.innerText = ran2;
document.getElementById("resu").focus();
let pun = 0;


  function clear_mensaje1() {
    setTimeout(function(){ document.querySelector('#correcto').innerText = '';
            
 }, 800);
  }
  function clear_mensaje2() {
    setTimeout(function(){ document.querySelector('#wrong').innerText = '';
                           document.querySelector('#wrong').id = 'correcto';        
 }, 800);
  }

const renovar = () => {
    ran1 = ran1+1;
    pun = 0;
    n1.innerText = ran1;
    n2.innerText = ran2;
    document.getElementById("resu").focus();
    document.querySelector('#puntaje').innerText = pun;
    document.getElementById("siguiente").disabled = true;
    document.querySelector('#p').innerHTML = ' <img src="nivel2.PNG" alt="Nivel2" srcset="">';
    setTimeout(function(){ 
        document.querySelector('img').remove();
 }, 3000);
}



const calcular = () => {
    let resu = document.querySelector('#resu').value;
    let n3 = document.querySelector('#n1').textContent;
    let n4 = document.querySelector('#n2').textContent;
    let resultado =n3*n4;

    if (resu==resultado) {
        console.log('Correcto');
        document.querySelector('#correcto').innerText = '¡Correcto!';
        pun ++;
        document.querySelector('#puntaje').innerText = pun;
        let ran2 = Math.floor(Math.random() * 10) + 1;
        n1.innerText = ran1;
        n2.innerText = ran2;
        document.getElementById("resu").value = "";
        clear_mensaje1();
        document.getElementById("resu").focus();
        let audio = new Audio ('campana.mp3');
        audio.play();
        audio.volume = 0.5;
        if (pun >= 30) {
            document.getElementById("siguiente").disabled = false;
            let audio2 = new Audio ("aplausos.mp3");
            audio2.play();
            audio.volume = 0.5;
        }
        if (pun >= 30 && ran1 == 10) {
            console.log('Fin');
            
        }
    }
    else{
        console.log('Incorrecto');
        let audio3 = new Audio ("error.mp3");
        audio3.play();
        audio3.volume = 0.5;
        document.querySelector('#correcto').id = 'wrong';
        document.querySelector('#wrong').innerText = '¡Incorrecto!';
        clear_mensaje2();
        document.getElementById("resu").focus();    
    }    
            }

