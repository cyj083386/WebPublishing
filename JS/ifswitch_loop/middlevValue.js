'use strict'

//중위값 구하기(버블정렬 방식, arr.sort((a, b) => a - b); 미사용)

//배열선언
let arr = [];

//난수 생성
for (let i= 0; i < 3; i++) {
    arr[i] = Math.floor(Math.random() * 11);
} 

console.log(arr);

for (let i = 0; i < arr.length; i++) {
    let temp;
    if(arr[i] > arr[i+1]) { //앞의 값이 더 크면 스위칭
        temp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = temp;
    }
}

if(arr[0] > arr[1]) { //앞의 값이 더 크면 스위칭
    let temp;
    temp = arr[0];
    arr[0] = arr[1];
    arr[1] = temp;
}

//중위값 출력
console.log(arr[1]);

/*
7 3 5 배열이라면,
1번인덱스 7과 3비교하여 크면 스위칭
2번인덱스 7과 5를 비교하여 크면 스위칭
*/