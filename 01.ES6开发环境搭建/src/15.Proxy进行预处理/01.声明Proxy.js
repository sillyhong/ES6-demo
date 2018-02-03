//proxy 增强对象和函数  预处理

//对象
let obj = {
    add: function (val) {
        return val + 100
    },
    name: 'i am jspang'
}

// console.log(obj.add(100))
// console.log(obj.name)



//声明Proxy
//get set apply
let pro = new Proxy(obj, {
    get:function(target,key,property){
        console.log(target, key, property);
        return target[key];
    },
    set:function (target, key, value, receiver) {
        console.log(` setting ${key} = ${value}`)
        return target[key] = value
    }
})

console.log(pro.name);
pro.name = '技术胖'
console.log(pro.name);
