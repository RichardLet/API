const paragraph = document.getElementById('paragraph');
const loadP = document.getElementById('loadP');
const loader = document.getElementsByClassName('lds-roller');
const inputCity = document.getElementById('inputCity');
const btnSearch = document.getElementById('btnSearch');
const nameCountry = document.getElementById('nameCountry');
const city = document.getElementById('city');
const temp = document.getElementById('temp');
const wind = document.getElementById('wind');
const icon = document.getElementsByTagName('img');
const APIKEY = '1563aa91beb0ebfeb7ceb69c0b22a2e9';



const openWeather = async (city) =>{
    const getDataFromAPIWheather = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}`)
    const responseData = await getDataFromAPIWheather.json();
    return responseData;


}

btnSearch.addEventListener('click', () => {
    loader[0].classList.add('show')
    openWeather(inputCity.value)
.then((respuestaDelClima) => {
    loader[0].classList.remove('show');
    loader[0].classList.add('none')
    nameCountry.innerText =  respuestaDelClima.sys.country
    city.innerText =  respuestaDelClima.name 
    temp.innerText = (respuestaDelClima.main.temp - 273.15).toFixed(2) 
    const iconWeather = respuestaDelClima.weather[0].icon;
    icon[0].setAttribute('src', `https://openweathermap.org/img/wn/${iconWeather}@2x.png`)
    
})
.catch((erorr) => console.log(error));
})



/*setTimeout(() => {
    loadP.classList.add('show')
    loader[0].style.display = 'none'    
}, 3000)
*/


