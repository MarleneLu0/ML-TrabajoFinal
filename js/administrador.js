const user = JSON.parse(localStorage.getItem('login_success')) || false
if(!user){
    window.location.href = 'login.html'
}

const logout = document.querySelector('#logout')

logout.addEventListener('click', ()=>{
    alert('Hasta pronto!')
    localStorage.removeItem('login_success')
    window.location.href = 'login.html'
});


const URL = 'https://rickandmortyapi.com/api/character'


fetch (URL)
.then (response => response.json())
.then(data => console.log(data))



let contenedor = document.getElementById('contenedorTarjetas');



fetch (URL)
.then (response => response.json())
.then(data => {

const personaje = data.results;
const compras = [];

personaje.forEach(personaje => {

    let card = document.createElement('div');
    card.classList.add('card');
    card.style.width = '18rem';
    card.style.margin = '10px' 

let imagen = document.createElement('img');
imagen.classList.add('card-img-top');
imagen.src = personaje.image;


card.appendChild(imagen);

let contenedorTitulo = document.createElement('div')
contenedorTitulo.classList = 'card-body'

let titulo = document.createElement('h5');
titulo.classList.add('card-title');
titulo.textContent = personaje.name;
titulo.style.textAlign = 'center'

contenedorTitulo.appendChild(titulo);
card.appendChild(contenedorTitulo);

contenedor.appendChild(card);

let boton = document.createElement('button');
boton.classList.add('btn-1');
boton.textContent = 'Comprar'
boton.onclick = function(){
    var response = confirm(`Desea realizar un pedido del personaje ${personaje.name}?`);
    if (response == true)
    alert(`Gracias por realizar tu pedido de ${personaje.name}! A la brevedad nos comunicaremos con usted via email para mas detalles`);
    compras.push(personaje);
    localStorage.setItem('Compra', JSON.stringify(compras));
}

//subimos el contenedot del titulo a la card
card.appendChild(contenedorTitulo);

card.appendChild(boton);

contenedorTarjetas.appendChild(card);
})})