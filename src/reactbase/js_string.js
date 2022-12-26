//ES6 문법이 아닌 기본 자바스크립트 문자열
let str1='안녕' 
let str2='반가워'
let hello=str1+str2; //병합 연산자를 통해 문자열과 문자열을 연결
let object={name:"도서",price:4300};

//문자열과 변수를 연결할 때도 병합 연산자를 사용
let message='제품 '+object.name+"의 가격은 "+object.price+"입니다"; 
let num1=3;
let num2=5;
let mul="두 수의 곱셈 값은 "+(num1*num2)+"입니다"; //연산 결과를 괄호로 묶어 연산 구문을 먼저 실행

console.log(str1)
console.log(str2)
console.log(hello)
console.log(object)
console.log(message)
console.log(num1)
console.log(num2)
console.log(mul);

