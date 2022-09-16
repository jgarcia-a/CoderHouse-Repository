function toFahrenheit(celsius) {
    let tempFahrenheit = ((1.8) * celsius + 32);
    arrayInicialCelcius.push(new Temperatura(celsius, '°C', 'a', tempFahrenheit, '°F'))
    relacionTemperaturaFahrenheit(tempFahrenheit)
}
function toCelsius(fahrenheit) {
    let tempCelcius = ((fahrenheit - 32) / 1.8);
    arrayInicialFahrenheit.push(new Temperatura(fahrenheit, '°F', 'a', tempCelcius, '°C'))
    relacionTemperaturaCelcius(tempCelcius);
}
function toKelvin1(celsius){
    let tempKelvin = celsius + 273.15;
    arrayInicialKelvin.push(new Temperatura(celsius, '°C', 'a', tempKelvin, '°K'))
}
function toKelvin2(fahrenheit){
    let tempKelvin = ((fahrenheit - 32) / 1.8) + 273.15;
    arrayInicialKelvin.push(new Temperatura(fahrenheit, '°F', 'a', tempKelvin, '°K'))
}

function relacionTemperaturaFahrenheit(fahrenheit) {
    if (fahrenheit < 32) {
        alert('la temperatura en °F es: ' + fahrenheit + '  DEMASIADO BAJA ******')
    }
    if (fahrenheit == 32) {
        alert('la temperatura en °F es: ' + fahrenheit + ' *** Cero Absoluto ***')
    }
    if ((fahrenheit > 32) && (fahrenheit < 64)) {
        alert('la temperatura en °F es: ' + fahrenheit + ' Temperatura Baja')
    }
    if ((fahrenheit >= 64) && (fahrenheit < 100)) {
        alert('la temperatura en °F es: ' + fahrenheit + '  Temperatura Media')
    }
    if ((fahrenheit >= 100) && (fahrenheit <= 128)) {
        alert('la temperatura en °F es: ' + fahrenheit + '  Temperatura Alta')
    }
    if (fahrenheit > 128) {
        alert('la temperatura en °F es: ' + fahrenheit + '  DEMASIADO ALTA')
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
const arrayInicialCelcius = []
const arrayInicialFahrenheit = []
const arrayInicialKelvin =[]
let selector
do {
    selector = parseInt(prompt('ingresar el tipo de temperatura 1 para °C o 2 para °F - para salir 3'))
    if (selector != 3) {
        switch (selector) {
            case 1:
                let temp = parseInt(prompt('Ingresar temperatura en °C a convertir en °F y °K'))
                toFahrenheit(temp)
                toKelvin1(temp)
                break;
            case 2:
                let temp2 = parseInt(prompt('Ingresar temperatura en °F a convertir en °C y °K'))
                toCelsius(temp2)
                toKelvin2(temp2)
                break;
            default:
                alert('ingresar el tipo de temperatura 1 para °C o 2 para °F - para salir 3');
        }
    } else {
        alert('Agrego correctamente sus temperaturas o selecciono Salir del programa')
    }
} while (selector != 3)

if (arrayInicialCelcius.length != 0) {
    for (const tempe of arrayInicialCelcius)
        alert('Temperaturas comvertidas a °F:' + ' ' + tempe.temperaturaOriginal + ' ' + tempe.tipo1 + ' ' + tempe.conector + ' ' + tempe.temperaturaConvertida + ' ' + tempe.tipo2)
}
if (arrayInicialFahrenheit.length != 0) {
    for (const tempe of arrayInicialFahrenheit)
        alert('Temperaturas comvertidas a °C:' + ' ' + tempe.temperaturaOriginal + ' ' + tempe.tipo1 + ' ' + tempe.conector + ' ' + tempe.temperaturaConvertida + ' ' + tempe.tipo2)
}
if (arrayInicialKelvin.length != 0) {
    for (const tempe of arrayInicialKelvin)
        alert('Temperaturas comvertidas a °K:' + ' ' + tempe.temperaturaOriginal + ' ' + tempe.tipo1 + ' ' + tempe.conector + ' ' + tempe.temperaturaConvertida + ' ' + tempe.tipo2)
}

alert('¡Programa terminado!')

console.log(arrayInicialCelcius)
console.log(arrayInicialFahrenheit)
console.log(arrayInicialKelvin)