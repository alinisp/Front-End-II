/*const titulo = document.querySelector('h1');

console.log(titulo.innerHTML)
console.log(titulo.innerText)
console.log(titulo.textContent)

titulo.textContent = 'Meu novo parágrafo'*/

const body = document.querySelector('body');
const titulo = document.querySelector('h1');
titulo.remove();


const ancora = document.createElement('a');

ancora.setAttribute('href', 'https://www.ifro.edu.br');
ancora.setAttribute('target','_blank');
ancora.textContent = 'IFRO';

ancora.style.color = '#f00';
ancora.style.textDecoration = 'none';
ancora.style.fontWeight = 'bold';

body.appendChild(ancora);

const lista = document.createElement('ul');
const item1 = document.createElement('li');
const item2 = document.createElement('li');
const item3 = document.createElement('li');
item1.textContent = 'item-1';
item2.textContent = 'item-2';
item3.textContent = 'item-3';
lista.append(item1);
lista.append(item2);
lista.append(item3);
body.append(lista);