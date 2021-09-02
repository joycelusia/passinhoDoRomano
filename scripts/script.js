var escolha = document.querySelector("#escolha");

escolha.addEventListener("change", function (evento) {
    evento.preventDefault();

    var hide = document.getElementById("hide");

        if (evento.target.value == "cifraC") {
            hide.style.display = "block";
        } 
        else {
            hide.style.display = "none";
        }
});


var rb= document.querySelectorAll('input[name="r1"]');

rb.forEach((radio) => {
    radio.addEventListener("change", function (evento) {
        evento.preventDefault();

        var botao = document.querySelector("button");

        if (evento.target.value == "decode") {
            botao.innerHTML = "Decodificar ";
        } else {
            botao.innerHTML = "Codificar";
        }
    });
});


var form = document.forms.formContainer

form.addEventListener('submit', function (evento) {
    evento.preventDefault();

    var texto = form.texto.value;
    var escolha = form.selecionar.value;
    var number = form.number.value;
    var rb = form.r1.value;
    var mensagem = '';

    if(escolha == 'cifraC'){
        mensagem = cifra(rb, texto, number);
    }

    else{
        mensagem = base(rb, mensagem);
    }

    var resposta = document.getElementById('mensagem');
    resposta.innerHTML = `${mensagem}`;

    

    form.texto.focus();
});

/*BASE64*/
function base(rb, texto){
    if(rb == 'code'){
        return btoa(texto);
    }

    else{
        return atob(texto);
    }
}

function cifra(rb, texto, number){
    number = Number(number);

    var resultado = '';

    for(var i = 0; i < texto.length; i++) {
        var letra = texto[i];
        var code = letra.charCodeAt();

        if (botoes == 'codificar') {
            code += number;
        }

        else{
            code -= number;
        }

        resultado += String.fromCharCode(codigo);
    }

    return resultado;
}

