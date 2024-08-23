async function criarConta() {
    const email = document.querySelector('input[name="email"]').value;
    const user = document.querySelector('input[name="usuario"]').value;
    const password = document.querySelector('input[name="senha"]').value;

    const data = {
        email: email,
        user: user,
        password: password
    };

    try {
        const response = await fetch('http://localhost:3000/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (response.ok) {
            alert('Conta criada com sucesso!');
            window.location.href = "index.html";
        } else {
            alert('Erro ao criar conta');
        }
    } catch (error) {
        console.error('Erro:', error);
        alert('Erro ao criar conta');
    }
}