// 如果你已经很好的掌握了对象扩展运算符，那么理解rest运算符并不困难，它们有很多相似之处，甚至很多时候你不用特意去区分。
//也是用三个带你...来表示
function func(first, ...arg) {
        console.log(arg.length);

        for(let val of arg){
            console.log(val);
        }
}
func(0,1,2,3,4,5,6,7);//7