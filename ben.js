function dropDown() {
	var x = document.getElementById("main-nav");
	var y = document.getElementById("mobile-icon-id");

	if (x.classList.contains("horizontal-nav")) {
		x.className = "mobile-nav";
		y.className = "ion-close-round";
	} else {
		x.className = "horizontal-nav";
		y.className = "ion-navicon-round";
	}

}

function test() {
	alert("hello");
}