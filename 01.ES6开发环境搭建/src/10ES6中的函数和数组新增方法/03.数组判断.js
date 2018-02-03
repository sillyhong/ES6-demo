//in的用法
let obj={
    a:'jspang',
    b:'技术胖'
}
// 对象判断
console.log('a' in obj)//true

//数组判断
// ES5中当数组元素没有时，length还是有
let arr=[,,,,,];
console.log(arr);
console.log(arr.length)//5

//ES6中使用in
console.log(0 in arr)//false

let arr1=['jspang','技术胖'];
console.log(0 in arr1);  // true