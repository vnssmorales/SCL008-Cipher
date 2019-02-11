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
   let msge_encode = document.getElementById("message_encode");
   msge_encode.innerHTML = `${encode}`;
   
})

const button_decipher = document.getElementById("btn_decode");
button_decipher.addEventListener('click',() =>{
   document.getElementById("box2").style.display="none";
   document.getElementById("box4").style.display="block";
   let decode = document.getElementById('decodificar').value;
   document.getElementById('decodificar').value = "";
   let msge_decode = document.getElementById("message_decode");
   msge_decode.innerHTML = `${decode}`;

})

const button_new_mje = document.getElementById("btn_new_msje");
button_new_mje.addEventListener('click', () =>{
   document.getElementById("box3").style.display="none";
   document.getElementById("box2").style.display="block";

})

const button_mje_new = document.getElementById("btn_msje_new");
button_mje_new.addEventListener('click', () =>{
   document.getElementById("box4").style.display="none";
   document.getElementById("box2").style.display="block";

})