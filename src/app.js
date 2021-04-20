
// const express = require("express");

// const router= express.Router();

// const app = express();

// const session= require("express-session");

// const cookieParser=require("cookie-parser");

// const cors= require("cors");

// const compression= require("compression");

// const bodyParser= require("body-parser");

// const logger= require("morgan");

// const  path= require("path");


// app.use(cors());

// app.use(compression());

// app.use(express.urlencoded({extended: true}));

// app.use(express.json());

// app.use(cookieParser());

// app.use(logger("dev"));

// app.use(session({
//     secret: "KonfinitySecretKey",
//     resave: false,
//     saveUninitialized: false,
//     cookie: {
//         path: "/",
//         httpOnly: true,
//         secure: false,
//         maxAge: null
//     }
// }));

// app.set("views",__dirname+"/client/views");
// //for rendering ejs in html format.
// app.engine("html", require("ejs").renderFile);

// //setting view engine as ejs
// app.set("view engine", "ejs");

// // app.use(express.static(path.join(__dirname, "/client/assets")));
// app.use(express.static((__dirname+ "/client")));
// // app.use(express.static(path.join(__dirname, "/client/javascript")));

// app.get('/', (req, res)=>{
// 	res.render("index");
// })
// app.set("port", process.env.PORT || 4000);

// app.listen(app.get("port"), ()=>{
//     console.log("Application running in port:"+app.get("port"));
// })

// module.exports = app;


const express = require('express');
const ejs = require('ejs');
const fs = require('fs');
const path = require('path');
app = express();
// app.set('views', __dirname);
// app.use(express.static(path.join(__dirname)));
app.engine('html', ejs.renderFile);
app.set('view engine', 'ejs');
app.set("views",__dirname+"/client/views");
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
	res.render('views/about-us.ejs');
});

app.get('/treatments', (req, res) => {
	res.render('views/treatment.ejs');
});

app.get('/login', (req, res) => {
	res.render('views/login.ejs');
});


app.get('/signup', (req, res) => {
	res.render('views/signup.ejs');
});

app.get('/contact-us', (req, res) => {
	res.render('views/contactus.ejs');
});

app.set("port", process.env.PORT || 4000);

app.listen(app.get("port"), ()=>{
    console.log("Application running in port:"+app.get("port"));
})

// app.get('/hospital-details', (req, res) => {
// 	res.render('views/hospital_details.ejs');
// });


// app.get('/doctor-details', (req, res) => {
// 	res.render('views/doctor_details.ejs');
// });

// app.get('/faq', (req, res) => {
// 	res.render('views/faq.ejs');
// });

// app.get('/tvastra-plus', (req, res) => {
// 	res.render('views/tvastra-plus.ejs');
// });

module.exports = app;
