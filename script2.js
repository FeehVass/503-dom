const botao= document.querySelector('button');
const menuHamburguer = document.querySelector('.quadrado');

const rodarQuadrado= () => {
// a setinha substitui a 'função'
    quadrado.classList.toggle('rodando');
};

botao.onclick = rodarQuadrado;