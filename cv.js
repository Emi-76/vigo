alert("Hola Mundo! Este es mi Proyecto final.");

showTime();
function showTime(){
myDate = new Date();
hours = myDate.getHours();
minutes = myDate.getMinutes();
seconds = myDate.getSeconds();
if (hours < 10) hours = 0 + hours;

if (minutes < 10) minutes = "0" + minutes;

if (seconds < 10) seconds = "0" + seconds;

$("#HoraActual").text(hours+ ":" +minutes+ ":" +seconds);
setTimeout("showTime()", 1000);
}

document.getElementById("boton_ocultar").addEventListener ("click", function () {
    document.getElementById("obj").style.display = "none";

});

document.getElementById("boton_mostrar").addEventListener ("click", function () {
    document.getElementById("obj").style.display = 'block';
});    