
    async function criarConta() {
        // Capturando os dados do formulário
        const email = document.querySelector('input[name="email"]').value;
        const usuario = document.querySelector('input[name="usuario"]').value;
        const senha = document.querySelector('input[name="senha"]').value;

        // Criando o objeto com os dados
        const data = {
            email: email,
            usuario: usuario,
            senha: senha
        };

        try {
            // Enviando a requisição para a API
            const response = await fetch('mongodb+srv://viniciusjosepereira:nPjlFE38EiPrVfgY@api-cadastro-usuario.unc0z.mongodb.net/?retryWrites=true&w=majority&appName=api-cadastro-usuario', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                alert('Conta criada com sucesso!');
                // Redireciona para a página de login ou outra página
                window.location.href = "index.html";
            } else {
                alert('Erro ao criar conta');
            }
        } catch (error) {
            console.error('Erro:', error);
            alert('Erro ao criar conta');
        }
    }
