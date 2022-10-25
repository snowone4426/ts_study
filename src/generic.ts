const names: Array<string> = []

const promise: Promise<string> = new Promise((resolve) => {
  setTimeout(() => {
    resolve('this is done!')
  }, 1000)
})

promise.then((data) => {
  data.split('')
})
// 제네릭을 통해서 타입스크립트에게 정보를 줘서
// 정보가 잘못 들어왔을때 오류를 낼수 있게 해줘서 타입 안정성을 올려줌.

function merge<T extends object, U>(objA: T, objB: U): T & U {
  return Object.assign(objA, objB)
}
// 제네릭으로 타입을 정확히 명시해 줄 수도 있지만
// 위와 같이 작성하면 좀더 유동적으로 설정 할 수 있다.
// T와 U라는 가상의 타입을 설정하고 받는 대로 쓰는 것.

const mergedObject = merge({ name: 'max' }, { age: 30 })
mergedObject.age
//mergedObject.age << 제네릭을 설정하지 않고 이렇게 작성하면 타입스크립트가 age가 있다는 사실을 인식하지 못해서 오류가 난다.
// 그러나 제네릭으로 무엇을 반환할지 정해주면 오류가 나지 않는다.
merge({ name: 'max' }, 30)
// 문제는 너무 자유로워서 객체가 아닌것들고 올 수 있고 이게 실행되면 30이라는 값은 온대간데 없이 사라져 버린다.

function merge2<T extends object, U extends object>(objA: T, objB: U): T & U {
  return Object.assign(objA, objB)
}
//위와 같은 상황을 방지하기 위해서 제약조건을 설정할 수 있다. extends 타입을 작성해주면 어떤형식이든 상관없지만 T와 U는 객체여야 한다고 지정해 줄 수 있다.
// 물론 객체 말고도 유니온타입 등등 다양한 제약조건을 걸어 줄 수 있다.

function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U,
) {
  return obj[key]
}

extractAndConvert({ name: 'max' }, 'name')
// keyof obj 를 사용하면 obj의 key에 존제하는 값만 올 수 있게 설정 할 수 있다.
// 그래서 함수를 실행시 인자로 {},"key"를 넣어주면 첫번째 인자 객체 안에 key라는 key가 없으니까 오류가 나게 된다.
