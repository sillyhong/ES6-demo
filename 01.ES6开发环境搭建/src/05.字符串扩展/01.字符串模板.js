//ES6对字符串新增操作，最重要的是字符串模板，再也不用拼接变量，而且模板里支持简单计算操作

//先来看一个在ES5下我们的字符串拼接案例:
// let jspang='技术胖';
// let blog = '非常高兴你能看到这篇文章，我是你的老朋友'+jspang+'。这节课我们学习字符串模版。';
// document.write(blog);


let jspang='技术胖';
let blog = `非常高兴你能看到这篇文章，我是你的老朋友${jspang}。这节课我们学习字符串模版。`;
document.write(blog);

// 而且这里边支持html标签
let jspang='技术胖';
let blog = `<b>非常高兴你能看到这篇文章</b>，我是你的老朋友${jspang}。<br/>这节课我们学习字符串模版。`;
document.write(blog);

// 对运算的支持：
let a=1;
let b=2;
let result=`${a+b}`;
document.write(result);
// 强大的字符串模版，在实际开发中，我们可以让后台写一个活动页面，然后轻松的输出给用户。