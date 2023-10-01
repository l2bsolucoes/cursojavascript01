/**
 * JS - Aula06: Jogo do Dado
 * @author Leslie Bagalho
 */

var sorteio = Math.floor(Math.random() * 6 + 1);

switch(sorteio){
    case 1:
        document.getElementById("face").src = "/cursojavascript01/05jogodado/img/face1.png";
        break;
    case 2:
        document.getElementById("face").src = "/cursojavascript01/05jogodado/img/face2.png";
        break;
    case 3:
        document.getElementById("face").src = "/cursojavascript01/05jogodado/img/face3.png";
        break;
    case 4:
        document.getElementById("face").src = "/cursojavascript01/05jogodado/img/face4.png";
        break;
    case 5:
        document.getElementById("face").src = "/cursojavascript01/05jogodado/img/face5.png";
        break;
    case 6:
        document.getElementById("face").src = "/cursojavascript01/05jogodado/img/face6.png";
        break;
    default:
        //caso contrario entre com outra funcao
        break;
}