const bloom = [
    {
    id: 1,
    img: "/aseets/CP/BLOOM/Euforia.png",
    nombre: "Euforia Floral",
    precio: "$300",
    descripcion: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa", 
   
  },
  { 
    id: 2,
    img: "/aseets/CP/BLOOM/Silvestre.png",
    nombre: "Ramo Silvestre",
    precio:"$300",
    descripcion: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa", 
    
    
  },
  {
    id: 3,
    img: "/aseets/CP/BLOOM/Esencia.png",
    nombre: "Esencia Primavera",
    precio: "$300",
    descripcion: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa", 
    
  },
  {
    id: 4,
    img: "/aseets/CP/BLOOM/Frescura.png",
    nombre: "Frescura Floral",
    precio:"$300",
    descripcion: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa", 
    
  },
  {
    id: 5,
    img: "/aseets/CP/BLOOM/bloom-1.png",
    nombre: "Frescura Floral",
    precio:"$300",
    descripcion: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa", 
    
  },
  {
    id: 6,
    img: "/aseets/CP/BLOOM/bloom-2.png",
    nombre: "Frescura Floral",
    precio:"$300",
    descripcion: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa", 
    
  },

  ];
  
  let card = document.getElementById("card-padre");
  bloom.map((x) => {
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