var redir = "https://ohboxparty.com.br/sucesso"

// Checkout fns

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

function obpMain() {

    if (isCheckout() && isSuccess()) {
        
        if (isTedOrPix()) {
            window.localStorage["ted_pix"] = true;    
        }
        else {
            window.localStorage["ted_pix"] = false;
        }
        
        window.location.href = redir;
    }

}


window.addEventListener('load', function() {
    try {
        obpMain();    
    }
    catch (e) 
    {
        console.log(e);
    }
})


