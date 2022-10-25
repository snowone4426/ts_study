// 만약 데이터를 조작해야 하는데, 가져온 데이터에 해당값이 있는지 없는지 불명확 할때 옵셔널 체이닝을 사용할 수 있음.
const data = {
  id: 'u1',
  name: 'max',
  job: { title: 'ceo', description: 'my company' },
}

console.log(data?.job?.title)
// ?를 적어주면 ?앞에있는 데이터가 있는지 확인하고 없으면 뒤로 넘어가지 않으므로 런타임 에러가 발생하는걸 막아줌.
