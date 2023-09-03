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
        itens[0].innerHTML += '<tr><td><select name="student" id="student"><option value="1" selected>Aluno 1</option><option value="2">Aluno 2</option><option value="3">Aluno 3</option><option value="4">Aluno 4</option><option value="5">Aluno 5</option></select></td><td><select name="school-subject" id="school-subject"><option value="1">Matéria 1</option><option value="2" selected>Matéria 2</option><option value="3">Matéria 3</option><option value="4">Matéria 4</option><option value="5">Matéria 5</option></select></td><td><input type="text" maxlength="2" onkeypress="return onlyNumberKey(event)"></td> <td class="action"><i class="bi bi-x-lg icon-red"></i></td></tr>';
    });

    document.querySelector("#salvar").addEventListener("click", function (event) {
        alert.style.display = "block";
        alert.style.backgroundColor = "green";
        strong.innerText = "Dados salvos com sucesso";
    });
}