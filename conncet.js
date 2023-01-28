
const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
mongoose.connect('mongodb://127.0.0.1:27017/myBlog', {useNewUrlParser: true});



/* // Define the user schema
const UserSchema = new mongoose.Schema({
  name: String,
  age: Number
});

// Compile the schema into a model
const User = mongoose.model('users', UserSchema);

// Find all users and print them
User.find({}, (err, users) => {
  if (err) {
    console.log(err);
  } else {
    console.log(users);
  }
}); */