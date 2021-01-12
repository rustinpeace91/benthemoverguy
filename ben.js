

function dropDown() {
	var x = document.getElementById("main-nav");
	var y = document.getElementById("mobile-icon-id");
	if (x.classList.contains("horizontal-nav")) {
		//open navbar
		x.className = "mobile-nav";
		y.className = "ion-close-round";
	} else {
		//close navbar
		x.className = "horizontal-nav";
		y.className = "ion-navicon-round";
	}

}

function closeDropDown(){
	document.getElementById("main-nav").className = "horizontal-nav";
	document.getElementById("mobile-icon-id").className = "ion-navicon-round";
}

function scheduleForm() {
	var x = document.getElementById("initial-contact-form");
	var y = document.getElementById("schedule-form-button");
	if(x.classList.contains("schedule-form-closed")) {
		x.className = "schedule-form-open";
		y.className = "schedule-form-button-open";
		y.innerHTML = "Click Here to Close Form"
	} else {
		x.className = "schedule-form-closed";
		y.className = "schedule-form-button-closed";
		y.innerHTML = "Click Here for an Estimate";
	}
}

window.onload = function(){ 

	window.addEventListener("resize", function(){
		if(window.innerWidth > 710){
			closeDropDown();
		}

	});
}

