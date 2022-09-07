function toFahrenheit(fahrenheit) {
    let tempFahrenheit = ((1.8) * fahrenheit + 32);
    relacionTemperaturaFahrenheit(tempFahrenheit)
}
function toCelsius(celsius) {
    let tempCelcius = ((celsius - 32) / 1.8);
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

let selector = parseInt(prompt('ingresar el tipo de temperatura 1 para °C o 2 para °F - para salir 3'))
while (selector != 3) {
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
    selector = 3
    alert('programa terminado')
}
