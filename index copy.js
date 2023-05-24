var paintColor = document.getElementById('color-pixel');
var bgColor = document.getElementById('color-bg');
var pixelsContainer = document.getElementById('pixels-container-1');
var currentColor = "black";
var currentbgColor = "black";
var controlKeyDown = false;
var makePixelsButton = document.getElementById('make-pixels');

// Listen for controlKeyDown key press
window.addEventListener('keydown', function (e) {
	if (controlKeyDown == false) {
		controlKeyDown = true;
		// console.log(`You pressed ${e.key}`);
	}
}, false);
window.addEventListener('keyup', function (e) {
	if (controlKeyDown == true) {
		controlKeyDown = false;
		// console.log(`You unpressed ${e.key}`);
	}
}, false);

paintColor.addEventListener('change', function() {
	currentColor = paintColor.value;
})

bgColor.addEventListener('input', function() {
	currentbgColor = bgColor.value;
	pixelsContainer.style.backgroundColor = currentbgColor;
})

makePixelsButton.addEventListener('click', function() {
	clearPixels();
	populatePixels();
	var allPixels = getAllPixels();
	addPixelEventListeners(allPixels);
	addPixelEventListeners(allPixels);
})








function addPixelEventListeners(allP) {
	for (a = 0; a < allP.length; a++) {
		allP[a].addEventListener('click', function() {
			this.style.backgroundColor = currentColor;
		})
	}

	for (a = 0; a < allP.length; a++) {
		allP[a].addEventListener('mouseover', function() {
			if (controlKeyDown == true) {
				this.style.backgroundColor = currentColor;
			}
		})
	}
}

function getAllPixels() {
	return document.querySelectorAll('.pixel');
}

function populatePixels() {
	var xrow = document.getElementById('x').value -1;
	var yrow = document.getElementById('y').value -1;
	var rowToCopy = document.getElementById("row");
	var pixelToCopy = document.getElementById("pixel");

	// Clone pixels into the row
	for (x = 0; x < xrow; x++) {
		var clonePixel = pixelToCopy.cloneNode(true);
		rowToCopy.appendChild(clonePixel);
	}

	// Clone rows down the container
	for (y = 0; y < yrow; y++) {
		var rowToCopy = document.getElementById("row");
		var cloneRow = rowToCopy.cloneNode(true);
		pixelsContainer.appendChild(cloneRow);
	}
}

function clearPixels() {
	var allPixels = document.querySelectorAll('.pixel');
	for (d = 1; d < allPixels.length; d++) {
		allPixels[d].remove();
	}
}