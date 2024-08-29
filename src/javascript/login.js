async function login() {
    //Capturando os dados do formulário

    const data = {
        email: document.getElementById('email').value,
        password: document.getElementById('password').value 
    };

    try {
        const response = await fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'

            },
            body: JSON.stringify(data),
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
    
