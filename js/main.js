
//---Giriş Kısmı-----
let name = prompt("Adınızı Giriniz:")
let myName = document.querySelector("#myName")
myName.innerHTML = name;

//----Clock Code-----
let myClock = document.querySelector("#myClock")
updateClock();
function updateClock()
{
    var  date = new Date();
daysOfWeek = ['Cumartesi','Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma'];
var date_hour = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + " " +  daysOfWeek[date.getDate()];

myClock.innerHTML = date_hour;
setTimeout(updateClock, 1000);
}






