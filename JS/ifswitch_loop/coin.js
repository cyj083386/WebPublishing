'use strict'

//잔돈 구하기 -> 3470원
// 1000원 3개 100원 4개 50원 1개 10원 2개

let money = 3470; //금액

let coinUnit = [1000, 500, 100, 50, 10]; // 동전의 단위
let coin = []; // 단위별 동전의 개수

for(let i=0; i<coinUnit.length; i++) {
    //남은돈을 빼고 나눔
    coin[i] = (money - money%coinUnit[i])/coinUnit[i];
    //남은돈
    money = money%coinUnit[i];

    document.write(`${coinUnit[i]}원-> ${coin[i]}`);
    document.write('<br>');
}


