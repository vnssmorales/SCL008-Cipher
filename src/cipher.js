window.cipher = {
  encode: (offset_value,encode) => {
    let result ="";
    let concatenar="";
    let transform_text=0;
    for (let i=0;i<encode.length;i++){
    transform_text=encode.charCodeAt(i);
    concatenar=String.fromCharCode((transform_text-65+parseInt(offset_value))%26+65);
    result+= concatenar
    
    }
    return result;
  },
  decode: (offset_value,decode) => {
    let result ="";
    let concatenar="";
    let transform_text=0;
    for (let i=0;i<decode.length;i++){
    transform_text=decode.charCodeAt(i);
    concatenar=String.fromCharCode((transform_text-90+parseInt(offset_value))%26+90);
    result+= concatenar
  }
   return result;
  } 
 };
