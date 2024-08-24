function logar(){

    var login = document.getElementById('login').value;
    var pass = document.getElementById('pass').value;
    
    if(login == 'vinicius' && pass == '123'){
        location.href = "profile.html";

    }else{
        alert('ERRO!')
    }
}