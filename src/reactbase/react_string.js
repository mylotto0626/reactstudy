//ES6의 문자열 사용 방법

let str1='안녕' 
let str2='반가워'
let hello=`${str1} ${str2}`; //템플릿 문자열에 $를 사용하여 변수를 포함
let object={name:"도서",price:4300};

//템플릿 문자열은 줄바꿈도 허용하며 이스케이프 시퀀스를 사용하지 않아도 됨
let message=`제품 ${object.name}의 가격은 ${object.price}입니다`; 
let num1=3;
let num2=5;
let mul=`두 수의 곱셈 값은 ${num1*num2} 입니다`; //템플릿 문자열에 $ 기호를 포함하여 연산할 수 있음

console.log(str1)
console.log(str2)
console.log(hello)
console.log(object)
console.log(message)
console.log(num1)
console.log(num2)
console.log(mul);

