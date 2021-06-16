const express = require('express');
const app = express();
const PORT = process.env.PORT||80
let ejs = require('ejs');
const path = require('path')
var expressLayouts = require('express-ejs-layouts');
// setting the template engine
app.use(expressLayouts)
// public
 app.use(express.static('public'))
// console.log(static)
app.set('views',path.join(__dirname,'./resources/views'))
app.set('view engine','ejs')

app.get('/',(req,res)=>{
    res.render('index')
})
app.get('/cart',(req,res)=>{
    res.render('customers/cart')
})
app.get('/login',(req,res)=>{
    res.render('auth/login')
})
app.get('/register',(req,res)=>{
    res.render('auth/register')
})

app.listen(PORT,()=>{
    console.log('listening');
})