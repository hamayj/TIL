function outer(){
  const name = 'kyle';
  console.log(name)
  return function inner(){
    const greeting = 'hello!'
    console.log(greeting,name)
  }
}
const getKyle = outer() //kyle 
getKyle() //hello!kyle

// 이거 이해 제대로 못한듯.