function toFahrenheit(celsius) {
    let tempFahrenheit = ((1.8) * celsius + 32);
    arrayInicialCelsius.push(new Temperatura(celsius, '°C', 'a', tempFahrenheit, '°F'))
    relacionTemperaturaFahrenheit(tempFahrenheit)
    return arrayInicialCelsius;
}
function toCelsius(fahrenheit) {
    let tempCelcius = ((fahrenheit - 32) / 1.8);
    arrayInicialFahrenheit.push(new Temperatura(fahrenheit, '°F', 'a', tempCelcius, '°C'))
    relacionTemperaturaCelcius(tempCelcius);
}
function toKelvin1(celsius) {
    let tempKelvin = celsius + 273.15;
    arrayInicialKelvin.push(new Temperatura(celsius, '°C', 'a', tempKelvin, '°K'))
    return arrayInicialKelvin;
}
 function toKelvin2(fahrenheit) {
    let tempKelvin = ((fahrenheit - 32) / 1.8) + 273.15;
    arrayInicialKelvin2.push(new Temperatura(fahrenheit, '°F', 'a', tempKelvin, '°K'))
    return arrayInicialKelvin2;
}

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
function relacionTemperaturaCelcius(celsius) {
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
}

class Temperatura {
    constructor(temperatura1, tipo1, conector, temperatura2, tipo2) {
        this.temperaturaOriginal = temperatura1;
        this.tipo1 = tipo1;
        this.conector = conector;
        this.temperaturaConvertida = temperatura2;
        this.tipo2 = tipo2;
    }
}
const arrayInicialCelsius = []
const arrayInicialFahrenheit = []
const arrayInicialFahrenheit2 = []
const arrayInicialKelvin = []
const arrayInicialKelvin2 = []
let inputText;
let inputText2;
let temperaturaCentigrados;
let temperaturaFahrenheit;
let temperaturaKelvin;
let borrar;

const dataCelsius = document.getElementById('formularioCelsius');
const dataFahrenheit = document.getElementById('formularioFahrenheit');
const dataKelvin = document.getElementById('formularioKelvin');

dataCelsius.addEventListener('submit', (e) => {
    e.preventDefault();

    temperaturaCentigrados = document.getElementById('gradosCentigrados').value;
    inputText = parseInt(temperaturaCentigrados)

    toFahrenheit(inputText)
    toKelvin1(inputText)
    // const unionArrays = arrayInicialCelcius.concat(arrayInicialFahrenheit)
    // const unionArrays2 = unionArrays.concat(arrayInicialKelvin)
    // console.log(unionArrays2)

    const enJsonCelsius = JSON.stringify(arrayInicialCelsius)
    localStorage.setItem('arrayCelsius', enJsonCelsius)

    const enJsonKelvin1 = JSON.stringify(arrayInicialKelvin)
    localStorage.setItem('arrayKelvin1', enJsonKelvin1)

    const storageCelcius = JSON.parse(localStorage.getItem('arrayCelsius'))
    createTableCelsius(storageCelcius)
    const storageKelvin1 = JSON.parse(localStorage.getItem('arrayKelvin1'))
    createTableKelvin(storageKelvin1)
})

const createTableCelsius = (storage) => {
    const tableBody = document.getElementById('tablaResultadoFahrenheit')
    const container = document.createElement('tbody')

    tableBody.innerHTML = '';

    storage.forEach(tempY => {
        container.innerHTML += `
        <tr value="${tempY.temperaturaOriginal}">
            <td>${tempY.temperaturaOriginal}</td>
            <td>${tempY.tipo1}</td>
            <td>${tempY.conector}</td>
            <td>${tempY.temperaturaConvertida}</td>
            <td>${tempY.tipo2}</td>
            <td><button type="delete" class="btn btn-danger" value="${tempY.temperaturaOriginal}">Borrar</button>
        </tr>
        `;
        tableBody.appendChild(container);
    });
    dataCelsius.reset();
    tableBody.addEventListener('click', (e) => {
        deleteTempCelsius(e.target.value)
    })
}

const createTableKelvin = (storage) => {
    const tableBody = document.getElementById('tablaResultadoKelvin')
    const container = document.createElement('tbody')

    tableBody.innerHTML = '';

    storage.forEach(tempY => {
        container.innerHTML += `
        <tr>
            <td>${tempY.temperaturaOriginal}</td>
            <td>${tempY.tipo1}</td>
            <td>${tempY.conector}</td>
            <td>${tempY.temperaturaConvertida}</td>
            <td>${tempY.tipo2}</td>
            <td><button type="delete" class="btn btn-danger" value="${tempY.temperaturaOriginal}">Borrar</button>
        </tr>
        `;
        tableBody.appendChild(container);
    });
    dataCelsius.reset();
    tableBody.addEventListener('click', (e) => {
        deleteTemKelvin(e.target.value)
    })
}

