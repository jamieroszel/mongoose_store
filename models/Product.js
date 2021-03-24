// the process below has two steps: 
// make our schema, which defines the structure
// then create a model based on that schema
// 'Product' defines the name of the model, which is a singular version of the collection name
// that name is stored inside the constant Blog
// then, export the module

// import model and Schema
const {model, Schema} = require('../db/connection')

const ProductSchema = new Schema({
    name: String,
    description: String,
    img: String, // <---- this will hold an image url
    price: {type: Number, min: 0},
    qty: {type: Number, min: 0},
}, {timestamps: true})

// create model
const Product = mongoose.model('Product', ProductSchema);

module.export = Product;
