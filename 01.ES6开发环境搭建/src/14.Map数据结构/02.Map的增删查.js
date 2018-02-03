
let json = {
    name:'jspang',
    skill:'web'
}

var map=new Map();
map.set(json,'iam');
console.log(map)

//get 取json对应的值
console.log(map.get(json));// iam


// 查找是否存在has
console.log(map.has(json))//true


//删除delete
map.delete(json)
console.log(map)

// size属性
console.log(map.size);


// 清除所有元素clear
map.clear()


//总结: map在现在开发中已经经常使用，它的灵活性和高效性是我们喜欢的

