let num = '+-';  

if (typeof num !== 'number' || isNaN(num)) {
    console.log("введите только числа");
} else if (num % 2 === 0) {
    console.log("четное");
} else {
    console.log("нечетное");
}


let num2 = -11;  

if (typeof num2 !== 'number' || isNaN(num2)) {
    console.log("введите только числа");
} else {
    if (num2 > 0) {
        console.log("положительное");
    } else if (num2 < 0) {
        console.log("отрицательное");
    } else {
        console.log("ноль");
    }
}
