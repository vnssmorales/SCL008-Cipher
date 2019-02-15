window.cipher = {
  encode: (offset_value,encode) => {
    let result ="";

    for (let i=0;i<encode.length;i++){
    
    let transform_text=encode.charCodeAt(i);
    if(transform_text>=65 && transform_text<=90){
    let concatenar=String.fromCharCode((transform_text-65+parseInt(offset_value))%26+65);
    result+= concatenar;

    }else if(transform_text=== 32){
      result+=" ";

    }else if(transform_text>=33 && transform_text<=63){
    concatenar=String.fromCharCode((transform_text-33+parseInt(offset_value))%31+33);
    result+= concatenar;

    }else if(transform_text>=97 && transform_text<=122){
    concatenar=String.fromCharCode((transform_text-97+parseInt(offset_value))%26+97);
    result+= concatenar;

    }else{
    }
    
    }
    return result;
    },
  
  decode: (value_offset,decode) => {
    let resultt ="";

    for (let i=0;i<decode.length;i++){

    let transform_textd=decode.charCodeAt(i);
    if(transform_textd>=65 && transform_textd<=90){
    let concatenarr=String.fromCharCode((transform_textd-90-parseInt(value_offset))%26+90);
    resultt+= concatenarr;

    }else if(transform_textd=== 32){
    resultt+=" ";
    }else if(transform_textd>=33 && transform_textd<=63){
      concatenarr=String-fromCharCode((transform_textd-63-parseInt(value_offset))%31+63);
      resultt+=concatenarr;
    }else if(transform_textd>=97 && transform_textd<=122){
    concatenarr=String.fromCharCode((transform_textd-122-parseInt(value_offset))%26+122);
    resultt+= concatenarr;

    }else{
    }
    
    } 
    return resultt;
    }
  };

