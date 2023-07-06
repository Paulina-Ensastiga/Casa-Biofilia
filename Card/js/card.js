const infinity = [
    {
    id: 1,
    img: "/aseets/CP/INFINITY/Desierto.jpg",
    nombre: "Flores del desierto",
    precio: "$300",
    descripcion: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa", 
   
},
{ 
    id: 2,
    img: "/aseets/CP/INFINITY/Ecos.jpg",
    nombre: "Ecos del Sol",
    precio:"$300",
    descripcion: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa", 
    
    
},


{
    id: 3,
    img: "/aseets/CP/INFINITY/Invernal.jpg",
    nombre: "Belleza Invernal",
    precio: "$300",
    descripcion: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa", 
    
},
{
    id: 4,
    img: "/aseets/CP/INFINITY/Eterno.jpg",
    nombre: "Esplendor Eterno",
    precio:"$300",
    descripcion: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa", 
    
},

{
  id: 5,
  img: "/aseets/CP/INFINITY/Resplandor.jpg",
  nombre: "Resplandor",
  precio:"$300",
  descripcion: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa", 

},

{
  id: 6,
  img: "/aseets/CJ/INFINITY/Des.jpg",
  nombre: "Resplandor Deshidratado",
  precio: "$300",
  descripcion: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa",
},
{
  id: 7,
  img:"/aseets/CJ/INFINITY/Tiempo.jpg",
  nombre: "Ramas del Tiempo",
  precio: "$300",
  descripcion: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa",
},
{
  id: 8,
  img:"/aseets/CJ/INFINITY/Res.jpg",
  nombre: "Florales Resilientes",
  precio: "$300",
  descripcion:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa", 
},
{
  id: 9,
  img:"/aseets/CJ/INFINITY/Resplador.jpg",
  nombre: "Vida Dormida",
  precio: "$300",
  descripcion: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa", 
},
{
  id: 10,
  img:"/aseets/CJ/INFINITY/Belleza.jpg",
  nombre: "Belleza Invernal",
  precio: "$300",
  descripcion: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa", 
}
];

let card = document.getElementById("card-padre");
infinity.map((x) => {
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

  /*
  <div class="row">
                    <div class="col-4">
                        <div class="col-12">
                            <div class="flip-card">
                                <div class="flip-card-inner">
                                  <div class="flip-card-front">
                                    <img src= "${x.img}" class="card-img-top"/>
                                  </div>
                                  <div class="flip-card-back">
                                    <h2 class="card-title text-center">${x.nombre}</h2>
                                    <p class="card-text">${x.descripcion}</p>
                                    <h4 class = "card-price" text center"> ${x.precio}</h4>
                                    <div class="btn-comprar">
                                    <a href="#" class="btn" id="btn-compra">Comprar Ahora </a>
                                    </div
                                  </div>
                                </div>
                              </div>
                        </div>
                      </div>
                    </div> */

                    /*
                        <div class="flip-card">
    <div class="flip-card-inner">
      <div class="flip-card-front">
        <img src=${x.img} alt="Card Front Image">
      </div>
      <div class="flip-card-back">
        <div class="card-content">
          <h2>${x.nombre}</h2>
          <p>${x.descripcion}</p>
          <p> ${x.precio}</p>
          <a href="#" class="btn">Comprar Ahora</a>
        </div>
      </div>
    </div>
</div>
*/



/*$(document).ready(function() {
    $('.menu-bar').on('mouseenter', function() {
    $('.search-bar').show();
    });
    $('.menu-bar').on('mouseleave', function() {
    $('.search-bar').hide();
    });
});
*/

