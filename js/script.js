const doConvert = () => {

}

const doReverse = () => {
    const curState1 = document.getElementById("temp-form1")
    const curState2 = document.getElementById("temp-form2")
    if (curState1.textContent === "Celcius (°C)") {
        curState1.textContent = "Fahrenheit (°F)"
        curState2.textContent = "Celcius (°C)"
        console.log("Label ditukar", curState1.textContent, "dengan", curState2.textContent)
    } else if (curState1.textContent === "Fahrenheit (°F)") {
        curState1.textContent = "Celcius (°C)"
        curState2.textContent = "Fahrenheit (°F)"
        console.log("Label ditukar", curState1.textContent, "dengan", curState2.textContent)
    } else {
        throw "Unknown state"
    }
}

const doReset = () => {
    document.getElementById("number-input").value = ""
    document.getElementById("result-input").value = ""
    document.getElementById("calc-formula").value = ""
    console.log("Text area dibersihkan")
}
