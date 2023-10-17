'use strict'

//중위값 구하기(버블정렬 방식 사용)

// 난수 생성 및 배열 초기화
let arr = Array.from({length: 3}, () => Math.floor(Math.random() * 11));

console.log(arr);

// 버블 정렬
for(let i = 0; i < arr.length; i++) {
    for(let j = 0; j < arr.length - 1; j++) {
        if(arr[j] > arr[j + 1]) {
            let temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
        }
    }
}

console.log(arr[1]);

//중위값 출력
console.log(arr[1]);

/*
7 3 5 배열이라면,
1번인덱스 7과 3비교하여 크면 스위칭
2번인덱스 7과 5를 비교하여 크면 스위칭
*/