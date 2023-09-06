const api = "https://images-api.nasa.gov/";

async function getJSONdata() {
    try {
        const response = await fetch(api);
        const galaxia = await response.json();
        console.log("El fetch se hizo bien");
    } catch(error) {    
        console.log("No se hizo bien el fetch.")
    }
}