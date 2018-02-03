//数字验证Number.isFinite()
//只要是数字，无论是整形还是浮点型都会返回true
let b = 11/4
console.log(Number.isFinite(b))
console.log(Number.isFinite('weihong'))//false
console.log(Number.isFinite(NaN))//false
console.log(Number.isFinite(undefined))//false


// NaN验证
let c = 123.1
console.log(Number.isNaN(c))//false
console.log(Number.isNaN(NaN))//true

//判断是否为整数Number.isInteger(xx)
console.log(Number.isInteger(c))

//判断是否是安全整数
// 首先了解安全整数
let  d = 0
let SafeInteger = Math.pow(2, 53) - 1
console.log(Number.MAX_SAFE_INTEGER);//+9007199254740991
console.log(Number.MIN_SAFE_INTEGER);//-9007199254740991
console.log(Number.isSafeInteger(d));//true

// 整数转换Number.parseInt(xxx)和浮点型转换Number.parseFloat(xxx)
console.log(Number.parseInt(a))
console.log(Number.parseFloat(a))