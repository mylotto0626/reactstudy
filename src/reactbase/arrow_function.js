//기존 JS 익명 함수
function add(first, second) {
  return first + second;
}

//익명 함수
let add = function (first, second) {
  return first + second;
};

//ES6 화살표 함수 사용법
let plus = (first, second) => {
  return first, second;
};

//결과값을 바로 반환하는 경우에는 중괄호를 생략하고 => 뒤에 표현식을 넣을 수 있음
let plusAndMultiply=(first,second)=>({add:first+second,multiply:first+second});

function addNumber(num) {
  return function (value) {
    return num + value;
  };
}

let addNumber = (num) => (value) => num + value;

class addClass {
  value = 10;

  constructor() {
    let addThis2 = function (first, second) {
      return this.value + first + second;
    }.bind(this); //콜백 함수의 this 범위로 생기는 오류를 막기 위해 bind() 함수를 사용함

    let addThis3 = (first, second) => this.value + first + second;
  }
}

