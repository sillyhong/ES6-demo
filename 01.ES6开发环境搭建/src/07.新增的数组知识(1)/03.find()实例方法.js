//所谓实例方法是先构造出实例
let arr = [1, 2, 3]



//通过find()可以查找数组
console.log(arr.find(function (value, index, arr) {
    console.log(value, index, arr)
    return value === 2
}))