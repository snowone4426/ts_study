// Code goes here!
class Department {
  name: string

  // 생성자
  constructor(n: string) {
    this.name = n
  }
}

const Accounting = new Department('Accounting')
// 생성하면 생성자가 불려짐.

// var Department = (function () {
//   function Department(n) {
//       this.name = n;
//   }
//   return Department;
// }());
// var Accounting = new Department('Accounting');
// es6 이전 생성자

class Department1 {
  constructor(
    private id: string,
    public name: string,
    public readonly age: number,
  ) {}
  //약식 생성자
  //저렇게 써주면 Department1에 id와 name 이 생긴다.
  // private인 것을 아래서 사용 안하면 에러가 남.
  // readonly 속성은 const처럼 한번 쓰면 바꿀수 없다.

  describe(this: Department1) {
    console.log(`Department ${this.id}`)
    //this.age = 3; 읽기 전용 속성이라 바꾸려하면 에러가 난다.
  }
}

const user = new Department1('1', 'han', 5)
//console.log(user.name) // han
