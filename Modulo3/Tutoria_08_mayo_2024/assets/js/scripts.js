// /* Se Asigna la URL Base de la API 
const urlBase = 'https://mindicador.cl/api';


// Capturamos los Elementos del HTML

const ValorInput = document.querySelector("#montoconvertir");
const unidadCambio = document.querySelector("#monedaSeleccionada");
let myChart = null;


async function ConvertirCambio() {
        convertido.innerHTML="Leyendo Datos...";
        const valorpeso = ValorInput.value;
        const monedaSeleccionada = unidadCambio.value;       
       
        const valorMoneda = await obtenerdatosApi(monedaSeleccionada);
        const valorFinal = (valorpeso/valorMoneda).toFixed(2);    
        convertido.innerHTML="resultado: $"+valorFinal;
}

async function obtenerdatosApi(moneda) {
    try {       
        const result = await fetch(urlBase+"/"+moneda);
        const data = await result.json();
        // Extraemos el atributo serie desde data con un destructring de objeto
        const {serie}=data; // Con el destructuring, se saca el arrglo seria de los datos obtenidos de la API COMPLETA. Dejando Sólo la Serie
        const datos = crearDatos(serie.slice(0,10).reverse(),moneda);
        renderGrafica(datos);
        return serie[0].valor;    
    } catch (error) {
        alert("Error al Obener Datos del Servidor")
        
    }
}




function formatDate(date) {
    date = new Date(date);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${year}-${month}-${day}`;
}



function renderGrafica(data) {
    const config = {
        type:"line",
        data
    }
    const canvas = document.querySelector("#myChart");
    console.log('ENTRO A RENDER');
    canvas.style.backgroundColor="white";
    if (myChart){
        myChart.destroy();
    }    
    myChart=new Chart(canvas,config);

}

function crearDatos(serie,moneda) {
    const labels = serie.map(({fecha})=>formatDate(fecha));
    const data = serie.map(({valor})=>valor);
    const datasets = [
        {
        label: moneda,
        borderColor: "rgb(255, 99, 132)",
        data
        }
        ];
        return { labels, datasets };
}

