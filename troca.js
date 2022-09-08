// Criar duas funções 

// 1° tranformar backgrund do BODY para WHITE, mudar textos com js;
var back = window.document.getElementById('back')
var titulo = window.document.getElementById('titulo')
var but = window.document.getElementById('but')

function white() {
  back.style.backgroundColor = '#FFFFFF';
  titulo.style.color = '#000000';
  but.style.backgroundColor = '#000000';
  but.style.boxShadow = '0px 0px 5px 1px #000000';
  but.style.color = '#FFFFFF';
  but.innerHTML = `BLACK`;
  but.setAttribute('onclick', "black()");
}
// 2° tranformar backgrund do BODY para BLACK, mudar textos com js;
function black() {
  back.style.backgroundColor = '#000000';
  titulo.style.color = '#FFFFFF';
  but.style.backgroundColor = '#FFFFFF';
  but.style.boxShadow = '0px 0px 5px 1px #FFFFFF';
  but.style.color = '#000000';
  but.innerHTML = `WHITE`
  but.setAttribute('onclick', "white()");
}

// 3° pensar na estrutura de mensagens por meio do banco de dados;
