let valor = document.getElementById('inputBuscar');

let btn = document.getElementById('btnBuscar');

btn.addEventListener('click', () => {
    const api = `https://images-api.nasa.gov/search?q=${valor.value}`;
    fetch(api)
    .then(response => response.json())
    .then(data => crearFichas(data));

    function crearFichas(data) {
        const conte = document.getElementById('contenedor');
        conte.innerHTML = '';

        for (let i of data.collection.items) {
            let title = i.data[0].title;
            let desc = i.data[0].description;
            let fecha = i.data[0].date_created;
            let img = i.links[0].href;


            conte.innerHTML += 
            `
            <div class="fichas">
                <div class="imagen">
                    <img src= ${img}></img>
                </div>
                <div class="descDeFicha">
                    <p class="titulo"> ${title} </p>
                    <p class ="descripcion"> ${desc} </p>
                    <p class ="fechas"> ${fecha}</p>
                </div>
            <div>
          `
        }
    }
})





