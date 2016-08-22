import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  password: String,
  email: String,
  phone: String,
});

const productSchema = new Schema({
  id: Number,
  productName: String,
  price: Number,
  description: String
});

const User = mongoose.model('User', userSchema);
const Product = mongoose.model('Product', productSchema);


export {
  User,
  Product
};
