const http = require('http');
const PORT = 4001;

const server = http.createServer((req, res) => {
    res.write("This is my First Server on NODE");
    res.end()
})

server.listen(PORT, (error) => {
    if (error) {
        console.log("Problem accessing the Server.....");
    }
    else {
        console.log(`Server is listening to PORT : ${PORT}`);
    }
})
