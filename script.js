// Tipo árvore hereditária

// DOM é o html> raiz principal
//     Quem está ligado a raiz principal> 
//     - <head>
//         - <meta>
//         - <meta>
//         - <meta>
//         - <title>
//         - <script>
//     - <body>
//         - <p>

// document.querySelector('p')> para selecionar apenas um elemento> ele retorna, pode salvar em uma variavel
// document.querySelectorAll ('p')> selecionar todos os elemnetos iguais> idem o de cima
// innerHTML> pode adicionar pedaços no html
// document.createElemnet('')> criar elemento, mas não na página
// elementoCriado.innerHTML=
// para adicionar precisa fazer> document.querySelector('div').appendChild(elementoCriado)
// não tem como mexer no css pelo JSON, só no html
// let paragrafo= document.querySelector('p')> paragrafo.style.color= 'yellow'
// add id no paragrafo> paragrafo.id>> paragrafo.id='paragrafo-unico'>>>paragrafo.id=
// para fazer classe> let paragrafo= document.querySelector('p')>> paragrafo.classList.add('classe-1')
// para excluir ou add/alterar a classe> paragrafo.classList.toggle('classe-2')

const botao= document.querySelector('button');
const quadrado = document.querySelector('.quadrado');

const rodarQuadrado= () => {
// a setinha substitui a 'função'
    quadrado.classList.toggle('rodando');
};

botao.onclick = rodarQuadrado;
// target= qual elemento eu cliquei, ex:     console.log(event.target);
// callback= executar no final
// identificar o clique do botão, como é para HTML, é tudo em minusculo
// não colocar parenteses depois do rodarQuadrado pq ele só vai rodar o parenteses