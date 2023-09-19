let foodData = []; // เก็บรายการอาหารที่เพิ่ม

function addFood() {
    const foodInput = document.getElementById("food");
    const caloriesInput = document.getElementById("calories");
    const genderSelect = document.getElementById("gender");

    const food = foodInput.value;
    const calories = parseFloat(caloriesInput.value);
    const gender = genderSelect.value;

    if (!food || isNaN(calories) || calories <= 0) {
        alert("กรุณากรอกข้อมูลให้ถูกต้อง");
        return;
    }

    // เพิ่มรายการอาหารในรายการอาหารที่เพิ่ม
    foodData.push({ food, calories });

    // แสดงรายการอาหารใหม่ที่เพิ่ม
    displayFoodList();

    // เคลียร์ฟอร์มหลังจากเพิ่ม
    foodInput.value = "";
    caloriesInput.value = "";
}

// เรียกใช้ฟังก์ชันแสดงรายการอาหารเมื่อโหลดหน้าเว็บ
displayFoodList();

// คำนวณแคลอรี่
function calculateCalories() {
    const genderSelect = document.getElementById("gender");
    const gender = genderSelect.value;

    // คำนวณแคลอรี่รวมจากรายการอาหาร
    let totalCalories = 0;
    foodData.forEach(item => {
        totalCalories += item.calories;
    });

    // คำนวณแคลอรี่มาตรฐานตามเพศ
    let standardCalories = 0;
    if (gender === "male") {
        standardCalories = 2500; // คำนวณสำหรับผู้ชาย
    } else if (gender === "female") {
        standardCalories = 2000; // คำนวณสำหรับผู้หญิง
    }

    // คำนวณค่าที่กินเกินหรือขาด
    const caloriesDifference = totalCalories - standardCalories;

    // แสดงผลลัพธ์
    const resultElement = document.getElementById("result");
    if (caloriesDifference === 0) {
        resultElement.textContent = "คุณกินพอดี (ไม่เกิน และไม่ขาด) แคลอรี่";
    } else if (caloriesDifference < 0) {
        resultElement.textContent = `คุณกินน้อยกว่ามาตรฐาน ${Math.abs(caloriesDifference)} แคลอรี่`;
    } else {
        resultElement.textContent = `คุณกินมากกว่ามาตรฐาน ${caloriesDifference} แคลอรี่`;
    }
}

// ฟังก์ชันแสดงรายการอาหารที่เพิ่ม
function displayFoodList() {
    const foodList = document.getElementById("foodList");
    foodList.innerHTML = ""; // เคลียร์รายการอาหารเดิม

    foodData.forEach((item, index) => {
        const foodItem = document.createElement("div");
        foodItem.classList.add("food-item");
        foodItem.textContent = `${index + 1}. ${item.food} - ${item.calories} แคลอรี่`;
        foodList.appendChild(foodItem);
    });
}

// ปุ่มกลับไปหน้าแรก
const backButton = document.querySelector(".back-button");
backButton.addEventListener("click", function () {
    window.location.href = "/Page4.html";
});
