// import Router and Controllers
const router = require('express').Router()
const ProductController = require('../controllers/product')

// index get => '/product'
router.get('/', ProductController.index)

// new get => '/product'
router.get('/new', ProductController.new)

// create get => '/product'
router.post('/', ProductController.create)

// edit get => '/product'
router.get('/:id/edit', ProductController.edit)

// update put => '/product'
router.put('/:id', ProductController.update)

// destroy delete => '/product/:id'
router.delete('/:id', ProductController.destroy)

// add functionality to buy button (delete from qty) 
router.get('/buy/:id', ProductController.buy)


// show get => '/product'
router.get('/:id', ProductController.show)

// export the router
module.exports = router