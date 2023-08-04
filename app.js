const fs = require("fs");
const path = require("path");
const express = require("express");

const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({extended:false}));

app.get('/restaurants',function(req,res){
    const fileHtmlPath = path.join(__dirname,'views','restaurants.html');
    res.sendFile(fileHtmlPath);
})
app.get('/about',function(req,res){
    const fileAboutPath = path.join(__dirname,'views','about.html');
    res.sendFile(fileAboutPath);
})

app.get('/',function(req,res){
    const fileIndexPath = path.join(__dirname,'views','index.html');
    res.sendFile(fileIndexPath);
})
app.get('/recommend',function(req,res){
    const fileRecommendPath = path.join(__dirname,'views','recommend.html');
    res.sendFile(fileRecommendPath);
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
    const fileConfirmPath = path.join(__dirname,'views','confirm.html');
    res.sendFile(fileConfirmPath);
})
app.listen(4000);






