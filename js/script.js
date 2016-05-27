function slide1(){
document.getElementById('slide-img').src="img/notebook/notebooks.png";
setTimeout("slide2()", 1000)
document.getElementById('slide-link').href="notebooks.html";
}
 
function slide2(){
document.getElementById('slide-img').src="img/smartphone/smart-phones.png";
setTimeout("slide3()", 1000)
document.getElementById('slide-link').href="smartphones.html";
}
 
function slide3(){
document.getElementById('slide-img').src="img/tablet/tablets.png";
setTimeout("slide1()", 1000)
document.getElementById('slide-link').href="tablets.html";
}