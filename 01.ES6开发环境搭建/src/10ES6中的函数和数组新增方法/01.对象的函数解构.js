// 前后端分离,后端经常返回json格式的数据，前端的美好愿望就是直接把这个JSON格式数据当作参数，传递到函数内部处理
// ES6为我们提供了这样的结构赋值

let json = {
    a: 'jspang',
    b: '技术胖'
}

function fun(a, b) {
    console.log(a, b )
}
fun(json)