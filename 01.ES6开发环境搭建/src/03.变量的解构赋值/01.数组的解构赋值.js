//从数组和对象中提取值，对变量进行赋值，可以在开发过程中大量减少我们的代码量，并且让我们的代码结构更清晰
//
// let a=0;
// let b=1;
// let c=2;
//===
let [a, b, c] = [1, 2, 3]


//结构的默认值
let [foo = true] = []
console.log(foo)//true

let [a,b="JSPang"]=['技术胖',undefined];
console.log(a+b); //控制台显示“技术胖JSPang”

// 需要注意的是undefined和null的区别。
// undefined相当于什么都没有，b是默认值
let [a,b="JSPang"]=['技术胖',undefined];
console.log(a+b); //控制台显示“技术胖JSPang”


let [a,b="JSPang"]=['技术胖',null];
console.log(a+b); //控制台显示“技术胖null”