window.addEventListener("load", function () {
	for (var i = 1; i <= 100; i++) {
		var isDivisibleByThree = i % 3 === 0;
		var isDivisibleByFive = i % 5 === 0;

		if (isDivisibleByThree && isDivisibleByFive) {
			console.log("FizzBuzz");
		}
		else if (isDivisibleByThree) {
			console.log("Fizz");
		}
		else if (isDivisibleByFive) {
			console.log("Buzz");
		}
		else {
			console.log(i);
		}
	}
});