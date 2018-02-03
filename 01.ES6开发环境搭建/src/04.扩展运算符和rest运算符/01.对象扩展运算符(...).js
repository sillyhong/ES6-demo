//扩展运算符当作参数
function func(...arg) {
    console.log(arg[0])
    console.log(arg[1])
    console.log(arg[2])
    console.log(arg[3])
}

func(1, 2, 3)//1 2 3 undefined

//扩展运算符的用处


// 例子
//声明了arr1和arr2，然后我们把arr1赋值给arr2，然后修改arr2的值，你会发现arr1的值也改变了
//这其实是内存堆栈的引用，并不是真正的赋值
let arr1 = ['www', 'jspang', 'com']
let arr2 = arr1
console.log(arr1)//[ 'www', 'jspang', 'com' ]
arr2.push('gz')
console.log(arr1)//[ 'www', 'jspang', 'com', 'gz' ]


//利用扩展符进行改造，解决问题
let arr1 = ['www', 'jspang', 'com']
let arr2 = [...arr1]
console.log(arr1)//[ 'www', 'jspang', 'com' ]
arr2.push('gz')
console.log(arr1)//[ 'www', 'jspang', 'com' ]
