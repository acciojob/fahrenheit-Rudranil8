function toFahrenheit(celsius) {
	let c=celsius;
	let f=9/5*c+32;
	return f;
}

// Do not change the code below
const celsius = prompt("Enter Celsius:");
alert(toFahrenheit(Number(celsius)));