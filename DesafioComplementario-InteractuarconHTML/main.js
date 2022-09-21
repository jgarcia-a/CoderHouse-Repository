function toFahrenheit(celsius) {
    let tempFahrenheit = ((1.8) * celsius + 32);
    arrayInicialCelcius.push(new Temperatura(celsius, '°C', 'a', tempFahrenheit, '°F'))
    relacionTemperaturaFahrenheit(tempFahrenheit)
}
/* function toCelsius(fahrenheit) {
    let tempCelcius = ((fahrenheit - 32) / 1.8);
    arrayInicialFahrenheit.push(new Temperatura(fahrenheit, '°F', 'a', tempCelcius, '°C'))
    relacionTemperaturaCelcius(tempCelcius);
} */
function toKelvin1(celsius) {
    let tempKelvin = celsius + 273.15;
    arrayInicialKelvin.push(new Temperatura(celsius, '°C', 'a', tempKelvin, '°K'))
}
/* function toKelvin2(fahrenheit) {
    let tempKelvin = ((fahrenheit - 32) / 1.8) + 273.15;
    arrayInicialKelvin.push(new Temperatura(fahrenheit, '°F', 'a', tempKelvin, '°K'))
} */

function relacionTemperaturaFahrenheit(fahrenheit) {
    if (fahrenheit < 32) {
        alert('la temperatura ' + inputText + ' °C en °F es: ' + fahrenheit + '  DEMASIADO BAJA ******')
    }
    if (fahrenheit == 32) {
        alert('la temperatura ' + inputText + ' °C  en °F es: ' + fahrenheit + ' *** Cero Absoluto ***')
    }
    if ((fahrenheit > 32) && (fahrenheit < 64)) {
        alert('la temperatura ' + inputText + ' °C  en °F es: ' + fahrenheit + ' Temperatura Baja')
    }
    if ((fahrenheit >= 64) && (fahrenheit < 100)) {
        alert('la temperatura ' + inputText + ' °C  en °F es: ' + fahrenheit + '  Temperatura Media')
    }
    if ((fahrenheit >= 100) && (fahrenheit <= 128)) {
        alert('la temperatura ' + inputText + ' °C  en °F es: ' + fahrenheit + '  Temperatura Alta')
    }
    if (fahrenheit > 128) {
        alert('la temperatura ' + inputText + ' °C  en °F es: ' + fahrenheit + '  DEMASIADO ALTA')
    }
}
/* function relacionTemperaturaCelcius(celsius) {
    if (celsius < 0) {
        alert('la temperatura en °C es: ' + celsius + '  DEMASIADO BAJA ******')
    }
    if (celsius == 0) {
        alert('la temperatura en °C es: ' + celsius + ' *** Cero Absoluto ***')
    }
    if ((celsius > 0) && (celsius < 32)) {
        alert('la temperatura en °C es: ' + celsius + ' Temperatura Baja')
    }
    if ((celsius >= 32) && (celsius < 68)) {
        alert('la temperatura en °C es: ' + celsius + '  Temperatura Media')
    }
    if ((celsius >= 68) && (celsius <= 96)) {
        alert('la temperatura en °C es: ' + celsius + '  Temperatura Alta')
    }
    if (celsius > 96) {
        alert('la temperatura en °C es: ' + celsius + '  DEMASIADO ALTA')
    }
} */

class Temperatura {
    constructor(temperatura1, tipo1, conector, temperatura2, tipo2) {
        this.temperaturaOriginal = temperatura1;
        this.tipo1 = tipo1;
        this.conector = conector;
        this.temperaturaConvertida = temperatura2;
        this.tipo2 = tipo2;
    }
}
const arrayInicialCelcius = []
const arrayInicialFahrenheit = []
const arrayInicialKelvin = []
const selector1 = document.getElementsByClassName('list-group-item list-group-item-item-info')
console.log(selector1);

let temp = selector1
let inputText
for (let i = 0; i < temp.length; i++) {
    inputText = parseInt(temp[i].innerHTML)
    toFahrenheit(inputText)
    toKelvin1(inputText)
}

alert('Conversiones terminadas!')
console.log(arrayInicialCelcius)
console.log(arrayInicialFahrenheit)
console.log(arrayInicialKelvin)

const unionArrays = arrayInicialCelcius.concat(arrayInicialFahrenheit)
const unionArrays2 = unionArrays.concat(arrayInicialKelvin)
console.log(unionArrays2)

for (const temperatura of unionArrays2) {
    let tableBody = document.getElementById('tablaResultado')
    let container = document.createElement('tbody')
    container.innerHTML = `
        <tr>
            <td>${temperatura.temperaturaOriginal}</td>
            <td>${temperatura.tipo1}</td>
            <td>${temperatura.temperaturaConvertida}</td>
            <td>${temperatura.tipo2}</td>
        </tr>
    `;
    tableBody.innerHTML += container.innerHTML;
    //document.body.appendChild(container);
}