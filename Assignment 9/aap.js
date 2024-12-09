let value1 = +prompt("Enter a First Value");
let value2 = +prompt("Enter a Second Value");
let userOperation = prompt("Enter a Operation like '+' , '-' , '*' , '/' , '%'");
let answer = "" ;
if(userOperation == '+'){
    answer = value1 + value2
}
else if (userOperation == '-'){
    answer = value1 - value2
}
else if (userOperation == '*'){
    answer = value1 * value2
}
else if (userOperation == '/'){
    answer = value1 / value2
}
else if (userOperation == '%'){
    answer = value1 % value2
}
else{answer = "Please Enter Correct Number" }
document.write("First Value : " + value1);
document.write("<br>Second Value : " + value2);
document.write("<br>Operation : " + userOperation);
document.write("<br>Answer : " + answer);