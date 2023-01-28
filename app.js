
const mongoose=require("mongoose")
const express = require('express')
const app = express()
const port = 3000
const path = require("path")
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'template'))
require("./conncet")
const bodyparser = require("body-parser")
app.use(bodyparser.urlencoded({extended:false}))

app.get('/home',(req,res)=>res.sendFile(__dirname + "/template/api.html"))

const productSchema = new mongoose.Schema({
    name: String,
    age: Number
});


const User = mongoose.model('users', productSchema);

app.post('/home', (req, res) => {
    // Create a new product
    let user = new User({
        name: req.body.name,
        age: req.body.age
    });
   
    user.save((err, users) => {
        if (err) return console.error(err);
        res.status(201).json(users);
    });
});


 app.get('/users', (req, res) => {
    // Get all products
    User.find((err, products) => {
        if (err) return console.error(err);
        res.render('users', { products: products });
    });
});





app.get('/user/:id', (req, res) => {
    // Get a single user by ID
    User.findById(req.params.id, (err, user) => {
        if (err) return console.error(err);
        if(!user) return res.status(404).send('The user with the given ID was not found.');
        res.json(user);
    });
});



app.put('update/:id', (req, res) => {
    // Update a single product by ID
    User.findByIdAndUpdate(req.params.id, req.body, (err, product) => {
        if (err) return console.error(err);
        res.json(product);
    });
});
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
/*
app.delete('/products/:id', (req, res) => {
    // Delete a single product by ID
    Product.findByIdAndRemove(req.params.id, (err, product) => {
        if (err) return console.error(err);
        res.json(product);
    });
});
 */
