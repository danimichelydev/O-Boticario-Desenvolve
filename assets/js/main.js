let button = document.querySelector("button");
let inputEmail = document.querySelector("#email");
let inputMessage = document.querySelector("#message");
let pattern = /^[a-zA-Z0-9.]{1,32}@[a-z0-9]{1,16}\.[a-z]{3}$/;

button.addEventListener("click", (event) => {
  let count = [];

  if (!pattern.test(inputEmail.value)) {
    count.push(1);
    inputEmail.classList.add("warning");
    inputEmail.nextElementSibling.innerHTML =
      "Erro no envio: Endereço de mail inválido!";
    inputEmail.nextElementSibling.style.opacity = "1";
  } else {
    inputEmail.classList.remove("warning");
    inputEmail.nextElementSibling.style.opacity = "0";
  }

  if (inputMessage.value === "") {
    count.push(2);
    inputMessage.classList.add("warning");
    inputMessage.nextElementSibling.innerHTML =
      "Erro no envio: Insira uma mensagem!";
    inputMessage.nextElementSibling.style.opacity = "1";
  } else {
    inputMessage.classList.remove("warning");
    inputMessage.nextElementSibling.style.opacity = "0";
  }

  if (count.length > 0) {
    event.preventDefault();
  }

  passValueName();
});

function passValueName() {
  let email = inputEmail.value;
  let userName = email.split("@");

  localStorage.setItem("userName", userName[0]);
  return false;
}
