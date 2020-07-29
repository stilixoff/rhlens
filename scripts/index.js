const city = document.getElementById('cityIndex');
const btn = document.getElementById('btn-index');

city.onchange = (e) => {
    console.log(e.target.value)
    btn.setAttribute('href', `./city.html?city=${e.target.value}`);
}
