// ==== FORMULÁRIO DE CADASTRO ====
document.getElementById("registerForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Impede o envio padrão do formulário

 
  const Nome = document.getElementById("Nome").value;
  const Email = document.getElementById("Email").value;
  const Senha = document.getElementById("Senha").value;
  const confirmeSenha = document.getElementById("confirmeSenha").value;

  
<<<<<<< HEAD
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
  
=======
  if (localStorage.getItem(Email)) {
    document.getElementById("span").innerText = "E-mail já cadastrado.";
    return;
  }

>>>>>>> 9177fbc4549520cdce0950138d9a050a45e501e5
  
  if (Senha !== confirmeSenha) {
    document.getElementById("senhaid").innerText = "As senhas não coincidem.";
    return;
  }

  
  const user = {
    Nome: Nome,
    Email: Email,
    Senha: Senha,
  };

  
  localStorage.setItem(Email, JSON.stringify(user));

  
  window.location.href = "login.html";
});
