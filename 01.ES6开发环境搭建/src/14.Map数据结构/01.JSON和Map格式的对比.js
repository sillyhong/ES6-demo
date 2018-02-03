//在一些构建工具中是非常喜欢用map这种数据结构来进行配置的，因为map是里灵活的，简单的适合一对一查找的数据结构
//我们知道的数据结构有JSON和set,map有什么特点




// Json和map格式的对比
// map的效率和灵活性好


let json = {
    name:'jspang',
    skill:'web'
}
console.log(json.name);

// 但是反应的速度要低于数组和map结构，而且Map的灵活性要更好，你可以把它看成一种特殊的键值对
// 但是你的key可以设置成数组，值也可以设置为字符串

var map = new Map()
map.set(json, 'iam')
console.log(map)//key {name: "jspang", skill: "web"}  value:"iam"

map.set('iam',json)
console.log(map);//key  "iam" value:{name: "jspang", skill: "web"}