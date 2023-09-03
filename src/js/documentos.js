window.onload = function () {
    var file = document.querySelector("#newfile");
    const alert = document.querySelector(".alert");
    const strong = document.querySelector("strong");
    alert.style.display = "none";

    document.querySelector('input[type="submit"]').addEventListener("click", function (event) {
        var nameFile = file.files.item(0).name;
        if (file.value) {
            const itens = document.getElementsByTagName("tbody");
            itens[0].innerHTML += '<tr><td>' + nameFile + '</td><td><input type="button" value="Download" class="button"></td></tr>';
            alert.style.display = "block";
            alert.style.backgroundColor = "green";
            strong.innerText = "Arquivo carregado com sucesso";
        }
    });
}