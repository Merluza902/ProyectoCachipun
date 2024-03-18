let nombre = prompt("Ingrese su nombre");
let repetir = prompt(`Hola ${nombre} ingresa la cantidad de veces que deseas jugar cachipun: `)
let winpc=0;
let winu=0
let empate=0
for(i=1; i<=repetir; i++){
    let jugada1 = Math.floor(Math.random()*3);
    let jugada2 = prompt("Ingrese jugada: ")
    if(jugada1==jugada2){
        alert("ES UN EMPATE")
        empate++
    }
    else if(jugada1==0 && jugada2==1){
        alert(`GANA ${nombre}`)
        winu++
    }
    else if(jugada1==1 && jugada2==0){
        alert("GANA LA COMPUTADORA")
        winpc++
    }
    else if(jugada1==1 && jugada2==2){
        alert(`GANA ${nombre}`)
        winu++
    }
    else if(jugada1==2 && jugada2==1){
        alert("GANA LA COMPUTADORA")
        winpc++
    }
    else if(jugada1==0 && jugada2==2){
        alert("GANA LA COMPUTADORA")
        winpc++
    }
    else if(jugada1==2 && jugada2==0){
        alert(`GANA ${nombre}`)
        winu++
    }
}
if(winu>winpc){
    alert(`FELICIDADES ${nombre} HAS GANADO LA PARTIDA`)
    document.write(`${nombre} GANA`)
}
else if(winpc>winu){
    alert(`${nombre} HAS PERDIDO CONTRA LA COMPUTADORA`)
    document.write("LA COMPUTADORA GANA")
}
else if(empate>=winpc && empate>=winu){
    alert("ES UN EMPATE, FELICIDADES A AMBOS")
    document.write("AMBOS GANAN")
}
