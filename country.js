let search = document.querySelector("#search");
let submit = document.querySelector("#submit");
let img = document.querySelector("#img");
let countrynm = document.querySelector("#countryname");
let Capital = document.querySelector("#Capital");
let Continent = document.querySelector("#Continent");
let Population = document.querySelector("#Population");
let Currency = document.querySelector("#Currency");
let Languages = document.querySelector("#Languages");

async function fectdata(countryname) {
    try {
        let response = await fetch(`https://restcountries.com/v3.1/name/${countryname}?fullText=true`);
        let data = await response.json();
        return data
    } catch (error) {
        console.log(error)
    }

}

submit.addEventListener('click', async function () {
    let countryname=search.value;
 
    let fulldata = await fectdata(countryname);
    console.log(fulldata[0])
    img.src=fulldata[0].flags.png;
    countrynm.innerHTML = fulldata[0].name.common;
    Capital.innerHTML = fulldata[0].capital;
    Continent.innerHTML = fulldata[0].continents[0];
    Population.innerHTML = fulldata[0].population;
    Languages.innerHTML = Object.values(fulldata[0].languages).toString().split(",").join(",")
    Currency.innerHTML=Object.keys(fulldata[0].currencies)[0];
    Currency.innerHTML = fulldata[0].currencies[Object.keys(fulldata[0])].name;
   
    console.log(fulldata[0])
})
