/////////////////////////
// import models
/////////////////////////
const { findByIdAndUpdate } = require('../models/Product');
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

// destroy - delete a particular product, then redirect to index "/product/:id"
const destroy = async (req, res) => {
  const id = req.params.id
  await Product.findByIdAndDelete(id)
  res.redirect('/product')
}

// update -  update a particular product, then redirect to index
const update = async (req, res) => {
  // grab the ID from params
  const id = req.params.id
  // update the product
  await Product.findByIdAndUpdate(id, req.body, {new: true})
  // redirect back to show page for that product
  res.redirect(`/product/${id}`)
}

// create - Add new product to database, then redirect to index
const create = async (req, res) => {
  // create the new product
  await Product.create(req.body)
  // redirect to the main page
  res.redirect('/product')
}

// edit - show edit form of one product "/product/:id/edit"
const edit = async (req, res) => {
    // get the id param
    const id = req.params.id
    // get a product
    const product = await Product.findById(id)
    // render a view
    res.render('product/edit', {
      product
    })
}

// show - show info about one product
const show = async (req, res) => {
  // get the id param
  const id = req.params.id
  // get a product
  const product = await Product.findById(id)
  // render a view
  res.render('product/show', {
    product
  })
}

const buy = async (req, res) => {
  // grab the id
  const id = req.params.id
  // decrement the quantity
  await Product.findByIdAndUpdate(id, {$inc: {qty: -1}})
  // redirect back to main page
  res.redirect('/product')
}

// export controller so it's bundled by object
module.exports = {
  index, 
  new: newProduct,
  create,
  show,
  edit,
  update,
  destroy,
  buy
}