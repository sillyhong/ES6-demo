// for...of的循环ES5的for循环要简单而且高效
let arr=['jspang','技术胖','大胖逼逼叨']


//for…of循环：
for (let item of arr){
    console.log(item)
}

//for…of数组索引
// for (let index of arr.keys()){
//     console.log(index);
// }

//同时输出数组的内容和牵引值
for (let [index, val] of arr.entries()){
    console.log(`${index}:${val}`)
}


//entries（）实例方法 可以用Next()手动跳转下一个值
let list=arr.entries()
console.log(list)//Array Iterator
console.log(list.next().value);// [0, "jspang"]
console.log(list.next().value);// [1, "技术胖"]
console.log(list.next().value);// [2, "大胖逼逼叨"]
