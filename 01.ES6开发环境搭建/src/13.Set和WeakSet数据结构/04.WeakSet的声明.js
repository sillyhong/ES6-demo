let weakObj = new WeakSet()
let obj = {
    a: 'jspang',
    b: '技术胖'
}
// WeakSet里边的值也是不允许重复的，我们来测试一下。
console.log({...obj})
let obj1 = ({...obj})
weakObj.add(obj)
weakObj.add(obj1)
console.log(weakObj);

// 在实际开发中Set用的比较多，WeakSet用的并不多,但是他对传入值必须是对象作了很好的判断，我们灵活应用还是有一定的用处的。