
let target = function () {
    return 'I am JSPang';
};


var handler = {
    apply(target, ctx, args){
        console.log(target, ctx, args)
        return Reflect.apply(...arguments)
    }
}




var pro = new Proxy(target, handler);
console.log(pro())