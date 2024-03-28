
function datetimeupdate(){
const defaultDateElement = document.querySelector('.default_date');
console.log(defaultDateElement)
const currentDate = new Date();
const formattedDate = currentDate.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

defaultDateElement.textContent = formattedDate;

console.log(formattedDate.day)

}
datetimeupdate()

 fetch('https://api.openweathermap.org/data/2.5/weather?lat=51.1657&lon=10.4515&appid=b905e71e2578f67f88a2326345d9afab')
.then((response) => {
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
})
.then((data) => {
    console.log(data);

    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=data.main.temp +" C";
    document.querySelector(".HUMIDITY").innerHTML=data.main.humidity +"%";
    document.querySelector(".wind").innerHTML=data.wind.speed +" Km/h";

;
})

