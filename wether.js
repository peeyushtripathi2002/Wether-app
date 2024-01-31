// b6a7915de0fb277b0344de21aad8cb4c
// https: //api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
let apikey = 'b6a7915de0fb277b0344de21aad8cb4c'
let inp = document.querySelector('input')
let btn = document.querySelector('button')
let temp = document.querySelector('#temp')
let city = document.querySelector('#city')
btn.addEventListener('click', () => {
    let text = inp.value
    console.log(text, "inp")
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${text}&appid=${apikey}`).then((res) => {
        return res.json()
    }).then((data) => {
        console.log(data)
        fun1(data)
    })
})

function fun1(data) {
    city.innerHTML = data.name
    temp.innerHTML = Math.round(data.main.temp)
}