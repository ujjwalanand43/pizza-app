const express = require('express');
const app = express();
const PORT = process.env.PORT||80
let ejs = require('ejs');
const path = require('path')
// const expressLayout = require('express-ejs-layouts')
// setting the template engine
// app.use(expressLayout)
// public
 app.use(express.static('public'))
// console.log(static)
app.set('views',path.join(__dirname,'./resources/views'))
app.set('view engine','ejs')

app.get('/',(req,res)=>{
    res.render('index')
})


app.listen(PORT,()=>{
    console.log('listening');
})