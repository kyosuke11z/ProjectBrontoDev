// รับองค์ประกอบ HTML
const incomeInput = document.getElementById("income");
const taxPercentageInput = document.getElementById("taxPercentage");
const calculateButton = document.getElementById("calculate-button");
const taxResult = document.getElementById("tax-result");

// เมื่อคลิกที่ปุ่มคำนวณภาษี
calculateButton.addEventListener("click", () => {
    // รับค่ารายได้และเปอร์เซ็นต์ภาษีจาก input
    const income = parseFloat(incomeInput.value);
    const taxPercentage = parseFloat(taxPercentageInput.value);

    // คำนวณภาษี
    const tax = (income * taxPercentage) / 100;

    // แสดงผลลัพธ์ภาษี
    taxResult.textContent = `ภาษีที่ต้องจ่าย: ${tax.toFixed(2)} บาท`;
});
