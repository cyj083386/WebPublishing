'use strict'

//중위값 구하기(퀵정렬 방식 사용)

// 난수 생성 및 배열 초기화
// 화살표 함수로, {} 생략하여 화살표 다음에 오는 코드를 return
let arr = Array.from({length: 10}, () => Math.floor(Math.random() * 11));


const quickSort = function (arr) {
    if (arr.length <= 1) return arr;
  
    const pivot = arr[0];
    const left = [];
    const right = [];
  
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] <= pivot) left.push(arr[i]);
      else right.push(arr[i]);
    }
  
    const lSorted = quickSort(left);
    const rSorted = quickSort(right);
    return quickSort(left).concat(pivot, quickSort(right));
  };
  let result = quickSort(arr);

  document.write(`정렬 전 배열: ${arr}<br>`);
  document.write(`정렬 결과 배열: ${result}<br>`);
  document.write(`최대값: ${result[9]}<br>`);
  document.write(`최소값: ${result[0]}<br>`);
  document.write(`중앙값: ${(result[4]+result[5])/2}<br>`);
  let sum = 0;
  for (let i = 1; i < result.length-1; i++) {
    sum += result[i];
  }

  document.write(`최대와 최소를 제외한 합계: ${sum}<br>`);