var str1 = String("string")
var num1 = Number(1.45)
var bool1 = Boolean(true)

if (str1 === "string") {
	console.log('str1 equal "string"')
}

if (num1 === 1.45) {
	console.log('num1 equal 1.45')
}

if (bool1 === true) {
	console.log('bool1 equal true')
}

var str2 = new String("string")
var num2 = new Number(1.45)
var bool2 = new Boolean(true)

if (str2 === "string") {
	console.log('str2 equal "string"')
} else {
	console.log('str2 not equal "string"')
}

if (num2 === 1.45) {
	console.log('num2 equal 1.45')
} else {
	console.log('num2 not equal 1.45')
}

if (bool2 === true) {
	console.log('bool2 equal true')
} else {
	console.log('bool2 not equal true')
}


var num1 = 145
var num2 = new Number(145)

console.log(typeof num1)	//number	
console.log(typeof num2)	//object
