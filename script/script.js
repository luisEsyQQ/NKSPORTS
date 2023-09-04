const botaoComprar = $("#btn");



botaoComprar.on('click', comprar)

function comprar(){
    const iptTamanho = document.querySelector(".ipt").value;
    const compraRealizada = $("#adicionarCarrinho");
    console.log(iptTamanho)
    if(iptTamanho === "Escolha uma opção"){
        window.alert("Por favor insira um tamanho válido")
    }else{
        compraRealizada.slideToggle(300);
    }
}