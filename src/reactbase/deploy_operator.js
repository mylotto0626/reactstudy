//ES5 문법
//기존 JS 배열 연산자 사용법
// let arr1=[1,2,3,4,5];
// let arr2=[6,7,8,9,10];

// let combined=[arr1[0],arr1[1],arr2[0],arr1[1]]; //배열의 각 요소를 추출하여 새로운 배열 생성
// combined=arr1.concat(arr2); //배열 내장 함수 concat()으로 배열을 합침
// combined=[].concat(arr1,arr2);

// //인덱스로 배열 요소 추출
// let first=arr1[0];
// let second=arr1[1];
// let sixth=arr1[5]||'empty'; // '||' 연산자와 조합하면 추출할 배열 요소가 없을 때 기본값 지정 가능

// function func(){
//     let args=Array.prototype.slice.call(this,arguments); //특수 변수를 통해 함수 내 인자 항목들을 배열로 변환
//     let first=args[0];
//     let others=args.slice(1, args.length); //인덱스 범위에 해당하는 배열 요소를 추출. 여기서는 전체 배열의 길이이므로 인덱스 범위부터 마지막 항목까지 추출

//     console.log(first);
//     console.log(others);
// }

// console.log(combined);
// console.log(first);
// console.log(second);
// console.log(sixth);
// func();

// ES6 문법
let arr1 = [1,2];
let arr2 = [3,4];
let combined = [...arr1, ...arr2];
// combined = [1,2,3,4];
let [first, second, three = 'empty', ...others] = arr1;
// first = 'one', second = 'two', three = 'empty', others = []

function func(...args) {
    let [first, ...others] = args;
}

function func(first, ...others) {
    let firstInES6 = first;
    let othersInES6 = others;

    console.log(firstInES6)
    console.log(othersInES6)        
}


console.log(combined)
console.log(arr1)
func();


//올바르지 못한 예
//var wrongArr = ...array1;
