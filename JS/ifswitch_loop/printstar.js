'use strict'
 let num = 7
//총 num줄 출력
for(let i = 0; i < num; i++)  {

    for(let j=0; j < i; j++)  {
      // space
        document.write('&nbsp');
    }
    for(let j=num; j > i; j--)  {
      
      document.write('*');
    }
    for(let j=num-1; j > i; j--)  {
      document.write('*');
    }
    //줄바꿈
    document.write('<br>');
  }