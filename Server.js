const express = require("express");

const app = express();

app.set("view engine","ejs")

// @method GET
// @route "http://localhost:5000/"

app.get("/",function(req,res){
    return res.render("Home");
});


// @method GET
// @route "http://localhost:5000/Product"

app.get("/Product",function(req,res){
    return res.render("Product");
});

// @method GET
// @route "http://localhost:5000/About"

app.get("/About",function(req,res){
    return res.render("Register");
});

// @method GET
// @route "http://localhost:5000/Contact"

app.get("/Contact",function(req,res){
    return res.render("Contact");
});

// @method GET
// @route "http://localhost:5000/User"

app.get("/User",function(req,res){
    return res.render("User");
});

// @method GET
// @route "http://localhost:5000/Admin"

app.get("/Admin",function(req,res){
    return res.render("Admin");
});

// @method GET
// @route "http://localhost:5000/Login"

app.get("/Login",function(req,res){
    return res.render("Login");
});

// @method GET
// @route "http://localhost:5000/Register"

app.get("/Register",function(req,res){
    return res.render("Register");
});



// server Port
app.listen(5000,function(){
    console.log("Server is Running on port 5000")
})