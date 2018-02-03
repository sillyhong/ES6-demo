//一、Symbol的声明 类似于函数的声明
var symbol = Symbol()

// 回顾一下js中的原始数据类型
var a = new String()
var b = new Number()
var c = new Boolean()
var d = new Array()
var e = new Object()
var f =  Symbol()

//所以现在的js有六中数据类型

//二、Symbol的打印
var g = Symbol('jspang')//红色
console.log(g);
console.log(g.toString());//黑色


//三、Symbol在对象中的应用
// Symbol构建对象的Key，并调用和赋值。
var jspang = Symbol()
var obj = {
    [jspang]: '技术胖'
}

console.log(obj[jspang]);
obj[jspang] = 'web'
console.log(obj[jspang]);
