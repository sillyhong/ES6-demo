// JSON的数组格式就是为了前端快速的把JSON转换成数组的一种格式
let  json = {
    '0': 'jspang',
    '1': '技术胖',
    '2': '大胖逼逼叨',
    length:3
}

// 这就是一个标准的JSON数组格式，跟普通的JSON对比是在最后多了一个length属性
// 在ES6中绝大部分的Array操作都存在于Array对象


// Array.from(xxx)
let arr = Array.from(json)
console.log(arr)