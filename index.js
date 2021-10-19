const periodDaily = document.querySelector(".period__daily");
const periodWeekly = document.querySelector(".period__weekly");
const periodMonthly = document.querySelector(".period__monthly");

const hoursDaily = document.getElementsByClassName("hours__daily");
const hoursWeekly = document.querySelectorAll(".hours__weekly");
const hoursMonthly = document.querySelectorAll(".hours__monthly");

periodDaily.addEventListener("click", () => {
    periodDaily.classList.add("active");
    periodWeekly.classList.remove("active");
    periodMonthly.classList.remove("active");

    for (let i = 0; i < hoursDaily.length; i++){
        hoursDaily[i].style.display = 'flex';   
        hoursWeekly[i].style.display = "none";
        hoursMonthly[i].style.display = "none";
    }
});
periodWeekly.addEventListener("click", () => {
    periodDaily.classList.remove("active");
    periodWeekly.classList.add("active");
    periodMonthly.classList.remove("active");

    for (let i = 0; i < hoursDaily.length; i++){
        hoursDaily[i].style.display = 'none';
        hoursWeekly[i].style.display = "flex";
        hoursMonthly[i].style.display = "none";
    }
});
periodMonthly.addEventListener("click", () => {
    periodDaily.classList.remove("active");
    periodWeekly.classList.remove("active");
    periodMonthly.classList.add("active");

    for (let i = 0; i < hoursDaily.length; i++){
        hoursDaily[i].style.display = 'none';
        hoursWeekly[i].style.display = "none";
        hoursMonthly[i].style.display = "flex";
    }
});