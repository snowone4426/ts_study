interface ErrorContainer {
  [prop: string]: string
  //id: number 위의 조건은 다른 속성들 전부에 영향을 미쳐서 이렇게 작성하면 오류가 남.
}
// []안에 key값으로 올 여러가지 속성들의 타입을 적어주고, : 뒤에 value의 속성을 적어줌.
// 예를들어 위와같이 작성하면 ErrorContainer기반의 객체들에 추가되는 모든 속성들은 키와 값이 string 타입이어야 한다는 뜻.
// boolean은 설정할 수 없음.

const errorBag: ErrorContainer = {
  email: 'Not a valid email',
  username: 'Must start with a capital character',
  1: '2',
}
// 원하는 만큼 속성을 추가할 수 있지만 전부 string 타입이어야 함.
// key에 숫자를 적어도 이는 문자열 취급받음.
