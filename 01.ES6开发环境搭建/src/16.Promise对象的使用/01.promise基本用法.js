// ES6中的promise的出现给我们很好的解决了回调地狱的问题


// promise的基本用法
// promise执行多步操作非常好用，以吃饭为例
// 三个步骤
//1.洗菜做饭
//2.坐下来吃饭
//3.收拾桌子洗碗

// 这个过程是有一定的顺序的，你不洗保证上一步完成，才能顺利进行下班一步

let state = 1

function step1(resolve, reject) {
    console.log('1.开始-洗菜做饭')
    if(state == 1){
        resolve('洗菜做饭--完成')
    }else{
        reject('洗菜做饭--结束')
    }
}


function step2(resolve, reject) {
    console.log('2.开始-洗菜做饭')
    if(state == 1){
        resolve('坐下来吃饭--完成')
    }else{
        reject('坐下来吃饭--结束')
    }
}



function step3(resolve, reject) {
    console.log('3.开始-收拾桌子洗碗')
    if(state == 1){
        resolve('收拾桌子洗碗--完成')
    }else{
        reject('收拾桌子洗碗--结束')
    }
}

new Promise(step1).then( (val) =>{
    console.log(val)
    return new Promise(step2)
}).then( (val) => {
    console.log(val)
    return new Promise(step3)
}).then( (val) => {
    console.log(val)
}).catch((err)=> {
    console.log(err)
})