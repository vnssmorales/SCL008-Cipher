const button_enter = document.getElementById('btn_ingresar');
button_enter.addEventListener('click', () =>{
   document.getElementById("box1").style.display="none";
   document.getElementById("box2").style.display="block";
   let name = document.getElementById('nombre').value;
   document.getElementById("name_user").innerHTML = `<p id="text">¡ Hola ${name} !</p>`;
 })
 
 const button_cipher = document.getElementById('btn_encode');
button_cipher.addEventListener('click', () =>{
   document.getElementById("box2").style.display="none";
   document.getElementById("box3").style.display="block";

   let offset_value = document.getElementById('offset').value;
   let encode = document.getElementById('codificar').value;
   document.getElementById('codificar').value = "";
   document.getElementById('message_encode').value=cipher.encode(offset_value,encode);

   /*let msge_encode = document.getElementById("message_encode");
   msge_encode.innerHTML = `${encode}`;*/
   
})

const button_decipher = document.getElementById("btn_decode");
button_decipher.addEventListener('click',() =>{
   document.getElementById("box2").style.display="none";
   document.getElementById("box4").style.display="block";

   let offset_value = document.getElementById('offset').value;
   let decode = document.getElementById('decodificar').value;
   document.getElementById('decodificar').value = "";
   document.getElementById('message_decode').value=cipher.decode(offset_value,decode);

   
   /*let msge_decode = document.getElementById("message_decode");
   msge_decode.innerHTML = `${decode}`;*/

})

const button_new_mje1 = document.getElementById("btn_msje_1");
button_new_mje1.addEventListener('click', () =>{
   document.getElementById("box3").style.display="none";
   document.getElementById("box2").style.display="block";

})

const button_mje_new2 = document.getElementById("btn_msje_2");
button_mje_new2.addEventListener('click', () =>{
   document.getElementById("box4").style.display="none";
   document.getElementById("box2").style.display="block";

})


/*
const button_cipher = document.getElementById('btn_encode');
button_cipher.addEventListener('click', () =>{
   document.getElementById("box2").style.display="none";
   document.getElementById("box3").style.display="block";
   let offset_value = document.getElementById('offset');
   document.getElementById('offset').value;
   let encode = document.getElementById('codificar').value;
   document.getElementById('codificar').value = "";
   document.getElementById('message_encode').innerHTML+= cipher.encode(offset_value,encode); */