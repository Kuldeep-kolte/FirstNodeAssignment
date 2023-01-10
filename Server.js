const http = require("http");
http.createServer(function (req, res) {
    console.log("client made a request")
    const user = { name: "Kuldeep", age: 22 }
    res.write("<h1 style='text-align:center'>Hello World using HTML Format</h1>");
    res.write(JSON.stringify({ message: "This is msg coming from json format" }))
    res.write("<br><br>");
    res.end(JSON.stringify(user));
}).listen(8080);