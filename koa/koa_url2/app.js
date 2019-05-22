// const Koa = require('koa');//对Node.js的http进行了封装
// const router = require('koa-router')();
// const bodyParser = require('koa-bodyparser');//解析request的body
// const fs = require('fs');
// var files = fs.readdirSync(__dirname + '/controllers');//“指定目录下所有文件名称”的数组对象
// var js_files = files.filter((f) => {
//     return f.endsWith('.js');
// });
// for (var f of js_files) {
//     let mapping = require(__dirname + '/controllers/' + f);
//     for (var url in mapping) {
//         if (url.startsWith('GET ')) {
//             var path = url.substring(4);
//             router.get(path, mapping.url);
//         } else if (url.startsWith('POST ')) {
//             var path = url.substring(5);
//             router.post(path, mapping.url);
//         } else {
//             console.log(`Invalid URL:${url}`);
//         }
//     }
// }
// const app = new Koa();// 创建一个Koa对象表示web app本身:
// app.use(bodyParser());//koa-bodyparser必须在router之前被注册到app对象上
// app.use(async (ctx, next) => {
//     console.log(`Process ${ctx.request.method}`);
//     await next();
// });
// router.get('/hello/:name', aaa.fn_);
// router.get('/', aaa.fn_
// );
// router.post('/signin', aaa.fn_
// );
// app.use(router.routes());
const Koa = require('koa');

const bodyParser = require('koa-bodyparser');

const controller = require('./controllers');

const app = new Koa();

// log request URL:
app.use(async (ctx, next) => {
    console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
    await next();
});

// parse request body:
app.use(bodyParser());

// add controllers:
app.use(controller());

app.listen(9000);
console.log('app started at port 9000...');