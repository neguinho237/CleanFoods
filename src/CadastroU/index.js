document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".btn").addEventListener("click", function () {
        let email = document.querySelector(".ipt1").value.trim();
        let username = document.querySelector(".ipt2").value.trim();
        let senha = document.querySelector(".ipt3").value.trim();

        if (!email.includes("@")) {
            alert("Por favor, insira um email válido!");
            return;
        }

        if (username === "") {
            alert("O nome de usuário não pode estar vazio!");
            return;
        }

        if (senha.length < 6) {
            alert("A senha deve ter pelo menos 6 caracteres!");
            return;
        }

        alert("Conta criada com sucesso!");
    });
});