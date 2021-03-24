// create our new router
const router = require("express").Router()
const ProductRouter = require('./products')
///////////////////////////////
// Router Specific Middleware
////////////////////////////////
router.use('/products', ProductRouter)

////////////////////////////////
// Router-specific Routes
////////////////////////////////
router.get("/", (req, res) => {
    res.render("home")
})
////////////////////////////////
// Export the Router
////////////////////////////////
module.exports = router