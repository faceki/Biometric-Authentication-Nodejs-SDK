const express = require('express');
const cors = require('cors');
const path = require('path');
const hbs = require('hbs');

var bodyParser = require('body-parser');
const app = express();

const port = process.env.PORT || 4848

const publicDirectoryPath = path.join(__dirname,'../public/')
const viewsDirectoryPath = path.join(__dirname,'../templates/views')

app.set('view engine','hbs')
app.set('views',viewsDirectoryPath)

app.use(cors());
app.use(express.static(publicDirectoryPath))
app.use(express.json({limit: '50mb'}))
app.use(express.urlencoded({limit: '50mb'}));
app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'DELETE, PUT, GET, POST');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('',(req, res)=>{
    res.render('index')
})

app.get('/faceki-pre-sign-up',(req, res)=>{
    res.render('faceki-pre-sign-up')
})

app.get('/faceki-sign-up',(req, res)=>{
    res.render('faceki-sign-up')
})

app.get('/faceki-sign-in',(req, res)=>{
    res.render('faceki-sign-in')
})

app.get('/faceki-sign-in-complete',(req, res)=>{
    res.render('faceki-sign-in-complete')
})

app.get('/faceki-sign-in-list',(req, res)=>{
    res.render('faceki-sign-in-list')
})

app.get('/loginfailed',(req, res)=>{
    res.render('loginfailed')
})

app.get('/lowquality',(req, res)=>{
    res.render('lowquality')
})

app.get('/error',(req, res)=>{
    res.render('error')
})

app.get('/faceki-request-a-sign-in-pending',(req, res)=>{
    res.render('faceki-request-a-sign-in-pending')
})

app.listen(port,()=>{
    console.log('Server is up on port '+ port)
})

