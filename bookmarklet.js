javascript:(function(){
	// redirect to shoe url
	var loc = window.location;
	var url = 'https://www.vans.com/shop/solid-colors-slip-on-true-white#hero=0';
	if (loc != url){
		alert('Redirecting...');
		window.location.href = url;
	}
	console.log("bookmarklet finished");
})();

// https://github.com/hallisy/Supreme-Bot/blob/master/content_scripts/cart.js