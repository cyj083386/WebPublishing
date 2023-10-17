'use strict'
//상수는 재할당 불가
// const num =10;
// num = 30;
// console.log(num);

// // 호이스팅 때문에 변수선언이 끌어올려져서 오류 안남.
// console.log(text); // (선언 + 초기화 된 상태)
// text = 'Hanamon!'; // (선언 + 초기화 + 할당 된 상태)
// var text; //해당라인이 없으면 선언되지 않았다고 reference error 확인됨
// console.log(text);


// // 호이스팅 때문에 함수선언이 끌어올려져서 오류 안남.
//foo1(); // 함수 선언문에서는 호이스팅 일어난다.
//foo2(); // 함수 표현식이라서 호이스팅 안된다.(변수에 대입됨)
//function foo1() {
//  console.log('Hello');
//}
//var foo2 = function() {
//  console.log('world');
//}

// let string = "17"+17; //1717
// console.log(string)

// let string2 = 17+"17";
// console.log(string2)

// let string3 = "17"+"17";
// console.log(string3)

// let numi = 17+17;
// console.log(numi)


// let string4 = `문자열(")
// 작은따옴표(')
// 줄바꿈`;
// console.log(string4)

//// 백틱 사용
// let num1 = 10;
// let num2 = 0.1;
// let mysum = `${num1}과 ${num2}를 곱하면 ${num1*num2}이다`
// console.log(mysum)

////JS 배열에는 같은 속성이 아니더라도 모든 자료형을 정의할 수 있다.
////타입이 없으므로 변수자체를 타입이름처럼 쓰는경우가 많다.
// array 에는 for of사용이 좋다.
// let array = ['abc', 10, true, undefined, null, [], {}, function(){}];

// for (var value of array) {
//     console.log(value);
// }

////객체 리터럴 키와 값 한쌍.
// let studentScore ={
//     koreanScore: 80,
//     englishScore: 70,
//     mathScore:90,
//     scienceScore:60
// }

// console.log(studentScore.koreanScore);
// console.log(studentScore['englishScore']);

let a=5;
let b='5';

console.log(a===b);