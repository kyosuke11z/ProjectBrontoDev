function calculateDiscount() {
    const productInput = document.getElementById("product");
    const originalPriceInput = document.getElementById("originalPrice");
    const discountPercentageInput = document.getElementById("discountPercentage");
    const resultElement = document.getElementById("result");

    const productName = productInput.value;
    const originalPrice = parseFloat(originalPriceInput.value);
    const discountPercentage = parseFloat(discountPercentageInput.value);

    if (productName.trim() === "" || isNaN(originalPrice) || isNaN(discountPercentage)) {
        resultElement.textContent = "กรุณากรอกข้อมูลให้ถูกต้อง";
        return;
    }

    const discountAmount = (originalPrice * discountPercentage) / 100;
    const discountedPrice = originalPrice - discountAmount;

    resultElement.textContent = `สินค้า: ${productName}
    ราคาเต็ม: ฿${originalPrice.toFixed(2)}
    เปอร์เซ็นต์ลด: ${discountPercentage}%
    ราคาหลังหักส่วนลด: ฿${discountedPrice.toFixed(2)}
    ลดไป: ฿${discountAmount.toFixed(2)}`;
}

// ปุ่มกลับไปหน้าแรก
const backButton = document.querySelector(".back-button");
backButton.addEventListener("click", function () {
    window.location.href = "index.html";
});
