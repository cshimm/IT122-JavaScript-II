import http from "http";

http.createServer((req,res) => {
    const path = req.url.toLowerCase();
    const home = 'Welcome to my Home Page!'
    const about = 'Hi my name is Cameron and I am a Software Development student at Seattle Central College.'
    const notFound = '404 - Not found.'
    switch(path) {
        case '/':
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end(home);
            break;
        case '/about':
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end(about);
            break;
        default:
            res.writeHead(404, {'Content-Type': 'text/plain'});
            res.end(notFound);
            break;
    }
}).listen(process.env.PORT || 3000);