// Armazena o login e senha no LocalStorage ao criar conta
document.getElementById('createAccountForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const newUsername = document.getElementById('newUsername').value;
    const newPassword = document.getElementById('newPassword').value;

    // Armazena os dados da conta no LocalStorage
    localStorage.setItem('username', newUsername);
    localStorage.setItem('password', newPassword);

    alert('Conta criada com sucesso!');
    closeModal();
});

// Realiza o login verificando os dados do LocalStorage
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const loginMessage = document.getElementById('loginMessage');

    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    if (username === storedUsername && password === storedPassword) {
        loginMessage.textContent = 'Login bem-sucedido!';
        loginMessage.style.color = 'green';

        setTimeout(() => {
            window.location.href = "index.html"; // Redireciona para o menu
        }, 1000);
    } else {
        loginMessage.textContent = 'Usuário ou senha incorretos.';
        loginMessage.style.color = 'red';
    }
});

// Modal para criar conta
document.getElementById('createAccountBtn').addEventListener('click', function() {
    document.getElementById('createAccountModal').classList.remove('hidden');
});

document.getElementById('closeModalBtn').addEventListener('click', function() {
    closeModal();
});

function closeModal() {
    document.getElementById('createAccountModal').classList.add('hidden');
}
