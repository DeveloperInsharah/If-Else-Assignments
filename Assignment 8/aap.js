let userNumber = prompt("Enter a number which you want to check an 'even' or 'odd'")
if(userNumber % 2 === 0)
    {document.write("Your number is " +userNumber + " an even number")}
else if (userNumber % 2 !== 0) {document.write("Your number " + userNumber + " is an odd number")}
else{document.write("Please enter only a number")}
