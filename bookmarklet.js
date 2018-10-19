javascript:(function(){
	console.log("redirect to shoe url");
	var loc = window.location;
	var url = 'https://www.vans.com/shop/slip-on-birch-true-white#hero=0';
	if (loc != url){
		alert('Redirecting... select OK to proceed');
		window.location.href = url;
	}
	
	console.log("select size");
	$('#attr-size').val("4.5 Boys = 6.0 Women").trigger('change');
	
	console.log("select quantity");
	$('#quantity-item').val("1").trigger('change');
	
	console.log("add to cart");
	var addToCart = document.querySelector('a.product-content-form-add-to-bag.button.primary.add-to-bag-js');
	addToCart.click();

	console.log("checkout");
	$( document ).ajaxComplete(function(event, xhr, settings){
		if ( settings.url === "https://www.vans.com/webapp/wcs/stores/servlet/VFAjaxGetMiniCartOrderView?storeId=10153&langId=-1&catalogId=10703&requesttype=ajax" ) {
   		$( ".log" ).text( "Triggered ajaxComplete handler." );
	});
	var cart = document.querySelector('a.mini-cart-action.button.primary');
	cart.click();
	console.log("bookmarklet finished");
})();

// https://github.com/hallisy/Supreme-Bot/blob/master/content_scripts/cart.js
// Size = "4.5 Boys = 6.0 Women"
// https://www.vans.com/webapp/wcs/stores/servlet/VFAjaxGetMiniCartOrderView?storeId=10153&langId=-1&catalogId=10703&requesttype=ajax