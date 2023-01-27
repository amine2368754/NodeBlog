const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/myBlog', {useNewUrlParser: true});
mongoose.set('strictQuery', true);
const userSchema = new mongoose.Schema({
    name: String,
    age: Number
  });
  const User = mongoose.model('User', userSchema);
  
  const user = new User({ name: 'Tantan', age: 22 });
  user.save();
  