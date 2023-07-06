const pots = [
  {
  id: 1,
  img: "/aseets/CP/POTS/Pots-2.png",
  nombre: "Maceta de cerámica blanca",
  precio: "$250",
  descripcion: "Maceta clásica de cerámica en color blanco, ideal para albergar plantas de interior y añadir un toque de elegancia a cualquier espacio."
},
{ 
  id: 2,
  img: "/aseets/CP/POTS/Pots-2.jpg",
  nombre: "Maceta tejida de cuerda:",
  precio:"$300",
  descripcion: "Una maceta confeccionada a mano utilizando técnicas de tejido con cuerda. Perfecta para realzar plantas de interior y añadir calidez a tu hogar."
},
{
  id: 3,
  img: "/aseets/CP/POTS/Pots-3.jpg",
  nombre: "Maceta de cemento moderna",
  precio: "$300",
  descripcion: "Una maceta de cemento en tono gris con un diseño contemporáneo. Ideal para plantas de interior con un estilo minimalista y urbano."
  
},
{
  id: 4,
  img: "/aseets/CP/POTS/Pots-4.jpg",
  nombre: "Maceta en forma de tetera alargada",
  precio:"$300",
  descripcion: "Una maceta única en forma de tetera alargada, perfecta para añadir un toque de originalidad a tu jardín o patio. Ideal para plantas suculentas y pequeños arbustos." 
  
},
{
  id: 5,
  img: "/aseets/CP/POTS/Pots-5.jpg",
  nombre: "Maceta tradicional azul pequeña",
  precio:"$300",
  descripcion: "Una maceta tradicional en color azul de tamaño reducido, ideal para plantas pequeñas y suculentas. Añade un toque de color y encanto a tus espacios." 
  
},
{
  id: 6,
  img: "/aseets/CP/POTS/Pots-2.jpg",
  nombre: "Maceta tradicional azul pequeña",
  precio:"$300",
  descripcion: "Una maceta tradicional en color azul de tamaño reducido, ideal para plantas pequeñas y suculentas. Añade un toque de color y encanto a tus espacios.", 
  
}
];

let card = document.getElementById("card-padre");
pots.map((x) => {
card.innerHTML += `
 
<div class="d-flex justify-content-center" > 
  <div class="flip-card">
    <div class="flip-card-inner">
      <div class="flip-card-front">
          <img src="${x.img}" alt="Card Front Image">   
      </div>
    <div class= "flip-card-back">
      <div class="card-body">
      <h2 class="card-title text-center">${x.nombre}</h2>
      <p class="card-text">${x.descripcion}</p>
      <h4 class = "card-price"> ${x.precio}</h4>
      <div flex "d flex justify-content.center">
      <a href="#" class="btn"  id ="btn-comprar" text-center>Comprar Ahora </a>
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