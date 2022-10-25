// decorator를 사용하기 위해선 tsconfig의 experimentalDecorators항목을 활성화 해주어야 한다.
// 데코레이션은 class가 정의만 되어도 실행된다. 인스턴스가 생성될 필요가 없다.
function Logger(constructor: Function) {
  console.log('Logging...')
  console.log(constructor)
}

//데코레이션 팩토리. 클로저처럼 되어있다.
function LoggerFactory(logStr: string) {
  console.log('LOGGER FACTORY')
  return function (constructor: Function) {
    console.log(logStr)
    console.log(constructor)
  }
}

function WithTemplet(templet: string, hookId: string) {
  console.log('TEMPLATE FACTORY')
  return function (constructor: any) {
    // _를 써주면 argument가 있지만 신경쓰지 않는다고 타입스크립트에게 알려준다.
    console.log('Rendering template')
    const hookEl = document.querySelector('#' + hookId)
    const p = new constructor()
    if (hookEl) {
      hookEl.innerHTML = templet
      hookEl.querySelector('h1')!.textContent = p.name
    }
  }
}
@LoggerFactory('logger')
@WithTemplet('<h1>my Person Object </h1>', 'app') // 데코레이터를 사용할땐 @를 이용한다.
class Person {
  name = 'max'

  constructor() {
    console.log('creating person object...')
  }
}

// LOGGER FACTORY
// TEMPLATE FACTORY
// Rendering template
// creating person object
// 함수 자체는 위에서 아래로 실행되지만 팩토리는 아래서 위로 실행.
