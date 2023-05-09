function makeBigger() {
	document.getElementById("userText").style.fontSize = "24pt";
}

function changeStyle() {
	var textArea = document.getElementById("userText");
	if (document.getElementById("fancyShmancy").checked) {
		textArea.style.fontWeight = "bold";
		textArea.style.color = "blue";
		textArea.style.textDecoration = "underline";
	} else {
		textArea.style.fontWeight = "normal";
		textArea.style.color = "black";
		textArea.style.textDecoration = "none";
	}
}

function moo() {
	var textArea = document.getElementById("userText");
	var text = textArea.value;
	var sentences = text.split(".");
	for (var i = 0; i < sentences.length; i++) {
		sentences[i] = sentences[i].trim() + "-Moo";
	}
	textArea.value = sentences.join(". ").toUpperCase();
}
