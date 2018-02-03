

class Coder{
    name(val){
        console.log(val)
        return val//记住类的方法都要return
    }

    skill(val){
        console.log(this.name('jspang') + ':' + 'Skill-' +　val)
    }
}

let jspang = new Coder()
jspang.skill('web')