// 在使用Array的时候，可以用push进行追加值，那Set稍有不同，它用更语义化的add进行追加。


let setArr = new Set(['jspang','技术胖','web','jspang']);
console.log(setArr);//Set {"jspang", "技术胖", "web"}

//追加add
setArr.add('前端')
console.log(setArr);

//删除delete
setArr.delete('前端');
console.log(setArr);

//查找has
console.log(setArr.has('jspang'));

//清除clear
setArr.clear()
console.log(setArr);//Set(0) {}


