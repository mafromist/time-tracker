const periodDaily = document.querySelector(".period__daily");
const periodWeekly = document.querySelector(".period__weekly");
const periodMonthly = document.querySelector(".period__monthly");

const hoursDaily = document.getElementsByClassName("hours__daily");
const hoursWeekly = document.querySelectorAll(".hours__weekly");
const hoursMonthly = document.querySelectorAll(".hours__monthly");

periodDaily.addEventListener("click", () => {
    for (let i = 0; i < hoursDaily.length; i++){
        hoursDaily[i].style.display = 'flex';
        hoursDaily[i].style.color = "$c-white";
        hoursWeekly[i].style.display = "none";
        hoursMonthly[i].style.display = "none";
    }
});
periodWeekly.addEventListener("click", () => {
    for (let i = 0; i < hoursDaily.length; i++){
        hoursDaily[i].style.display = 'none';
        hoursWeekly[i].style.display = "flex";
        hoursWeekly[i].style.color = "$c-white";
        hoursMonthly[i].style.display = "none";
    }
});
periodMonthly.addEventListener("click", () => {
    for (let i = 0; i < hoursDaily.length; i++){
        hoursDaily[i].style.display = 'none';
        hoursWeekly[i].style.display = "none";
        hoursMonthly[i].style.display = "flex";
        hoursMonthly[i].style.color = "$c-white";
    }
});