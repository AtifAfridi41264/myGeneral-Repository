let arrayForDays = ["sunday","monday","Tuesday","wednesday","Thursday","Friday","Saturday"];
let currentDate = new Date();
let getTheDay = currentDate.getDay();
let nameOfTheDay = arrayForDays[getTheDay];
let arrayForMonths = ["JanuAry","FeburAry","MaRch","ApRil","May","juNe","JuLy","AuguSt","SeptEmber","OctoBer","November","December"];
let theMonth = currentDate.getMonth();
let nameOfTheMonth = arrayForMonths[theMonth]; 
let gettingTime = currentDate.getDate();
let nameOfYear = currentDate.getFullYear();
let hours = currentDate.getHours();
let minutes = currentDate.getMinutes();
let seconds = currentDate.getSeconds();


let x = document;
x.addEventListener("click", function showAlert(g){
    
    alert("This Click is Clicked On " + hours + " :" + minutes + " :" + seconds + " :" + nameOfTheMonth + " :" + nameOfTheDay + " :" + nameOfYear + "  On The Degree Of X " + g.clientX + " & On The Degree Of  Y " + g.clientY);
    
})