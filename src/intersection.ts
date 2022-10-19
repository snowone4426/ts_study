type Admin = {
  name: string
  privaileges: string[]
}

type Employee = {
  name: string
  startDate: Date
}

type ElevatedEmployee = Admin & Employee
// 두가지 타입을 합치는 법

const e1: ElevatedEmployee = {
  name: 'Max',
  privaileges: ['create-server'],
  startDate: new Date(),
}

type Combinable = string | number | boolean
type Numeric = number | boolean | Function

type Universal = Combinable & Numeric // number | boolean
// 유니온 타입을 인터섹션하면 교집합에 속해있는 것만 가져온다.
