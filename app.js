const http = require('http'); 
// const expressJS = require('express')
function handleRequest(request,response){
    //repquest
    if( request.url === '/currenttime' )
    {
        response.statusCode = 200;
        response.end('<h1>' +  Date().toISOString() + '</h1>');
    } else if (request.url==='/')
    {
        response.statusCode = 200;
        response.end('<h1>aaaaaaHello World</h1>')
    }
    
    //lovslhost:4000/currenttime
    
}

const server = http.createServer(handleRequest);

server.listen(5000); 
