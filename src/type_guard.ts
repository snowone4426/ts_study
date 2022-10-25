type Combinable1 = string | number
type Numeric1 = number | boolean | Function

type Universal1 = Combinable & Numeric

function add(a: Combinable1, b: Combinable1) {
  if (typeof a === 'string' || typeof b === 'string') {
    // 유니온 타입을 사용할 때, 타입에 따라 어떤식으로 처리해줄지 분기해주는 것을 타입 가드라고 부름.
    return a.toString() + b.toString()
  }
  return a + b
}

type UnknoenEmployee = Employee | Admin

function printEmployeeInfromation(emp: UnknoenEmployee) {
  console.log(emp.name)
  if ('privaileges' in emp) {
    // in 을 사용한 타입가드
    console.log(emp.privaileges)
  }
}

class Car {
  drive() {
    console.log('driving')
  }
}

class Truck {
  drive() {
    console.log('driving truck')
  }
  loadCargo(amount: number) {
    console.log(amount)
  }
}

type Vehicle = Car | Truck

function useVehicle(vehicle: Vehicle) {
  vehicle.drive()
  if (vehicle instanceof Truck) {
    // instanceof를 사용한 타입 가드
    vehicle.loadCargo(10)
  }
}

interface Dog {
  type: 'dog'
  running_speed: number
}

interface Fish {
  type: 'fish'
  swimming_speed: number
}

type Animal = Dog | Fish

function moveAnimal(animal: Animal) {
  let speed
  switch (animal.type) {
    // 타입으로 구분지어서 유사 타입가드를 설정 << 구별된 유니언
    // 타입에 뭐가 올수 있는지 타입스크립트가 알고 있어서 오타가 나면 바로 오류를 띄워줌.
    case 'dog':
      speed = animal.running_speed
      break
    case 'fish':
      speed = animal.swimming_speed
  }

  console.log(speed)
}
