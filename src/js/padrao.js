document.addEventListener('DOMContentLoaded', function () {
    getCurrentDateExtenso();
}, false);


function getCurrentDateExtenso() {

    const option = {
        year: 'numeric',
        month: ('long' || 'short' || 'numeric'),
        weekday: ('long' || 'short'),
        day: 'numeric'
    }
    const locale = 'pt-br'
    var dataExtenso = document.getElementById("dataExtenso");
    dataExtenso.innerHTML = new Date().toLocaleDateString(locale, option);

}

function onlyNumberKey(evt) {
             
    // Only ASCII character in that range allowed
    var ASCIICode = (evt.which) ? evt.which : evt.keyCode
    if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57))
        return false;
    return true;
}