//all html elements
const btn = document.getElementsByClassName('btn')
const details = document.querySelector('.details')
const name = document.querySelector(".name")
const desc = document.querySelector(".desc")
const temp = document.querySelector(".temp")
const iconHolder = document.querySelector('.icon')
const input = document.querySelector('#query')

//api key
const key = 'ab24ea35c39a3974135de4fb3f4cb423'

btn.addEventListener("click", (e) => {
    e.preventDefault();
    const query = input.value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
        query
    )}&appid=${api}&units=metric`;
    console.log(url);
    fetch(url)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            const temp = data.main.temp;
            const place = data.name;
            const { description, icon } = data.weather[0];
            const { speed } = data.wind;
            const iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;
            tempC.textContent = `${temp}°C`;
            name.textContent = `${place}`;
            desc.textContent = `${speed}`;
            iconHolder.src = iconUrl;
            details.style.visibility = "visible";
        })
        .catch((err) => alert("Enter valid address!"));

    input.value = "";
});