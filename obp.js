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
