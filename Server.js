const express = require("express");

const app = express();


// @method GET
// @route "http://localhost:5000/"

app.get("/",function(req,res){
    return res.send("<h1>Home</h1>");
});


// @method GET
// @route "http://localhost:5000/Product"

app.get("/Product",function(req,res){
    return res.send("<h1>Product</h1>");
});

// @method GET
// @route "http://localhost:5000/About"

app.get("/About",function(req,res){
    return res.send("<h1>About</h1>");
});

// @method GET
// @route "http://localhost:5000/Contact"

app.get("/Contact",function(req,res){
    return res.send("<h1>Contact</h1>");
});

// @method GET
// @route "http://localhost:5000/User"

app.get("/User",function(req,res){
    return res.send("<h1>User</h1>");
});

// @method GET
// @route "http://localhost:5000/Admin"

app.get("/Admin",function(req,res){
    return res.send("<h1>Admin</h1>");
});

// @method GET
// @route "http://localhost:5000/Login"

app.get("/Login",function(req,res){
    return res.send("<h1>Login</h1>");
});

// @method GET
// @route "http://localhost:5000/Register"

app.get("/Register",function(req,res){
    return res.send("<h1>Register</h1>");
});



// server Port
app.listen(5000,function(){
    console.log("Server is Running on port 5000")
})