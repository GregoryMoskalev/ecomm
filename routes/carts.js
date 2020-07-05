const express = require('express');
const cartsRepo = require('../repositories/carts');

const router = express.Router();

//receive a post request to add an item to a cart
router.post('/cart/products', async (req, res) => {
	let cart;
	if (!req.session.cartId) {
		cart = await cartsRepo.create({ items: [] });
		req.session.cartId = cart.id;
	} else {
		cart = await cartsRepo.getOne(req.session.cartId);
	}
	console.log(cart);

	res.send('Product added');
});
//receive a get req to show all items in cart

//receive a post req to delete an item from a cart

module.exports = router;
