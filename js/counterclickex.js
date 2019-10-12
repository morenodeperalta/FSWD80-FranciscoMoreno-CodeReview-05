var button = document.getElementById("clickme"),

  count = 0;
button.onclick = function() {
	// in the loop i need to add the count from json
  count += 1;
  button.innerHTML = "Click me: " + count;
};

