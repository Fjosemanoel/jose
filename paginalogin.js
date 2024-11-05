// Função de verificação da senha
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio do formulário

    var senha = document.getElementById("senha").value; // Pega o valor da senha
    var senhaCorreta = "cecilia"; // Senha correta definida

    // Verifica se a senha inserida é a correta
    if (senha === senhaCorreta) {
        window.location.href = "jose.html"; // Redireciona para a página secreta
    } else {
        alert("Senha incorreta! Tente novamente."); // Exibe mensagem de erro
    }
});
