function factorial(number) {
    if (number == 1) {
    return number;
    }
    else {
    return number * factorial(number-1);
    }
    }
    console.log(factorial(5));
    console.log(5 * 4 * factorial(3));
    console.log(5 * 4 * 3  * factorial(2));
    console.log(5 * 24);