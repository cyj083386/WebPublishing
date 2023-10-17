'use strict'

//구구단

for (let i = 1; i <= 9; i++) {
    let line = '';
    for (let j = 1; j <= 9; j++) {
        line += `${i} * ${j} = ${i*j}\n`;
    }
    console.log(line);
}


