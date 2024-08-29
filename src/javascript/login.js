async function login() {
    //Capturando os dados do formulário

    const email = document.querySelector('input[name="email"]').value;
    const password = document.querySelector('input[name="password"]').value;

    const data = {
        email: email,
        password: password,
    };

    try {
        const response = await fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/jason'

            },
            body: JSON.stringify({ email, password}),
        });

        if(response.ok) {
            alert('Login bem-sucedido');
            //Redirecionar para o perfil do usuario
            window.location.href = "profile.html";

        } else {
            const errorMessage = await response.text();
            alert(`Erro: ${errorMessage}`);
            
        }
    
        } catch (error) {
            console.error('Erro:', error);
            alert('Erro ao realizar login');
        }
    }
    
