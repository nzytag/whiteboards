'use strict'


function high(x){
  let words = x.split(' '),
  max =0,
  result = '';
  for (let i = 0; i < words.length; i++){
    let s = words[i],
    val = 0;
    for (let j = 0; j <s.length; j++){
      val += (s.charCodeAt(j)-90);
    }
    if(val >max){
      max = val;
      result = s;
    }
  }
  return result;
}
