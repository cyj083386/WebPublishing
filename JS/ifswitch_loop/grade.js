'use strict'

//학점 구하기

let score = 95-95%10; //나눗셈시 실수가 나오지 않도록 나머지 뺄셈으로 처리
let grade 


//        if(score >= 90){
//            grade = 'A';
//        }else if(score >= 80){
//            grade = 'B';
//        }else if(score >= 70) {
//            grade = 'C';
//        }else if(score >= 60){
//            grade = 'D';
//        }else{
//            grade = 'F';
//        }


switch (score){
    case 90 :
        grade = 'A';
        break;
    case 80 :
        grade = 'B';
        break;
    case 70 :
        grade = 'C';
        break;
    case 60 :
        grade = 'D';
        break;
    default:
        grade = 'F';
}

console.log(grade);
