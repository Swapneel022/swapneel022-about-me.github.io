// 1. Arithmetic Calculator
document.getElementById("arithmetic-form").addEventListener("submit", function (event) {
    event.preventDefault();
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let operation = document.querySelector('input[name="operation"]:checked')?.value;
    
    if (isNaN(num1) || isNaN(num2)) {
        alert("Please enter valid numbers.");
        return;
    }
    
    if (operation === "add") {
        alert("Result: " + (num1 + num2));
    } else if (operation === "subtract") {
        alert("Result: " + (num1 - num2));
    } else if (operation === "multiply") {
        alert("Result: " + (num1 * num2));
    } else if (operation === "divide") {
        if (num2 === 0) {
            alert("Error: Cannot divide by zero.");
        } else {
            alert("Result: " + (num1 / num2));
        }
    } else {
        alert("Please select an operation.");
    }
});

// 2. Factorial
document.getElementById("factorial-form").addEventListener("submit", function (event) {
    event.preventDefault();
    let num = parseInt(document.getElementById("factorial-num").value);
    if (num < 0 || isNaN(num)) {
        alert("Please enter a valid integer.");
        return;
    }
    
    let factorial = 1;
    for (let i = 1; i <= num; i++) {
        factorial *= i;
    }
    alert("Factorial of " + num + " is: " + factorial);
});

// 3. Fibonacci Sequence
document.getElementById("fibonacci-form").addEventListener("submit", function (event) {
    event.preventDefault();
    let n = parseInt(document.getElementById("fib-num").value);
    if (n <= 0 || isNaN(n)) {
        alert("Please enter a valid number.");
        return;
    }
    
    let fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib.push(fib[i - 1] + fib[i - 2]);
    }
    alert("The " + n + "th Fibonacci number is: " + fib[n - 1]);
});

// 4. Max, Min, and Range
document.getElementById("max-min-range-form").addEventListener("submit", function (event) {
    event.preventDefault();
    let num1 = parseFloat(document.getElementById("num1-range").value);
    let num2 = parseFloat(document.getElementById("num2-range").value);
    let num3 = parseFloat(document.getElementById("num3-range").value);

    let max = Math.max(num1, num2, num3);
    let min = Math.min(num1, num2, num3);
    let range = max - min;

    alert("Max: " + max + "\nMin: " + min + "\nRange: " + range);
});

// 5. Mailing List Sign-Up
document.getElementById("mailing-list-form").addEventListener("submit", function (event) {
    event.preventDefault();
    let firstName = document.getElementById("first-name").value;
    let lastName = document.getElementById("last-name").value;
    let email = document.getElementById("email").value;
    let zipCode = document.getElementById("zip-code").value;

    let userData = `<p>Name: ${firstName} ${lastName}, Email: ${email}, ZIP: ${zipCode}</p>`;
    document.getElementById("sign-up-output").innerHTML += userData;
});
