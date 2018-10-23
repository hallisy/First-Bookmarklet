javascript:(function(){
	
	var loc = window.location;
	var url = 'https://www.vans.com/shop/slip-on-birch-true-white#hero=0';
	if (loc != url){
		alert('Redirecting... select OK to proceed');
		window.location.href = url;
	}
	
	$('#attr-size').val("4.0 Boys = 5.5 Women").trigger('change');
	
	$('#quantity-item').val("1").trigger('change');
	
	var cart = document.querySelector('a.mini-cart-action.button.primary');
	var addToCart = document.querySelector('a.product-content-form-add-to-bag.button.primary.add-to-bag-js');
	if (cart === null){
		addToCart.click();
	}	
	console.log("checkout");
	
	document.getElementById('paypalPaymentButtonMiniCart').click();

	console.log("part one finished");
})();

javascript:(function(){

})();
// https://github.com/hallisy/Supreme-Bot/blob/master/content_scripts/cart.js
// Size = "4.0 Boys = 5.5 Women"

/*$( document ).ajaxComplete(function(event, xhr, settings){
	if ( settings.url === "https://www.vans.com/webapp/wcs/stores/servlet/VFAjaxGetMiniCartOrderView?storeId=10153&langId=-1&catalogId=10703&requesttype=ajax" ) {
   	$( ".log" ).text( "Triggered ajaxComplete handler." );
});
	$('#paypalPaymentButtonMiniCart').trigger('click');
*/