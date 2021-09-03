var escolha = document.querySelector("#escolha");
var botao = document.querySelector("#button");

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


        if (evento.target.value == "decode") {
            botao.innerHTML = "Decodificar ";
           
        } else {
            botao.innerHTML = "Codificar";
          
        }
    });
});

function click(){

    if(escolha.value == "cifraC"){
        cifra();
        console.log("tá funcionando")
    }

    else{
        base();
        console.log("tá funcionando")
    }

}


var form =  document.forms.formulario

form.addEventListener('submit', function (evento) {
    evento.preventDefault();

    var texto = form.texto.value;
    var escolha = form.escolha.value;
    var number = form.number.value;
    var rb = form.r1.value;
    var mensagem = '';

    if(escolha == 'cifraC'){
        mensagem = cifra(rb, texto, number);
    }

    else{
        mensagem = base(rb, texto);
    }

    var resposta = document.getElementById('mensagem');
    resposta.innerHTML = `<p>${mensagem}</p>`;

    

    form.texto.focus();
});

/*BASE64*/
function base(r1, texto){
    if(r1 == 'code'){
        return btoa(texto);
    }

    else{
        return atob(texto);
    }
}

/*CIFRA DE CÉSAR*/
function cifra(rb, texto, number){
    number = Number(number);

    var resultado = '';

    for(var i = 0; i < texto.length; i++) {
        var letra = texto[i];
        var code = letra.charCodeAt();

        if (rb == 'code') {
            code += number;
        }

        else{
            code -= number;
        }

        resultado += String.fromCharCode(code);
    }

    return resultado;
}

