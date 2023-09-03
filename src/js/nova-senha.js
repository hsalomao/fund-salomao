window.onload = function () {
  const fieldNames = ["email"];
  const alert = document.querySelector(".alert");
  const strong = document.querySelector("strong");
  alert.style.display = "none";

  const validateEmail = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };

  document.querySelector("#enviar").addEventListener("click", function (event) {
    var enviar = true;

    for (const fieldName of fieldNames) {
      const field = document.getElementById(fieldName);
      if (!validate(field)) {
        enviar = false;
      }

      field.addEventListener("keyup", function (event) {
        field.style.backgroundColor = 'white';
      });
    }

    if (enviar) {
      alert.style.display = "block";
      alert.style.backgroundColor = "green";
      strong.innerText = "Nova senha enviada com sucesso!";
    } else {
      alert.style.display = "block";
      alert.style.backgroundColor = "#f44336";
      strong.innerText = "Existe(m) campo(s) com preenchimento incorreto";
    }
  });

  function validate(field) {
    if (!field.value) {
      field.style.backgroundColor = '#f44336';
      return false;
    } else if (field.id == "email" && !validateEmail(field.value)) {
      field.style.backgroundColor = '#f44336';
      return false;
    }
    return true;
  }

}