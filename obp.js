var redir = "https://ohboxparty.com.br/sucesso"

// Checkout fns

const day = 24 * 60 * 60 * 1000;

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
        
        cookieStore.set({
              name: "ted_pix",
              value: isTedOrPix(),
              expires: Date.now() + day,
              domain: "ohboxparty.com.br"
            });

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


