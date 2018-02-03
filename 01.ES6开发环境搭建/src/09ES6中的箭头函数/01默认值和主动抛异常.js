// 在ES6中给我们增加了默认值的操作，我们修改上边的代码，可以看到现在只需要传递一个参数也是可以正常运行的。

// function add(a,b=1){
//     return a+b;
// }
// console.log(add(1));

//主动抛出错误
// 在使用Vue的框架中，可以经常看到框架主动抛出一些错误，比如v-for必须有:key值。那尤大神是如何做到的那？其实很简单，ES6中我们直接用throw new Error( xxxx ),就可以抛出错误。
// function add(a,b=1){
//
//     if(a == 0){
//         throw new Error('This is error')
//     }
//     return a+b;
// }
//
// console.log(add(0));


// 函数中的严谨模式
// 我们在ES中就经常使用严谨模式来进行编程，但是必须写在代码最上边，相当于全局使用。
// 在ES6中我们可以写在函数体中，相当于针对函数来使用。
// 这个错误的原因就是如果你使用了默认值，再使用严谨模式的话，就会有冲突，所以我们要取消默认值的操作，这时候你在运行就正常了
// function add(a,b=1){
//     'use strict'
//     if(a == 0){
//         throw new Error('This is error');
//     }
//     return a+b;
// }
//
// console.log(add(1));

// 获得需要传递的参数个数

function add(a,b = 1){
    // 'use strict'
    if(a == 0){
        throw new Error('This is error');
    }
    return a+b;
}

console.log(add.length);