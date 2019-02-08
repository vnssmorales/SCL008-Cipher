const button_enter = document.getElementById('btn_ingresar');

button_enter.addEventListener('click', () =>{
   document.getElementById("box1").style.display="none";
   document.getElementById("box2").style.display="block";
   let name = document.getElementById('nombre').value;
   name_user.innerHTML = `<p id="text">¡ Hola ${name} !</p>`;
   
 })

const button_cipher = document.getElementById('btn_encode');

button_cipher.addEventListener('click', () =>{
   document.getElementById("box2").style.display="none";
   document.getElementById("box3").style.display="block";
   let encode = document.getElementById('codificar').value;
   document.getElementById('codificar').value = "";
   msje_encode.innerHTML = `<p id="text">Aquí está tu mensaje codificado: ${encode}</p>`;
   
})

const button_decipher = document.getElementById("btn_decode");

button_decipher.addEventListener('click',() =>{
   document.getElementById("box2").style.display="none";
   document.getElementById("box3").style.display="block";
   let decode = document.getElementById('decodificar').value;
   document.getElementById('decodificar').value = "";
   msje_decode.innerHTML = `<p id="text">Aquí está tu mensaje decodificado: ${decode}</p>`;

})

const button_msje_new = document.getElementById("btn_new_msje");
button_msje_new.addEventListener('click', () =>{
   document.getElementById("box3").style.display="none";
   document.getElementById("box2").style.display="block";

 })