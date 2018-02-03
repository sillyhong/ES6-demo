//1.forEach
let arr=['jspang','技术胖','前端教程'];
//forEach循环的特点是自动省略为空道德数组元素，相当于直接帮我们筛空，有时候给我们帮倒忙
arr.forEach(( val, index) => {
    console.log(index, val)
})

//2.filter
//具有循环功能
arr.filter(( val, index) => {
    console.log(index, val)
});

//3.some
arr.some(x=>console.log(x));

//4.map
//有替换作用
console.log(arr.map(x=>'web'));