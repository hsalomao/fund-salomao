window.onload = function () {
  const fieldNames = ["nameUser", "email", "telephone", "cellphone", "documentNumber", "birthday", "zipcode", "address", "addressNumber", "cityState", "neighborhood", "userType", "password"];
  const zicode = document.getElementById("zipcode");

  const alert = document.querySelector(".alert");
  const strong = document.querySelector("strong");
  alert.style.display = "none";

  const validateEmail = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };

  document.querySelector("#salvar").addEventListener("click", function (event) {
    var salvar = true;

    for (const fieldName of fieldNames) {
      const field = document.getElementById(fieldName);
      if (!validate(field)) {
        salvar = false;
      }

      field.addEventListener("keyup", function (event) {
        field.style.backgroundColor = 'white';
      });
    }

    if (salvar) {
      alert.style.display = "block";
      alert.style.backgroundColor = "green";
      strong.innerText = "Novo usuário salvo com sucesso!"
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

  zicode.addEventListener("blur", function (event) {
    zicode.value = ("00000000" + zicode.value).slice(-8);
    findZipCode(zipcode);
  });

  async function findZipCode(zipcode) {

    await fetch("https://viacep.com.br/ws/" + zipcode.value + "/json/")
      .then(response => {
        response.json()
          .then(data => {
            if (data.erro) {
              zipcode.style.backgroundColor = '#f44336';
              alert.style.display = "block";
              alert.style.backgroundColor = "#f44336";
              strong.innerText = "CEP não encontrado";
            } else {
              zipcode.style.backgroundColor = 'white';
              alert.style.display = "none";
              strong.innerText = "";
              console.log(data);
              document.getElementById("address").value = data.logradouro;
              document.getElementById("cityState").value = data.localidade + "/" + data.uf;
              document.getElementById("neighborhood").value = data.bairro;
            }
          });
      });
  }

}

//API DE CEP
//https://viacep.com.br/ws/03251160/json/