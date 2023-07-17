const express = require("express");

const app = express();
app.use(express.urlencoded({extended:false}));

app.get('/',function(require,response){
    response.send('<form action ="/store" method = "POST"><label>Ten : </label> <input name = "userName" type = "text"></input> <button type = "submit">submit</button> <form>');
})

app.post('/store',function(require,response){
    let name = require.body.userName;
    response.send(`<h1>ten la ${name}</h1>`);
})
app.listen(5000);












// const express = require('express')

// const app = express();

// app.use(express.urlencoded({extended:false}));

// app.get('/currenttime',function(request,response){
//     response.send('<h1>' + new Date().toISOString() + '</h1>');
// })

// app.get('/',function(request,response){
//     response.send('<form action="/store-users" method = "POST"><label>hiaaa</label><input  name = "userName" type="text"></input><button type="submit">submit</button></form>');
// })

// app.post('/store-users' , function(request,response){
//     const name  = request.body.userName;
//     console.log(name);
//     response.send(`<h1>user name stored ${name}</h1>`)
// })

// app.listen(2000);

