
class Coder {
    name(val) {
        console.log(val);
        return val;
    }

    skill(val) {
        console.log(this.name('jspang') + ':' + 'Skill:' + val);
    }

    //类的传参是通过构造方法constructor
    constructor(a, b){
        this.a = a
        this.b = b
    }

    add(){
        return this.a + this.b
    }

}

// let jspang = new Coder(1,2)
// console.log(typeof jspang)//object
// console.log(jspang.add())//3


//类的继承
class htmler extends Coder{
    constructor(a, b){
        super(a,b)//访问父对象上的constructer,返回this对象
    }
}
let pang = new htmler(1, 2)
console.log(pang);
console.log(pang.add());