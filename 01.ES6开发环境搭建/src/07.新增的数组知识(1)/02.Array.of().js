//Array.of()负责把一堆文本或者变量转换为数组
let arr =  Array.of('1', '2', '3')
console.log(arr)//["1", "2", "3"]



let str = arr.join("")
//注意Join是把数组拼接成字符串
console.log(str);//1,2,3

//注意split是把字符串分割成数组
let arr2 = str.split()
console.log(arr2)