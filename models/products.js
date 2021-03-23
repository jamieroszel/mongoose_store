const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: String,
    description: String,
    img: String, // <---- this will hold an image url
    price: {type: Number, min: 0},
    qty: {type: Number, min: 0},
})