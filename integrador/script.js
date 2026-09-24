let contas = [];
function salvarConta(){
    /* puxarContas();

    const inputCPF = document.getElementById('inputDoCpf');
    const inputSenha = document.getElementById('inputDaSenha');
    if(inputCPF.value == '' ||  inputSenha.value == ''){
        alert("Digita tudo rapaz");
        return;
    }
    contaSalva = {
        cpf: inputCPF.value,
        senha: inputSenha.value
    }

    contas.push(contaSalva);
    localStorage.setItem('contasSalvas',JSON.stringify(contas)); */
    window.open('http://127.0.0.1:5500/mapa.html');
}

function puxarContas(){
    /* const contasBackup = localStorage.getItem('contasSalvas');
    if(contasBackup==null){
        
    }else{
        contas = JSON.parse(contasBackup);
        
        alert(JSON.stringify(contas));
    } */
   window.open('http://127.0.0.1:5500/mapa.html');
}