// ES6还增加了字符串的查找功能，而且支持中文哦，

//ES5
let jspang='技术胖';
let blog = '非常高兴你能看到这篇文章，我是你的老朋友技术胖。这节课我们学习字符串模版。';
console.log(blog.indexOf(jspang));//20

//ES6
console.log(blog.includes(jspang))//true

// 判断开头是否存在：
blog.startsWith(jspang)

// 判断结尾是否存在：
blog.endsWith(jspang)

// 需要注意的是：starts和ends 后边都要加s