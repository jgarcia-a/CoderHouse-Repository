function toFahrenheit(fahrenheit) {
    let tempFahrenheit = ((1.8) * fahrenheit + 32);
    arrayInicialCelcius.push(new Temperatura(fahrenheit, '°C', 'a', tempFahrenheit, '°F'))
    relacionTemperaturaFahrenheit(tempFahrenheit)
}
function toCelsius(celsius) {
    let tempCelcius = ((celsius - 32) / 1.8);
    arrayInicialFahrenheit.push(new Temperatura(celsius, '°F', 'a', tempCelcius, '°C'))
    relacionTemperaturaCelcius(tempCelcius);
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
let selector
do {
    selector = parseInt(prompt('ingresar el tipo de temperatura 1 para °C o 2 para °F - para salir 3'))
    if (selector != 3) {
        switch (selector) {
            case 1:
                let temp = prompt('Ingresar temperatura en °C a convertir en °F')
                toFahrenheit(temp)
                break;
            case 2:
                let temp2 = prompt('Ingresar temperatura en °F a convertir en °C')
                toCelsius(temp2)
                break;
            default:
                alert('Debe ingresar C para °C o F para °F');
        }
    } else {
        alert('Agrego correctamente sus temperaturas, procedamos a visualizarlas')
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

alert('¡Programa terminado!')

console.log(arrayInicialCelcius)
console.log(arrayInicialFahrenheit)