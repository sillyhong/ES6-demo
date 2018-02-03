//Set是一种数据结构，并不是数据类型，是ES6中新的东西，并且很有用处
//Set数据结构是通过以数组的形式构建的

//Set的声明
var arr = ['jspang', '技术胖', 'web', 'jspang']
let setArr = new Set(arr)

//默认数组去重
console.log(setArr);// Set(3) {"jspang", "技术胖", "web"}

// Set和Array 的区别是Set不允许内部有重复的值，如果有只显示一个，相当于去重。虽然Set很像数组，但是他不是数组。
