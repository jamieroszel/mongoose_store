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
  res.render('product/new')
}

// destroy - delete a particular product, then redirect to index
const destroy = async (req, res) => {
  res.send('destroy')
}

// update -  update a particular product, then redirect to index
const update = async (req, res) => {
  res.send('update')
}

// create - Add new product to database, then redirect to index
const create = async (req, res) => {
  // create the new product
  await Product.create(req.body)
  // redirect to the main page
  res.redirect('/product')
}

// edit - show edit form of one product
const edit = async (req, res) => {
  res.send('edit')
}

// show - show info about one product
const show = async (req, res) => {
  // get the id param
  const id = req.params.id
  // get a dog
  const product = await Product.findById(id)
  // render a view
  res.render('product/show', {
    product
  })
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