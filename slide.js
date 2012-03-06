var all = document.getElementsByTagName("*");
var slides = [];
var cur = 0;
for (i in all) {
	if ((" " + all[i].className + " ").indexOf(" slide ") > -1) {
		all[i].style.display = "none";
		slides.push(all[i]);
	}
}

slides[0].style.display = "block";

next = function() {
	if (cur < slides.length - 1) {
		slides[cur].style.display = "none";
		slides[cur + 1].style.display = "block";
		cur += 1;
	}
}
	
prev = function() {
	if (cur > 0) {
		slides[cur].style.display = "none";
		slides[cur - 1].style.display = "block";
		cur -= 1;
	}
}

document.onclick = function(e) {
	e.pageX > (window.innerWidth / 2) && next();
	e.pageX < (window.innerWidth / 2) && prev();
}

document.onkeydown = function(e) {
	(e.which === 37 || e.which === 38) && prev();
	(e.which === 39 || e.which === 40) && next();
}