/////////////////////////
// import models
/////////////////////////
const Product = require('../models/Product'); // product model

///////////////////////////////////
// Controller Functions
///////////////////////////////////

// index - Display a list of all products
const index = async (req, res) => {
  // gets all the products
  const Products = await Product.find({})
  // render the view
  res.render('product/index', {
    products: Products
  })
}

// new - Show form to add new products
const newProduct = async (req, res) => {
  res.send('new product')
}


// create - Add new product to database, then redirect to index
const create = async (req, res) => {
  res.send('create')
}


// show - show info about one product
const show = async (req, res) => {
  res.send('show')
}


// edit - show edit form of one product
const edit = async (req, res) => {
  res.send('edit')
}


// update -  update a particular product, then redirect to index
const update = async (req, res) => {
  res.send('update')
}


// destroy - delete a particular product, then redirect to index
const destroy = async (req, res) => {
  res.send('destroy')
}

// export controller so it's bundled by object
module.exports = {
  index, 
  new: newProduct,
  create,
  show,
  edit,
  update,
  destroy
}