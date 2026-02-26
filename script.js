function seRovnaT(){
    let jednotkyT = document.getElementById("jednotkyT").value
    let jednotkyVysledekT = document.getElementById("jednotkyVysledekT").value
    let zadaniT = parseFloat(document.getElementById("zadaniT").value)
    let vysledek = document.getElementById("vysledek")
    let vystup

    if (jednotkyT === "c" && jednotkyVysledekT === "c"){
        vystup = zadaniT
    } else if (jednotkyT === "c" && jednotkyVysledekT === "f"){
        vystup = (9/5*zadaniT)+32 
    } else if (jednotkyT === "c" && jednotkyVysledekT === "k") {
        vystup = zadaniT+273.15 
    }

    if (jednotkyT === "f" && jednotkyVysledekT === "c"){
        vystup = 5/9*(zadaniT-32)
    } else if (jednotkyT === "f" && jednotkyVysledekT === "f"){
        vystup = zadaniT 
    } else if (jednotkyT === "f" && jednotkyVysledekT === "k") {
        vystup = 5/9*(zadaniT-32)+273.15 
    }

    if (jednotkyT === "k" && jednotkyVysledekT === "c"){
        vystup = zadaniT-273.15
    } else if (jednotkyT === "k" && jednotkyVysledekT === "f"){
        vystup = (9/5*zadaniT)+32-273.15
    } else if (jednotkyT === "k" && jednotkyVysledekT === "k") {
        vystup = zadaniT
    }


    vysledek.value = vystup.toFixed(2)
}
