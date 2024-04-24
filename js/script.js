const inputText = document.getElementById("number-input")
const resultText = document.getElementById("result-output")
const formulaText = document.getElementById("calc-formula")
const explanationText = document.getElementById("explanation-text")
const inputLabel = document.getElementById("first-label")
const curState1 = document.getElementById("first-label")
const curState2 = document.getElementById("second-label")


const doConvert = () => {
    if (inputLabel.textContent === "Celcius (°C)") {
        let celcius = parseFloat(inputText.value)
        if (!(isNaN(celcius))) {
            let result = ((celcius * (9/5)) + 32)
            let resultFormula = `(${celcius}°C * (9/5)) + 32 = ${result}°F`
            console.log("INFO:", resultFormula)
            resultText.value = result
            formulaText.value = resultFormula
            explanationText.innerHTML = `
            <div class="explanation-text">Cara Kerja Konversi Suhu Celcius (°C)</div>
            <div class="normal-text">Suhu <big><i>S</i></big> dalam derajat Fahrenheit (&deg;F) sama dengan suhu <big><i>S</i></big> dalam derajat Celcius (&deg;C) kali <big>9/5</big> tambah <big>32</big>.</div>
            <br>
            <div class="normal-text"><big><i>S</i></big><sub>(&deg;F)</sub> = (<big><i>S</i></big><sub>(&deg;C)</sub> &times; <big>9/5</big>) &plus; <big>32</big></div>`
            explanationText.style.display = "inline"
        } else {
            resultText.value = "Error: Mohon masukan angka"
            formulaText.value = ""
            explanationText.style.display = "none"
            console.error("ERROR: Mohon masukan angka")
        }
    } else if (inputLabel.textContent === "Fahrenheit (°F)") {
        let fahrenheit = parseFloat(inputText.value)
        if (!(isNaN(fahrenheit))) {
            let result = ((fahrenheit - 32) * (5/9))
            let resultFormula = `(${fahrenheit}°C - 32) * (5/9) = ${result}°F`
            console.log("INFO:", resultFormula)
            resultText.value = result
            formulaText.value = resultFormula
            explanationText.innerHTML = `
            <div class="explanation-text">Cara Kerja Konversi Suhu Fahrenheit (°F)</div>
            <div class="normal-text">Suhu <big><i>S</i></big> dalam derajat Celcius (&deg;C) sama dengan suhu <big><i>S</i></big> dalam derajat Fahrenheit (&deg;F) kurang <big>32</big> dikali <big>5/9</big></div>
            <br>
            <div class="normal-text"><big><i>S</i></big><sub>(&deg;C)</sub> = (<big><i>S</i></big><sub>(&deg;F)</sub> &minus; <big>32</big>) &times; <big>5/9</big></div>`
            explanationText.style.display = "inline"
        } else {
            resultText.value = "Error: Mohon masukan angka"
            formulaText.value = ""
            explanationText.style.display = "none"
            console.error("ERROR: Mohon masukan angka")
        }
    } else {
        console.error("ERROR: Unknown state")
    }
}

const doReverse = () => {
    if (curState1.textContent === "Celcius (°C)") {
        curState1.textContent = "Fahrenheit (°F)"
        curState2.textContent = "Celcius (°C)"
        console.log("INFO: Label ditukar", curState1.textContent, "dengan", curState2.textContent)
    } else if (curState1.textContent === "Fahrenheit (°F)") {
        curState1.textContent = "Celcius (°C)"
        curState2.textContent = "Fahrenheit (°F)"
        console.log("INFO: Label ditukar", curState1.textContent, "dengan", curState2.textContent)
    } else {
        console.error("ERROR: Unknown state")
    }
}

const doReset = () => {
    inputText.value = ""
    resultText.value = ""
    formulaText.value = ""
    explanationText.style.display = "none"
    console.log("INFO: Text area dibersihkan")
}

inputText.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        event.preventDefault()
        doConvert()
    }
})

inputText.addEventListener("input", (state) => {
    let regex = /^[0-9.]+$/
    if (!(regex.test(state.data))) {
        console.warn("WARNING: Input bukan angka:", state.data)
    }
})

window.addEventListener("load", () => {
    doReset()
})