const paragraph = document.querySelector('.message-output')
// 분명히 html에 class가 message-output인 태그가 존제함에도 타입스크립트는 Element|null이라고 유니온타입으로 받아들임.
// 또한 message-output은 input태그임에도 그냥 Element 타입으로 받아들임.
const paragraph1 = document.querySelector('.message-output')!
// 뒤에 !를 추가해주면 타입스크립트에게 반드시 존재한다고 설정할 수 있음.
const paragraph2 = document.querySelector(
  '.message-output',
)! as HTMLInputElement
const paragraph3 = <HTMLInputElement>document.querySelector('.message-output')!
// 앞에 <타입>을 적어주거나, 뒤에 as 타입을 적어주면 적어준 타입으로 형변환 시켜줄 수 있다.
// 이런 방식을 사용하면 타입이 뭔지 더 확실하게 전달해 줄 수 있다.
