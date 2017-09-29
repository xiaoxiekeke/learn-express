课程大纲
1: 什么是ExpressJS
2: 第一个ExpressJS程序（hello world）
3: 理解ExpressJS路由
4: Server Request
5. Server Response
6: 模板 handlerbar
7: SCSS/SASS Preprocessor
8: Forms, Cookies, and Sessions
9: 用ExpressJS实现To do list


API:

App:
1.app.use([path], function)
path 默认参数--'/'
function 中间件
    1. == function(request, response, next)
    2. 无数多个

2.app.VERB(path, [callback...], callback)
VERB: *get, *post, put, delete
path: String or Regex
callback: *next() *next('router')

3.app.param([name], callback)

Request:
1. req.params
2. req.query
3. req.body
4. req.files
5. req.param(id)
    params - body - query
6. req.cookies
7. req.header === req.get

Response:
1. res.render
2. res.locals
3. res.set
4. res.status
5. res.send(body)
6. res.json(body)
7. res.redirect

模板
默认支持ejs, jade
1. app.set('view engine', xxx);
2. app.set('views', path);
3. app.engine('', xxx);
4. response.render();


CSS
1. Stylus
2. Less
3. SASS

