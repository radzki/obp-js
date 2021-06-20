const successPage = "https://ohboxparty.lojavirtualnuvem.com.br/sucesso";

/* Checkout */

// const day = 24 * 60 * 60 * 1000;

function isCheckout() {
    let url = window.location.href;
    return (url.indexOf("checkout") >= 0);
}

function isSuccess() {
    let url = window.location.href;
    return (url.indexOf("success") >= 0); 
}

function isTedOrPix() {
    let srch = document.getElementsByClassName('status panel')[0].innerText;
    return (srch.indexOf('Aguardando pagamento') >= 0);
}

/* Success Page */

function isSuccessPage() {
    let url = window.location.href;
    return (url.indexOf(successPage) >= 0);
}


function obpMain() {

    if (isCheckout() && isSuccess()) {
        // Appends Success page in order to log analytics metric
        document.getElementsByTagName('body')[0].innerHTML += '<iframe src="' + successPage + '" style="height: 0px; width: 0px;"></iframe>'
    }

}


window.addEventListener('load', function() {
    try { obpMain();}
    catch (e) { console.log(e);}
});


