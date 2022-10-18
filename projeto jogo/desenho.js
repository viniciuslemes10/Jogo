    var input = document.querySelector("input");
    var tela = document.querySelector('canvas');
    var pincel = tela.getContext('2d');

    pincel.fillStyle = "white";
    pincel.fillRect(0, 0, 1000, 800);

    var desenha = false;
    input.focus();

    function desenhaCirculo(evento) {

        if(desenha) {
            var x = evento.pageX - tela.offsetLeft;
            var y = evento.pageY - tela.offsetTop;
            pincel.fillStyle = input.value;
            pincel.beginPath();
            pincel.arc(x, y, 5, 0, 2 * 3.14);
            pincel.fill();
        }
        console.log(x + ',' + y);
        input.focus();
    }

    tela.onmousemove = desenhaCirculo;

    function habilitaDesenhar() {

        desenha = true;
    }

    function desabilitaDesenhar() {

        desenha = false;
    }

    tela.onmousedown = habilitaDesenhar;

    tela.onmouseup = desabilitaDesenhar;


