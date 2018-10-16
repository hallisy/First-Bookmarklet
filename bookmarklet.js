javascript:(function(){
	// redirect to shoe url
	var loc = window.location;
	var url = 'https://www.vans.com/shop/solid-colors-slip-on-true-white#hero=0';
	if (loc != url){
		alert('Redirecting... select OK to proceed');
		window.location.href = url;
	}
	// select size
	$('#attr-size').val("4.0 Boys = 5.5 Women").trigger('change');
	// select quantity
	$('#quantity-item').val("1").trigger('change');
	// add to cart
	var addToCart = document.querySelector('a.product-content-form-add-to-bag.button.primary.add-to-bag-js');
	addToCart.click();

	// checkout
	var cart = document.querySelector('a.mini-cart-action.button.primary');
	cart.click();
	console.log("bookmarklet finished");
})();

// https://github.com/hallisy/Supreme-Bot/blob/master/content_scripts/cart.js
// Size = "4.0 Boys = 5.5 Women"