// 注意：对象的解构与数组有一个重要的不同。数组的元素是按次序排列的，变量的取值由它的位置决定；而对象的属性没有次序，变量必须与属性同名，才能取到正确的值。
// let {foo,bar} = {foo:'JSPang',bar:'技术胖'};
// console.log(foo+bar); //控制台打印出了“JSPang技术胖”


// let foo;
// {foo} ={foo:'JSPang'};//编译会报错
// console.log(foo);


// 解决报错，使程序正常，我们这时候只要在解构的语句外边加一个圆括号就可以了。
let foo;
({foo} ={foo:'JSPang'});
console.log(foo); //控制台输出jspang


