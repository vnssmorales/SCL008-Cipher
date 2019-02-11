window.cipher = {
  encode: (offset_value,encode) => {
    let result ="";
    let concatenar="";
    let transform_text=0;
    for (let i=0;i<text.length;i++){
    transform_text=text.charCodeAt(i);
    concatenar=String.fromCharCode((transform_text-65+offset)%26+65);
    result+= concatenar
    
    }
    return result;
    }
  },
  decode: () => {
    /* Acá va tu código */
  }
};
