window.addEventListener("load", function () {
	for (var i = 1; i <= 100; i++) {
		var three = i % 3 === 0;
		var five = i % 5 === 0;
		var fifteen = i % 15 === 0;

		if (fifteen) {
			console.log("FizzBuzz");
		}
		else if (three) {
			console.log("Fizz");
		}
		else if (five) {
			console.log("Buzz");
		}
		else {
			console.log(i);
		}
	}
});