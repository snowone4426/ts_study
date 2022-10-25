// 동일 함수에 대해 여러 시그니처를 정의할 수 있는 기능.
// 다양한 매개변수를 받는 작업을 수행할 수 있게 한다. 자바의 오버로딩이랑 동일한 개념인듯

type Combinable2 = string | number

function add2(a: Combinable2, b: Combinable2) {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString()
  }
  return a + b
}
// string이 오든 number가 오든 처리할 수 있게 처리해 두어 다양한 타입의 매개변수에 대응하기 때문에 위 함수를 오버로딩이라 부르고 싶지만
const resultNumber = add2(1, 2)
const resultString = add2('1', '2')
// 숫자만 넣든 문자열만 넣든 여전히 유니온 타입으로 인식하기 때문에 내장함수를 바로 사용할수가 없음.
function add3(a: string, b: string): string
function add3(a: string, b: number): string
function add3(a: number, b: string): string
function add3(a: number, b: number): number
function add3(a: Combinable2, b: Combinable2) {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString()
  }
  return a + b
}
// 그런데 이런식으로 위에 똑같은 선언문을 써주는 대신 {}를 쓰지말고,
// 반환 타입을 적어주면 a와 b를 모두 number타입으로 받았을때 반환값이 number타입이 되어 내장함수를 사용할 수 있게 된다.
// 이때 매개변수 타입은 유니온값으로 지정되있는 타입만 쓸 수 있다.
const resultNumberOverlod = add3(1, 2)
const resultStringOverlod = add3('1', '2')
const resultCombineOverlod = add3('1', 2)
resultStringOverlod.split('')
