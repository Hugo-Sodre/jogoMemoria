
function geraDiv() {
    var seletores = document.getElementById("seletor");
    var option = seletores.options[seletores.selectedIndex];
    console.log(option.value);
    
    var valor = option.value;
    var v2 = valor /2;

    var divisoes = document.getElementById('geral')    
    
    var conteudo = "";
    var cont = 1;
    
    // For Linha
    
    for(var i = 0; i < 2 ; i++){
        conteudo += '<div class="linha divs2">'
        // For colunas
        for(var j = 0; j < v2; j++){
            conteudo += '<div class="celula divs2" id="'+cont+'"></div>'
            cont++
        }
        conteudo += '</div>'
        divisoes.innerHTML = conteudo
    }

    console.log(conteudo)
}

function embaralha(){
    
}