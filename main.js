const $ = document;
const weight_range = $.getElementById("weight");
const height_range = $.querySelector("input");
const result = $.getElementById("ibm_calc");
const category = $.getElementById("mini_desc");
const card = $.querySelector(".card1");
const modal = $.querySelector(".modal");
const incs_weight = $.getElementById("incs_weight");
const redu_weight = $.getElementById("redu_weight");
const incs_age = $.getElementById("incs_age");
const redu_age = $.getElementById("redu_age");
const suggest = $.getElementById("suggest");
const ages = $.getElementById("age");

const female = $.getElementById("female");
const male = $.getElementById("male");

incs_weight.addEventListener("click", () => {
    weight_range.innerText = Number(weight_range.innerText)+1;
});

redu_weight.addEventListener("click", () => {
    if (Number(weight_range.innerText) >= 1)
        weight_range.innerText = Number(weight_range.innerText)-1;
});

incs_age.addEventListener("click", () => {
    age.innerText = Number(age.innerText)+1;
});

redu_age.addEventListener("click", () => {
    if (Number(age.innerText) >= 1 && Number(age.innerText) <= 100)
    age.innerText = Number(age.innerText)-1;
});

function calculate() {
    if (height_range.value === "") {
        alert("Please enter your height!");
    }else {
        let weight = weight_range.innerText;
        let height = height_range.value;
        let bmi = ((weight*Math.pow(10, 4))/(height*height)).toFixed(1);
    
        result.innerText = bmi;
        if (bmi < 18.5) {
            category.innerText = "Underweight";
            suggest.innerText = "You have an underweight body weight. Be careful!";
            result.style.color = "rgb(255, 196, 77)";
        }else if (bmi >= 18.5 && bmi < 25) {
            category.innerText = "Normal weight";
            suggest.innerText = "You have a normal body weight. Good job!";
            result.style.color = "rgb(11, 222, 129)";
        }else if (bmi >= 25 && bmi < 30) {
            category.innerText = "Overweight";
            suggest.innerText = "You have an overweight body weight. Be careful!";
            result.style.color = "rgb(255, 94, 87)";
        }else {
            category.innerText = "Obesity";
            suggest.innerText = "You have an extra overweight body weight. Be careful!";
            result.style.color = "rgb(255, 196, 77)";
        }
    
        card.style.display = "none";
        modal.style.display = "block";

        height_range.value = "";
        weight_range.innerText = "50";
        ages.innerText = "25"
    }
}

function changeCard() {
    card.style.display = "block";
    modal.style.display = "none";
}

function colorBox(event) {
    if (event.target.id == "male") {
        if (female.style.backgroundColor == "rgb(232, 29, 88)") {
            female.style.backgroundColor = "rgba(255, 255, 255, 0.15)";
        }
        male.style.backgroundColor = "rgb(232, 29, 88)";
    }else {
        if (male.style.backgroundColor == "rgb(232, 29, 88)") {
            male.style.backgroundColor = "rgba(255, 255, 255, 0.15)";
        }
        female.style.backgroundColor = "rgb(232, 29, 88)";
    }
}

