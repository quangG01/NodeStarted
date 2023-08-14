const fs = require("fs");
const path = require("path");
const express = require("express");

const app = express();

app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');

app.use(express.static('public'));
app.use(express.urlencoded({extended:false}));

app.get('/restaurants',function(req,res){

    const filePath = path.join(__dirname,"data","restaurants.json");
    const readFile = fs.readFileSync(filePath);
    const storeFile = JSON.parse(readFile);

    res.render('restaurants', {numRes: storeFile.length , restaurants: storeFile})
})
app.get('/about',function(req,res){
    res.render('about')
})

app.get('/',function(req,res){
    res.render('index');
})
app.get('/recommend',function(req,res){
    res.render('recommend');
})

app.post('/recommend',function(req,res){
    const resValue = req.body;
    const filePath = path.join(__dirname,"data","restaurants.json");
    const readFile = fs.readFileSync(filePath);
    const storeFile = JSON.parse(readFile);
    storeFile.push(resValue);

    const writeFile = fs.writeFileSync(filePath,JSON.stringify(storeFile));

    res.redirect('/confirm');

})
app.get('/confirm',function(req,res){
    res.render('confirm');
})
app.listen(4000);






