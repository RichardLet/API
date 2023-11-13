const paragraph = document.getElementById('paragraph');
const loadP = document.getElementById('loadP');
const loader = document.getElementsByClassName('lds-roller');
const APIKEY = '1563aa91beb0ebfeb7ceb69c0b22a2e9'
console.log(loader);

/*setTimeout(() => {
    loadP.classList.add('show')
    loader[0].style.display = 'none'    
}, 3000)*/

const openWeather = async (city) =>{
    const getDataFromAPIWheather = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}`)
    const responseData = await getDataFromAPIWheather.json();
    return responseData;


}

openWeather('london')
.then((respuestaDelClima) => {
    console.log(respuestaDelClima);
})
.catch((erorr) => console.log(error));