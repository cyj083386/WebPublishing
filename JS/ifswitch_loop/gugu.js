'use strict'

//구구단

for (let i = 2; i <= 9; i++) {
    let line = '';
    for (let j = 1; j <= 9; j++) {
        line += `${i} * ${j} = ${i*j}\n`;
    }
    console.log(line);
}


let i = 2
while (i <= 9) {
    let j = 1;
    let line = '';
    while (j <= 9) {
        line += `${i} * ${j} = ${i*j}<br>`;
        j++;
    }
    document.write(line);
    document.write('<br>');
    i++;
}