const deleteTempCelsius = (tempCel) => {
    arrayInicialCelsius.forEach((storage, index) => {
        if (storage.temperaturaOriginal == tempCel) {
            arrayInicialCelsius.splice(index, 1);
        }
    });
    createTableCelsius(arrayInicialCelsius);
}

const deleteTemKelvin = (tempKelvin) => {
    arrayInicialKelvin.forEach((storage, index) => {
        if (storage.temperaturaOriginal == tempKelvin) {
            arrayInicialKelvin.splice(index, 1);
        }
    });
    createTableKelvin(arrayInicialKelvin);
}

dataFahrenheit.addEventListener('submit', (e) => {
    e.preventDefault();

    temperaturaFahrenheit = document.getElementById('gradosFahrenheit').value;
    inputText2 = parseInt(temperaturaFahrenheit)

    toCelsius(inputText2)
    toKelvin2(inputText2)
    // const unionArrays = arrayInicialCelcius.concat(arrayInicialFahrenheit)
    // const unionArrays2 = unionArrays.concat(arrayInicialKelvin)
    // console.log(unionArrays2)

    const enJsonFahrenheit = JSON.stringify(arrayInicialFahrenheit)
    localStorage.setItem('arrayFahrenheit', enJsonFahrenheit)

    const enJsonKelvin2 = JSON.stringify(arrayInicialKelvin2)
    localStorage.setItem('arrayKelvin2', enJsonKelvin2)

    const storageFahrenheit = JSON.parse(localStorage.getItem('arrayFahrenheit'))
    createTableFahrenheit(storageFahrenheit)
    const storageKelvin2 = JSON.parse(localStorage.getItem('arrayKelvin2'))
    createTableKelvin2(storageKelvin2)
})

const createTableFahrenheit = (storage2) => {
    const tableBody2 = document.getElementById('tablaResultadoCelsius')
    const container2 = document.createElement('tbody')

    tableBody2.innerHTML = '';

    storage2.forEach(tempW => {
        container2.innerHTML += `
        <tr value="${tempW.temperaturaOriginal}">
            <td>${tempW.temperaturaOriginal}</td>
            <td>${tempW.tipo1}</td>
            <td>${tempW.conector}</td>
            <td>${tempW.temperaturaConvertida}</td>
            <td>${tempW.tipo2}</td>
            <td><button type="delete" class="btn btn-danger" value="${tempW.temperaturaOriginal}">Borrar</button>
        </tr>
        `;
        tableBody2.appendChild(container2);
    });
    dataFahrenheit.reset();
    tableBody2.addEventListener('click', (e) => {
        deleteTempFahrenheit(e.target.value)
    })
}

const createTableKelvin2 = (storage2) => {
    const tableBody = document.getElementById('tablaResultadoKelvin2')
    const container = document.createElement('tbody')

    tableBody.innerHTML = '';

    storage2.forEach(tempW => {
        container.innerHTML += `
        <tr>
            <td>${tempW.temperaturaOriginal}</td>
            <td>${tempW.tipo1}</td>
            <td>${tempW.conector}</td>
            <td>${tempW.temperaturaConvertida}</td>
            <td>${tempW.tipo2}</td>
            <td><button type="delete" class="btn btn-danger" value="${tempW.temperaturaOriginal}">Borrar</button>
        </tr>
        `;
        tableBody.appendChild(container);
    });
    dataFahrenheit.reset();
    tableBody.addEventListener('click', (e) => {
        deleteTemKelvin2(e.target.value)
    })
}

const deleteTempFahrenheit = (tempFahrenheit) => {
    arrayInicialFahrenheit.forEach((storage2, index) => {
        if (storage2.temperaturaOriginal == tempFahrenheit) {
            arrayInicialFahrenheit.splice(index, 1);
        }
    });
    createTableFahrenheit(arrayInicialFahrenheit);
}

const deleteTemKelvin2 = (tempKelvin2) => {
    arrayInicialKelvin.forEach((storage2, index) => {
        if (storage2.temperaturaOriginal == tempKelvin2) {
            arrayInicialKelvin.splice(index, 1);
        }
    });
    createTableKelvin2(arrayInicialKelvin);
}
