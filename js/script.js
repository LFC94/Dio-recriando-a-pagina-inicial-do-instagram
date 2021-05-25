function changeSenha(e) {
    senha = document.getElementById('senha');
    bt_entrar = document.getElementById('btn_entrar');
    if(senha.value.length >= 6){
        bt_entrar.classList.add("btn-entrar-liberado");
        bt_entrar.disabled = false; 
    }else{
        bt_entrar.classList.remove("btn-entrar-liberado");
        bt_entrar.disabled = true; 
    }
}