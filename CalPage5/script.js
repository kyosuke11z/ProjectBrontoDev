function convertToFahrenheit() {
    const temperatureInput = document.getElementById("temperature");
    const resultElement = document.getElementById("result");

    const temperatureCelsius = parseFloat(temperatureInput.value);

    if (isNaN(temperatureCelsius)) {
        resultElement.textContent = "กรุณากรอกอุณหภูมิให้ถูกต้อง";
        return;
    }

    const temperatureFahrenheit = (temperatureCelsius * 9/5) + 32;

    resultElement.textContent = `${temperatureCelsius} Celsius เท่ากับ ${temperatureFahrenheit.toFixed(2)} Fahrenheit`;
}

function convertToCelsius() {
    const temperatureInput = document.getElementById("temperature");
    const resultElement = document.getElementById("result");

    const temperatureFahrenheit = parseFloat(temperatureInput.value);

    if (isNaN(temperatureFahrenheit)) {
        resultElement.textContent = "กรุณากรอกอุณหภูมิให้ถูกต้อง";
        return;
    }

    const temperatureCelsius = (temperatureFahrenheit - 32) * 5/9;

    resultElement.textContent = `${temperatureFahrenheit} Fahrenheit เท่ากับ ${temperatureCelsius.toFixed(2)} Celsius`;
}

// ปุ่มกลับไปหน้าแรก
const backButton = document.querySelector(".back-button");
backButton.addEventListener("click", function () {
    window.location.href = "index.html";
});
