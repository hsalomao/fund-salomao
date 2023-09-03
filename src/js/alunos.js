window.onload = function () {
    const alert = document.querySelector(".alert");
    const strong = document.querySelector("strong");
    alert.style.display = "none";

    document.querySelectorAll("#editar").forEach((button) => {
        button.addEventListener("click", function (event) {
            window.location.href = "usuario.html";
            window.localStorage = "alunos"
        });
    });

    document.querySelector("#salvar").addEventListener("click", function (event) {
        alert.style.display = "block";
        alert.style.backgroundColor = "green";
        strong.innerText = "Dados salvos com sucesso";
    });
}