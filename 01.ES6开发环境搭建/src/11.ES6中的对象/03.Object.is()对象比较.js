
var obj1 = {name: 'jspang'}
var obj2 = {name: 'jspang'}

// ES5 比较对象经常用===
console.log(obj1.name === obj2.name)

// ES6 Object.is()
console.log(Object.is(obj1.name, obj2.name))



//Object.is解决的问题
console.log(+0 === -0)//true
console.log(NaN === NaN)//false

console.log(Object.is(+0, -0))//false
console.log(Object.is(NaN, NaN))//true