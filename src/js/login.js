window.onload = function () {
  const fieldNames = ["email", "password"];
  const alert = document.querySelector(".alert");
  const strong = document.querySelector("strong");
  alert.style.display = "none";

  const validateEmail = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };

  document.querySelector("#logar").addEventListener("click", function (event) {
    var logar = true;

    for (const fieldName of fieldNames) {
      const field = document.getElementById(fieldName);
      if (!validate(field)) {
        logar = false;
      }

      field.addEventListener("keyup", function (event) {
        field.style.backgroundColor = 'white';
      });
    }

    if (logar) {
      alert.style.display = "none";
      window.location.href = "home.html";
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


//https://www.tutorialspoint.com/how-to-add-a-new-element-to-html-dom-in-javascript 