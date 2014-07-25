function shuffle(){
	var pic1 = document.getElementById("pic1");
	var pic2 = document.getElementById("pic2");
	var pic3 = document.getElementById("pic3");
	
	if(pic1.src.match("images/tiger")){
		pic1.src = "images/shark.jpg";
		pic2.src = "images/tiger.jpg";
		pic3.src = "images/jaguar.jpg";
	} else if(pic1.src.match("images/shark")){
		pic1.src = "images/jaguar.jpg";
		pic2.src = "images/shark.jpg";
		pic3.src = "images/tiger.jpg";
	} else {
		pic1.src = "images/tiger.jpg";
		pic2.src = "images/jaguar.jpg";
		pic3.src = "images/shark.jpg";
	}
}