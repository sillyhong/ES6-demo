// export的用法
export var a = 'jspang';

// 多变量的输出
var a ='jspang';
var b ='技术胖';
var c = 'web';

export {a,b,c}


//函数的模块化输出
export function add(a,b){
    return a+b;
}

// as的用法
var a ='jspang';
var b ='技术胖';
var c = 'web';

export {
    x as a,
    y as b,
    z as c
}