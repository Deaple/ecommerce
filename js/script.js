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

function alto_contraste(title) {
    var i, a;
    for(i=0; (a = document.getElementsByTagName("link")[i]); i++) {
        if(a.getAttribute("rel").indexOf("style") != -1 && a.getAttribute("title")) {
        a.disabled = true;
        if(a.getAttribute("title") == title) a.disabled = false;
        }
    }
}

/*function altoContraste(){
	antigo = document.getElementsByTagName('link')
	var contraste = document.createElement('link');

	contraste.rel = "alternate stylesheet";
	contraste.href = "css/alto-contraste.css";
	console.log(contraste);

	document.body.appendChild(contraste);
}*/