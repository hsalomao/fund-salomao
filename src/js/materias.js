window.onload = function () {
    var itens = document.querySelectorAll("tr");
    const alert = document.querySelector(".alert");
    const strong = document.querySelector("strong");
    alert.style.display = "none";

    Array.from(itens).forEach((item) => {

        if (item.rowIndex != 0) {
            item.addEventListener("click", function (event) {
                item.remove();
            });
        }
    });

    document.querySelector("#nova").addEventListener("click", function (event) {
        const itens = document.getElementsByTagName("tbody");
        itens[0].innerHTML += '<tr><td><input type="text" placeholder="Digite o nome da nova matéria" class="new-subject"></td><td></td></tr>';
    });

    document.querySelector("#salvar").addEventListener("click", function (event) {
        alert.style.display = "block";
        alert.style.backgroundColor = "green";
        strong.innerText = "Dados salvos com sucesso";
    });
}