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
  
  decode: (value_offset,decode) => {
    let resultt ="";
    let concatenarr="";
    let transform_textd=0;
    for (let i=0;i<decode.length;i++){
    transform_textd=decode.charCodeAt(i);
    concatenarr=String.fromCharCode((transform_textd-90-parseInt(value_offset))%26+90);
    resultt+= concatenarr
    
    }
    return resultt;
    }
  };
