// ==== FORMULÁRIO DE CADASTRO ====
document.getElementById("registerForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Impede o envio padrão do formulário

  // Captura os dados do formulário
  const Nome = document.getElementById("Nome").value;
  const Email = document.getElementById("Email").value;
  const Senha = document.getElementById("Senha").value;
  const confirmeSenha = document.getElementById("confirmeSenha").value;

  // Verifica se o e-mail já está cadastrado no localStorage
  if (localStorage.getItem(Email)) {
    document.getElementById("span").innerText = "E-mail já cadastrado.";
    return;
  }

  // Verifica se as senhas coincidem
  if (Senha !== confirmeSenha) {
    document.getElementById("senhaid").innerText = "As senhas não coincidem.";
    return;
  }

  // Cria um objeto do usuário
  const user = {
    Nome: Nome,
    Email: Email,
    Senha: Senha,
  };

  // Armazena o usuário no localStorage usando o e-mail como chave
  localStorage.setItem(Email, JSON.stringify(user));

  // Redireciona para a página de login
  window.location.href = "login.html";
});
