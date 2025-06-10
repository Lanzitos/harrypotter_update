document.getElementById("registerForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const Nome = document.getElementById("Nome").value;
    const Email = document.getElementById("Email").value;
    const Senha = document.getElementById("Senha").value;
    const confirmeSenha = document.getElementById("confirmeSenha").value;
  
    if (localStorage.getItem(Email)) {
      document.getElementById("span").innerText = "E-mail já cadastrado.";
      return;
      //aviso de email já cadastrado 
    }
    if (Senha !== confirmeSenha) {
      document.getElementById("senhaid").innerText = "As senhas não coincidem.";
      return;
      // aviso de senha 
    }
  
    const user = {
      Nome: Nome,
      Email: Email,
      Senha: Senha,
    };
  
    localStorage.setItem(Email, JSON.stringify(user));
    window.location.href = "login.html";
     
  });
  
  
  