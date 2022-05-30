const http = require("http")

const host = 'localhost';
const port = 8080;

const requestListener = function (req,res){
    res.setHeader("Content-Type","text?html");
    res.writeHead(200);
    res.end(`<html><body><hl>I just created my first server!!</hl></body></html>`)
}

const server =http.createServer(requestListener);
server.listen(port,host,function(){
    console.log(`Server is running on http://${host}:${port}`);
})
