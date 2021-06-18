function odd_even () {
    let num;
    num = prompt("Enter a Number");
    if (num % 2 == 0) {
        document.write("The number : "+num)
        document.write(" Is an Even Number");
    } else {
        document.write("The number : "+num)
        document.write(" Is an Odd Number");
    }
}