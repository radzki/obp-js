var redir = "https://ohboxparty.com.br/sucesso"

function isCheckout() {
    let url = window.location.href;
    let res = url.indexOf("checkout");
    return res >= 0;
}


function isSuccess() {
    let url = window.location.href;
    let res = url.indexOf("success");
    return res >= 0; 
}

function obpMain() {

    if (isCheckout() && isSuccess()) {
        window.location.href = redir;
    }

}

window.addEventListener('load', function() {
    obpMain();
})


