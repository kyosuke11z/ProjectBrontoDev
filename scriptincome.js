document.addEventListener("DOMContentLoaded", function () {
    const calculateButton = document.getElementById("calculate-button");
    const addItemButton = document.getElementById("add-item-button");
    const incomeInput = document.getElementById("income");
    const itemList = document.getElementById("item-list");
    const resultParagraph = document.getElementById("result");

    addItemButton.addEventListener("click", function () {
        const itemInput = document.createElement("div");
        itemInput.classList.add("item-input");
        itemInput.innerHTML = `
            <input type="text" class="item" placeholder="ชื่อสินค้า">
            <input type="number" class="price" placeholder="ราคา (บาท)">
        `;
        itemList.appendChild(itemInput);
    });

    calculateButton.addEventListener("click", function () {
        const income = parseFloat(incomeInput.value);
        const itemInputs = itemList.querySelectorAll(".item-input");

        let totalExpenses = 0;

        itemInputs.forEach((itemInput) => {
            const itemName = itemInput.querySelector(".item").value.trim();
            const itemPrice = parseFloat(itemInput.querySelector(".price").value);

            if (!isNaN(itemPrice) && itemName !== "") {
                totalExpenses += itemPrice;
            }
        });

        if (!isNaN(income)) {
            const remainingBalance = income - totalExpenses;
            const resultText = `คุณเหลือเงินอีก ${remainingBalance.toFixed(2)} บาท`;
            resultParagraph.textContent = resultText;
        } else {
            resultParagraph.textContent = "โปรดกรอกข้อมูลที่ถูกต้อง";
        }
    });
});
