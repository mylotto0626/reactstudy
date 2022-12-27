//ES6 객체 전개 연산자
let obj1 = { one: 1, two: 2, other: 3 }
let obj2 = { four: 4, five: 5, other: 6 } 

// 두 객체를 병합할 때 중복된 키값은 마지막에 사용한 객체의 값으로 덮어쓰기함
let obj_one = { ...obj1, ...obj2 }
let obj_two = { ...obj2, ...obj1 }

//객체에서 특정 값을 추출할 때는 추출하려는 키 이름을 맞추고 나머지는 전개 연산자로 선언된 변수에 할당 가능
let { other, others } = obj_one;

console.log(obj1)
console.log(obj2)
console.log(obj_one)
console.log(obj_two)
