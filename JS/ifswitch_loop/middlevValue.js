'use strict'

//중위값 구하기(버블정렬 방식, arr.sort((a, b) => a - b); 미사용)

//배열선언
let arr = [];
let middle;


//5개 길이로 난수 생성
for (let i= 0; i < 5; i++) {
    arr[i] = Math.floor(Math.random() * 11);
} 


// 버블 정렬 사용
for(let i = 0; i < arr.length; i++) {
    for(let j = 0; j < arr.length - 1; j++) {
        if(arr[j] > arr[j + 1]) {
            let temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
        }
    }
}

//중위값 출력
if(arr.length%2 == 0){
    middle = arr[arr.length/2] + arr[arr.length/2-1] / 2;
}else{
    middle = arr[Math.floor(arr.length/2)];
}

document.write(`${arr} 중간값은: ${middle}`);


/*
7 3 5 배열이라면,
1번인덱스 7과 3비교하여 크면 스위칭
2번인덱스 7과 5를 비교하여 크면 스위칭
*/

// for (let i = 0; i < arr.length; i++) {
//     let temp;
//     if(arr[i] > arr[i+1]) { //앞의 값이 더 크면 스위칭
//         temp = arr[i];
//         arr[i] = arr[i+1];
//         arr[i+1] = temp;
//     }
// }

// if(arr[0] > arr[1]) { //앞의 값이 더 크면 스위칭
//     let temp;
//     temp = arr[0];
//     arr[0] = arr[1];
//     arr[1] = temp;
// }
