const doConvert = () => {
    const inputText = document.getElementById("number-input")
    const resultText = document.getElementById("result-output")
    const formulaText = document.getElementById("calc-formula")
    const inputLabel = document.getElementById("first-label")

    if (inputLabel.textContent === "Celcius (°C)") {
        let celcius = parseInt(inputText.value)
        let result = (celcius * 1.8) + 32
        let resultFormula = `(${celcius}°C * 1.8) + 32 = ${result}°F`
        console.log(resultFormula)
        resultText.value = result
        formulaText.value = resultFormula
    }
}

const doReverse = () => {
    const curState1 = document.getElementById("first-label")
    const curState2 = document.getElementById("second-label")
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

document.getElementById("number-input").addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        event.preventDefault()
        doConvert()
    }
})