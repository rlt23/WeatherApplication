window.addEventListener('load', ()=>{
    let long;
    let lat;
    let temperatureDescription = document.querySelector('.temperature-description');
    let temperatureDegree = document.querySelector(".temperature-degree");
    let locationTimezone = document.querySelector(".temperature-locationTimezone");

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position =>{
            long = position.coords.longitude;
            lat = position.coords.latitude;

            //const proxy = 'https://cors-anywhere.herokuapp.com/';
            const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=fbd49789757967d73726f939ba800cda`;


            fetch(api)
            .then(response => {
                return response.json();
            })
            .then(data =>{
                console.log(data);
                const{feels_like, temp_min} = data.main;
                //set DOM elements from the API

                temperatureDegree.textContent = (feels_like*9/5)+32;
                temperatureDescription.textContent = (temp_min*9/5)+32;
            });
        });
    }
});