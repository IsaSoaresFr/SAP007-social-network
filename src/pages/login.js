import "../lib/config-firebase.js";
import { loginGoogle } from "../lib/auth-firebase.js";
//import "https://www.gstatic.com/firebasejs/9.6.11/firebase-auth.js";

export default () => {
  const containerLogin = document.createElement('div')

  const templateLogin = `
    <p class="paragrafoLogin">Login</p>
    <input type="email" name="email" class="email-input input-users" placeholder="Insera seu e-mail" required /><br>
    <input type="password" name="password" class="password-input input-users" placeholder="Insera uma senha" requerid /><br>
  <a href="" > <p class='reset-password'>Esqueceu a sua senha?</p></a><br>
  <br><button class='btn-submit' type="submit">Entrar</button><br>
  <button class="btn-google" id="buttonGoogle">Entrar com o Google
  </button><br>
  <p id="message" class="successMessage errorMessage"></p>
  `;

containerLogin.innerHTML = templateLogin;

return containerLogin;

}

const loginButtonGoogle = containerLogin.querySelector("#buttonGoogle");
const messageSuccess = containerLogin.querySelector(".successMessage");
//const messageError = containerLogin.querySelector('.errorMessage');


loginButtonGoogle.addEventListener("click", (e) => {
  e.preventDefault();
  loginGoogle().then((result) => {
      messageSuccess.innerHTML = "Login google feito com sucesso!";
      //window.location.hash = "#feed"; //substituir mensagem quando criar pagina de timeline com posts 
    })
    .catch((error) => {
      //messageError.innerHTML = "Login não deu certo, tente novamente!";
    });
});