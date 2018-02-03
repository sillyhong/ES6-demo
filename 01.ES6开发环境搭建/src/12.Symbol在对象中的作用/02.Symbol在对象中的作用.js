//Symbol对象元素的保护作用
// 在对象循环中，并不希望值全部输出，我们就可以用symol进行保护


var obj={name:'jspang',skill:'web',age:18};

// 没有进行保护的写法
for(let key in obj){
    console.log(obj[key])
}

// 现在我不想别人知道我的年龄，这时候我就可以使用Symbol来进行循环保护
let obj1={name:'jspang',skill:'web'};
let age=Symbol();
obj[age] = 18
for(let item in obj1){
    console.log(obj1[item])
}
console.log(obj1);