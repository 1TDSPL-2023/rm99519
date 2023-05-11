    function inserenumero(botao,visor){
        const meuBotao = document.getElementById(botao);
        const meuVisor = document.getElementBy(visor);

        meuVisor.value += meuBotao.value;
    }
    function resultado(visor){
        const meuVisor = document.getElementById(visor);
        let armazenadorDeNumeros = [];
        armazenadorDeNumeros =[...meuVisor.value];
        console.log(armazenadorDeNumeros);
    }