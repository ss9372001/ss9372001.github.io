
const express = require('express');

const ejs = require('ejs');

const session= require("express-session");

const cookieParser=require("cookie-parser");

const cors= require("cors");

const compression= require("compression");

const bodyParser= require("body-parser");

const logger= require("morgan");

const path = require('path');

app = express();

app.use(cors());

app.use(compression());

app.use(express.urlencoded({extended: true}));

app.use(express.json());

app.use(cookieParser());

app.use(logger("dev"));

app.engine('html', ejs.renderFile);

app.set('view engine', 'ejs');

app.set("views",__dirname+"/client/views");

app.use(session({
    secret: "KonfinitySecretKey",
    resave: false,
    saveUninitialized: false,
    cookie: {
        path: "/",
        httpOnly: true,
        secure: false,
        maxAge: null
    }
}));

app.use(express.static(path.resolve(__dirname, "client/assets")));
app.use(express.static(path.resolve(__dirname, "client/css")));
app.use(express.static(path.resolve(__dirname, "client/javascript")));


app.get('/', (req, res) => {
	res.render('index');
});

app.get('/doctors', (req, res) => {
	res.render('doctor');
});

app.get('/hospitals', (req, res) => {
	res.render('hospitals');
});

app.get('/about', (req, res) => {
	res.render('about-us');
});

app.get('/treatment', (req, res) => {
	res.render('treatment');
});

app.get('/submit_your_query', (req, res)=>{
    res.render('submit-your-query');
})

app.get('/login', (req, res) => {
	res.render('login');
});

app.get('/signup', (req, res) => {
	res.render('signup');
});

app.get('/contact-us', (req, res) => {
	res.render('contactus');
});

app.get('/about-hospital', (req, res) => {
	res.render('about-hospital');
});

app.get('/doctor-profile', (req, res) => {
	res.render('doctor-profile');
});

app.get('/faq', (req, res) => {
	res.render('faq');
});

app.get('/book_an_appointment', (req, res)=>{
    res.render('book_an_appointment');
});

app.get('/tvastra-plus', (req, res) => {
	res.render('tvastra-plus');
});

app.set("port", process.env.PORT || 4000);

app.listen(app.get("port"), ()=>{
    console.log("Application running in port:"+app.get("port"));
})


module.exports = app;

