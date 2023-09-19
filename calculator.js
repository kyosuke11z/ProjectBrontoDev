document.addEventListener("DOMContentLoaded", function () {
    const display = document.getElementById("display");
    const buttons = document.querySelectorAll("button");
    const buttonLog = document.getElementById("button-log");
    const backButton = document.getElementById("back-button");

    let currentInput = "";
    let currentOperator = "";
    let firstOperand = "";
    let secondOperand = "";
    let operatorClicked = false; // เพิ่มตัวแปรเพื่อตรวจสอบว่าเครื่องหมายถูกคลิกหรือไม่

    buttons.forEach((button) => {
        button.addEventListener("click", function () {
            const value = button.value;

            if (value === "C") {
                // ถ้าปุ่ม "C" ถูกคลิก
                currentInput = "";
                currentOperator = "";
                firstOperand = "";
                secondOperand = "";
                display.value = "";
                buttonLog.textContent = "";
                operatorClicked = false; // รีเซ็ตตัวแปรเมื่อกด "C"
            } else if (!isNaN(value) || value === "0") {
                // กรณีคลิกปุ่มตัวเลขหรือ 0
                if (operatorClicked) {
                    // ถ้าเครื่องหมายถูกคลิกก่อนหน้านี้ให้ล้างค่าปัจจุบัน
                    currentInput = "";
                    operatorClicked = false;
                }
                currentInput += value;
                display.value = currentInput;
                buttonLog.textContent += value;
            } else if (value === "+" || value === "-" || value === "*" || value === "/") {
                // กรณีคลิกปุ่มเครื่องหมายการคำนวณ
                if (currentInput !== "") {
                    if (firstOperand === "") {
                        firstOperand = parseFloat(currentInput);
                    } else {
                        secondOperand = parseFloat(currentInput);
                    }
                    currentOperator = value;
                    currentInput = "";
                    operatorClicked = true; // เครื่องหมายถูกคลิก
                    buttonLog.textContent += ` ${value} `;
                }
            } else if (value === "=") {
                // กรณีคลิกปุ่มเท่ากับ
                if (currentInput !== "") {
                    secondOperand = parseFloat(currentInput);
                }
                if (currentOperator !== "" && firstOperand !== "" && secondOperand !== "") {
                    switch (currentOperator) {
                        case "+":
                            currentInput = (firstOperand + secondOperand).toString();
                            break;
                        case "-":
                            currentInput = (firstOperand - secondOperand).toString();
                            break;
                        case "*":
                            currentInput = (firstOperand * secondOperand).toString();
                            break;
                        case "/":
                            if (secondOperand !== 0) {
                                currentInput = (firstOperand / secondOperand).toString();
                            } else {
                                currentInput = "Error";
                            }
                            break;
                        default:
                            currentInput = "Error";
                    }
                    display.value = currentInput;
                    firstOperand = parseFloat(currentInput);
                    currentOperator = "";
                    secondOperand = "";
                    buttonLog.textContent += ` = ${currentInput}`;
                }
            }
        });
    });

    backButton.addEventListener("click", function () {
        window.location.href = "Page2.html";
    });
});
