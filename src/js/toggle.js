var colorState = "white";
	function toggleColor() {
		var element = document.getElementById("myElement");
		var body = document.getElementsByTagName("body")[0];
		var element_light = document.getElementById("dark");
		var element_dark = document.getElementById("light");

		if (colorState === "white") {
			body.style.backgroundColor = "#2E2E2E";
			body.style.color = "white";
			element.style.color = "white";
			colorState = "#2E2E2E";
			element_dark.style.color = "#5F6775";
			element_light.style.color = "#4B48DB";
		} else {
			body.style.backgroundColor = "white";
			body.style.color = "black";
			element.style.color = "black";
			colorState = "white";
			element_dark.style.color = "#4B48DB";
			element_light.style.color = "#5F6775";
		}
	}