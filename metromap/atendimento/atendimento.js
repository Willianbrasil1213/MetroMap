document.getElementById('atendimento-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const mensagem = document.getElementById('mensagem').value;

    if (mensagem.trim() !== "") {
        document.getElementById('mensagem-sucesso').classList.remove('hidden');
        document.getElementById('mensagem').value = '';  // Limpa o campo de texto
    }
});
