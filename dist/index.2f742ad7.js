const e=document.querySelector(".period__daily"),l=document.querySelector(".period__weekly"),s=document.querySelector(".period__monthly"),t=document.getElementsByClassName("hours__daily"),i=document.querySelectorAll(".hours__weekly"),a=document.querySelectorAll(".hours__monthly");e.addEventListener("click",(()=>{for(let e=0;e<t.length;e++)t[e].style.display="flex",i[e].style.display="none",a[e].style.display="none";e.classList.add("active"),l.classList.remove("active"),s.classList.remove("active")})),l.addEventListener("click",(()=>{for(let e=0;e<t.length;e++)t[e].style.display="none",i[e].style.display="flex",a[e].style.display="none";e.classList.remove("active"),l.classList.add("active"),s.classList.remove("active")})),s.addEventListener("click",(()=>{e.classList.remove("active"),l.classList.remove("active"),s.classList.add("active");for(let e=0;e<t.length;e++)t[e].style.display="none",i[e].style.display="none",a[e].style.display="flex"}));
//# sourceMappingURL=index.2f742ad7.js.map
