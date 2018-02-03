
//var声明的循环体
for(var i=0; i<10; i++){
    console.log("循环体中的i：" + i)
}
console.log('循环体外的i:'+i);



//let声明的循环体
for (let j=0; j<10; j++){
    console.log("循环体中的j:" + j)
}
//报错 找不到j
console.log('循环体外的j:'+ j);