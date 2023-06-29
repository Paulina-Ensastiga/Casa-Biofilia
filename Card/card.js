const bloom = [
    {
    id: 1,
    nombre: "Flores del desierto",
    precio: "$300",
    descripcion: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa", 
   
},
{ 
    id: 2,
    nombre: "Ecos del Sol",
    precio:"$300",
    descripcion: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa", 
    
    
},
{
    id: 3,
    nombre: "Belleza Invernal",
    precio: "$300",
    descripcion: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa", 
    
},
{
    id: 4,
    nombre: "Esplendor Eterno",
    precio:"$300",
    descripcion: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa", 
    
},
{
    id: 5,
    nombre: "Armonía en la Sequedad",
    precio:"$300",
    descripcion: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa", 
    
}
];


let card = document.getElementById("card-padre");
bloom.map((x) =>{
    card.innerHTML += `
    <div class="col">
    <div class="card">
      <div class="card-body">
        <h3 class="card-title text-center">${x.nombre}</h3>
        <p class="card-text">${x.descripcion}</p>
        <h4 class = "card-price" text center"> ${x.precio}</h4>
      </div>
    </div>
  </div>
  `;

});