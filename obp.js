function defer(method) {
	if (window.$) {
		method();
	} else {
		setTimeout(function() { defer(method) }, 50);
	}
}


function obpMain() {

	function isCheckout() {
		url = window.location.href;
		res = url.indexOf("checkout");
		return res >= 0;
	}


	$(function()
	{
		$(window).bind('load', function()
		{
			if (isCheckout()){
				console.log("Checkout!!!");
			}
		});
	});

	console.log("Functions loaded successfully.");
}

defer(obpMain);


