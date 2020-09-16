const day = document.querySelector(".day .numb")
const hour = document.querySelector(".hour .numb")
const min = document.querySelector(".min .numb")
const sec = document.querySelector(".sec .numb")

var timer = setInterval(()=>{

    var currentDate = new Date().getTime();
    var launchDate = new Date('Sep 18, 2020 13:00:00').getTime();
    var duration   = launchDate - currentDate;
    var days = Math.floor(duration / (100*60*60*24));
    var seconds = Math.floor((duration % (1000 *60))/1000);
    var hours = Math.floor((duration %(1000*60*60*24)) / (1000 *60*60));
    var minutes = Math.floor((duration % (1000*60*60))/(1000*60));
    day.innerHTML = days;
    hour.innerHTML = hours;
    min.innerHTML = minutes; 
    sec.innerHTML = seconds;

    if ( duration < 0) {
        clearInterval(timer);
    }

},1000);
