'use strict'

//난수 생성
//let num = Math.floor(Math.random() * 11);
 


for(let i = 0; i < 5; i++)  {
    for(let j = 4; j > i; j--)  {
        console.log(' ');
    }
    for(let j = 0; j <= i; j++) {
        console.log('*');
    }
    console.log('\n');
  }
