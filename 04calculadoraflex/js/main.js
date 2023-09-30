/**
 * JS - Aula5: Calculadora Flex
 * @author Leslie Bagalho
 */

//alert("teste"); use esse comando para ter certeza de que o JS está funcionando

var etanol, gasolina;

function calcular(){
    /*parseFloat converte o que esta no parenteses em numeros decimais*/
    etanol = parseFloat(frmFlex.txtEtanol.value.replace(",",".")); 
    gasolina = parseFloat(frmFlex.txtGasolina.value.replace(",","."));

    if(etanol < 0.7 * gasolina){
        //verdadeiro
        document.getElementById("status").src="/cursojavascript01/04calculadoraflex/img/etanol.png";
        
    }else{
        //falso
        document.getElementById("status").src="/cursojavascript01/04calculadoraflex/img/gasolina.png";
    }
}

function resetar(){
    document.getElementById("status").src="/cursojavascript01/04calculadoraflex/img/neutro.png";
}