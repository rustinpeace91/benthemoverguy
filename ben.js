function dropDown() {
	var x = document.getElementById("main-nav");
	var y = document.getElementById("mobile-icon-id");

	if (x.classList.contains("horizontal-nav")) {
		x.className = "mobile-nav";
		y.className = "fa";
		y.classList.add("fa-times");
	} else {
		x.className = "horizontal-nav";
		y.className = "fa";
		y.classList.add("fa-bars");

	}

}

function test() {
	alert("hello");
}
