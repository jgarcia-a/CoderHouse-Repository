let ciclo = true
do{
    let anio = prompt('¡Puedo adivinar tu Edad!, ¿En que año naciste?')
    if(anio >= 2022){
        alert('El año tiene que ser menor al año actual 2022')
        continue
    }
    if(anio <= 0){
        alert('El año tiene que ser mayor que Cero')
        continue
    }
    let anioActual = 2022
    let edad = anioActual - anio
    if(edad >= 100){
        alert('la edad que tienes es: ' + edad + ' años, ¡puede que ya no este presente en este mundo!')
        break
    }else{
        alert('la edad que tienes es: ' + edad + ' años, ¡GRACIAS!')
        break
    }    
}while(ciclo)






