const homede = [
    {
    id: 1,
    img: "/aseets/CP/HOMEDE/home-1.png",
    nombre: "Flores del desierto",
    precio: "$300",
    descripcion: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa", 
   
},
{ 
    id: 2,
    img: "/aseets/CP/HOMEDE/home-8.png",
    nombre: "Ecos del Sol",
    precio:"$300",
    descripcion: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa", 
    
    
},
{
    id: 3,
    img: "/aseets/CP/HOMEDE/home-10.png",
    nombre: "Belleza Invernal",
    precio: "$300",
    descripcion: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa", 
    
},
{
    id: 4,
    img: "/aseets/CP/HOMEDE/home-4.png",
    nombre: "Esplendor Eterno",
    precio:"$300",
    descripcion: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa", 
    
},
{
  id: 5,
  img: "/aseets/CP/HOMEDE/home-5.png",
  nombre: "Resplandor",
  precio:"$300",
  descripcion: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa", 

},
{
    id: 6,
    img: "/aseets/CP/HOMEDE/home-6.png",
    nombre: "Resplandor",
    precio:"$300",
    descripcion: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa", 
  },
  {
    id: 7,
    img: "/aseets/CP/HOMEDE/home-7.png",
    nombre: "Resplandor",
    precio:"$300",
    descripcion: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa", 
  },
  {
    id: 7,
    img: "/aseets/CP/HOMEDE/home-9.png",
    nombre: "Resplandor",
    precio:"$300",
    descripcion: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa", 
  },



];

let card = document.getElementById("card-padre");
homede.map((x) => {
  card.innerHTML += `
   
  <div class="d-flex justify-content-center" > 
    <div class="flip-card">
      <div class="flip-card-inner">
        <div class="flip-card-front">
            <img src="${x.img}" alt="Card Front Image">   
        </div>
      <div class= "flip-card-back">
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

