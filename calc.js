var readNumbers = function() {
	var inputBox = document.getElementById("score");
	var inputStr = inputBox.value;
	return parseInt(inputStr);
}

var triangular = function(n) {
	var result = n;
	for (var i = 1; i <= n; i++) {
		result = result + n;
	}
	return result/2;
};

var run = function() {
	var scores = readNumbers();
	var tri = triangular(scores);
	var outElement = document.getElementById('result').innerHTML = "The triangular number is " + tri;

};

var button = document.getElementById('runner');
button.onclick = run; 

var readNumbers2 = function() {
	var inputBox2 = document.getElementById("FibNum2");
	var inputStr2 = inputBox2.value;
	return parseInt(inputStr2);
};

var fibonacci = function (n) {
	var result;
	var second = 1;
	var first = 0;
	for (var i = 0; i < n; i++) {
		result = first + second;
		second = first;
		first = result;
		};
		return first;
	};

var runSecond = function() {
	var scores2 = readNumbers2();
	var fibo = fibonacci(scores2);
	var outElement2 = document.getElementById('result2').innerHTML = "The fibonacci number is " + fibo;
	};
var secondButton = document.getElementById('fib');
secondButton.onclick = runSecond;
