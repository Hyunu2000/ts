/**
 * 타입스크립트의 Prumitive 타입 실습
 * 변수 정의 : const(let) 변수명: 타입정의 = 값(데이터);
 */

// 정수형
let number1: number = 100;
number1 = 200;
console.log(number1);

// 실수형
let dnumber1: number = 1.234;
dnumber1 = 300;
console.log(dnumber1);

// 불린
let flag: boolean = false;
const flag2: boolean = !flag;
console.log(flag, flag2);

// 배열 : 문자열 타입 - 홍길동, 홍길순, 홍길영
const names: string[] = ['홍길동', '홍길순', '홍길영']; // 배열의 타입을 정의할 때는 []를 사용한다. 타입 명시를 해야함.
const names2: string[] = ['홍길동']; 
console.log(names, names2);

// 초기값 : undefined(원시데이터 초기값), null(참조, 객체 데이터 초기값)
const initName: undefined = undefined; // undefined, null은 타입을 명시하지 않아도 된다.
const initArray: null = null;
console.log(initName);
console.log(initArray);

// typeof
const x: number = 100;
// const xx: number = 100;
const xx: string = '100';

// console.log('값의 비교 >> ', x === xx); 타입이 다르면 비교 할수 없다.
console.log('타입의 비교 >> ', typeof(x) === typeof(xx));