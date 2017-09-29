// 引入所需模块
var http = require("http");

// 建立服务器
var app = http.createServer(function(request, response) {
    response.writeHead(200, {
        "Content-Type": "text/plain"
    });
    response.end("Hello world!\n");
});

// 启动服务器
app.listen(1234, "localhost");
console.log("Server running at http://localhost:1234/");
