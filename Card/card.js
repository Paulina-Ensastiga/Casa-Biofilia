const bloom = [
    {
    id: 1,
    img: "./assets",
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
    
},
{
  id: 6,
  nombre: "Resplandor Deshidratado",
  url: "https://hips.hearstapps.com/hmg-prod/images/plantas-de-interior-resistentes-2-1543351859.jpg?crop=1xw:1xh;center,top&resize=980:*",
  precio: 300,
  descripcion: "Lorem Ipsum is simply dummy tex",
},
{
  id: 7,
  nombre: "Ramas del Tiempo",
  url: "https://hips.hearstapps.com/hmg-prod/images/garden-croton-or-variegated-croton-euphorbiaceae-news-photo-1670849839.jpg?crop=1xw:1xh;center,top&resize=980:*",
  precio: 300,
  descripcion: "Lorem Ipsum is simply dummy tex"
},
{
  id: 8,
  nombre: "Florales Resilientes",
  url: "https://hips.hearstapps.com/hmg-prod/images/helecho-natural-1631189259.png?crop=1xw:1xh;center,top&resize=980:*",
  precio: 300,
  descripcion: "Lorem Ipsum is simply dummy tex"
},
{
  id: 9,
  nombre: "Vida Dormida",
  url: "https://hips.hearstapps.com/hmg-prod/images/echeveria-flower-arrangement-news-photo-1670855481.jpg?crop=1xw:1xh;center,top&resize=980:*",
  precio: 300,
  descripcion: "Lorem Ipsum is simply dummy tex"
},
{
  id: 10,
  nombre: "Belleza Invernal",
  url: "https://como-plantar.com/wp-content/uploads/2021/09/cuidar-y-cultivar-Echeveria-Peacockii.jpg.webp",
  precio: 300,
  descripcion: "Lorem Ipsum is simply dummy tex"
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