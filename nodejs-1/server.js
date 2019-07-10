const http = require("http");
 

http.createServer((request, response) => {
    console.log("Url: " + request.url);
    console.log("Тип запроса: " + request.method);
    console.log("User-Agent: " + request.headers["user-agent"]);
    console.log(request.headers);
    
    const delay = 1000;

    const promis = new Promise((resolve,reject) => {
        setTimeout(() => {resolve("Подождали "+delay+"мс");}, delay);
    })


    promis.then( res =>{
        console.log(res);

        response.setHeader("Content-Type", "text/html; charset=utf-8;");
        response.write("<h2>Hello!!</h2>");
        response.end();
    })

    
}).listen(9999);