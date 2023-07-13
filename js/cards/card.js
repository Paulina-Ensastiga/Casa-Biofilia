/*Array con objetos, cada array tiene atributos*/ 

const infinity = [
    {
    id: 1,
    img: "/assets/images/CP/INFINITY/Desierto.jpg",
    nombre: "Flores del desierto",
    precio: "$300",
    descripcion: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa", 
   
},

{ 
    id: 2,
    img: "/assets/images/CP/INFINITY/Ecos.jpg",
    nombre: "Ecos del Sol",
    precio:"$300",
    descripcion: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa", 
    
    
},

{
    id: 3,
    img: "/assets/images/CP/INFINITY/Invernal.jpg",
    nombre: "Belleza Invernal",
    precio: "$300",
    descripcion: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa", 
    
},
{
    id: 4,
    img: "/assets/images/CP/INFINITY/Eterno.jpg",
    nombre: "Esplendor Eterno",
    precio:"$300",
    descripcion: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa", 
    
},

{
  id: 5,
  img: "/assets/images/CP/INFINITY/Resplador.jpg",
  nombre: "Resplandor",
  precio:"$300",
  descripcion: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa", 

},
{
  id: 6,
  img: "/assets/images/CP/INFINITY/Res.jpg",
  nombre: "Resplandor Deshidratado",
  precio: "$300",
  descripcion: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa",
},
{
  id: 7,
  img:"/assets/images/CP/INFINITY/Tiempo.jpg",
  nombre: "Ramas del Tiempo",
  precio: "$300",
  descripcion: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa",
},
{
  id: 8,
  img:"/assets/images/CP/INFINITY/Resplandor.jpg",
  nombre: "Florales Resilientes",
  precio: "$300",
  descripcion:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa", 
},
{
  id: 9,
  img:"/assets/images/CP/INFINITY/Des.jpg",
  nombre: "Vida Dormida",
  precio: "$300",
  descripcion: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa", 
},
{
  id: 10,
  img:"/assets/images/CP/INFINITY/Belleza.jpg",
  nombre: "Belleza Invernal",
  precio: "$300",
  descripcion: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa", 
}
];

/*Renderizamos tarjetas */ 

let card = document.getElementById("card-padre");
infinity.map((x) => {
  card.innerHTML += `
   
  <div class="d-flex justify-content-center">  
    <div class="flip-card">
      <div class="flip-card-inner">
        <div class="flip-card-front">
            <img src="${x.img}" alt="Card Front Image">      
        </div>
      <div class= "flip-card-back ">
        <div class="card-body">
        <h2 class="card-title text-center" id=nombreCarta>${x.nombre}</h2>
        <p class="card-text" id=parrafoCarta>${x.descripcion}</p>
        <h4 class = "card-price" id=nombrePrecio> ${x.precio}</h4>
        <div flex "d flex justify-content.center">
        <a href="#" class="btn" id ="btn-comprar" text-center>Comprar Ahora</a>
        </div>
      </div>
      </div>
  </div>
</div></div>

`


});

