let userName = prompt("Enter Your Name") 
let math = +prompt("Enter Your Obtained Marks In Math");
let english = +prompt("Enter Your Obtained Marks In English");
let sindhi = +prompt("Enter Your Obtained Marks In Sindhi");
let pst = +prompt("Enter Your Obtained Marks In P.S.T");
let biology = +prompt("Enter Your Obtained Marks In Biology");
let chemistry = +prompt("Enter Your Obtained Marks In Chemistry");
let physics = +prompt("Enter Your Obtained Marks In Physics");
let totalMarks = 700
let marksObtained = math + english + sindhi + pst + biology + chemistry + physics;
let percentage = marksObtained/7
let grade = "";
let remarks = "";
if(percentage >= 80)
    {grade = "A-One";
    remarks = "Excellent 🥇";
    }
else if (percentage >= 70)
    {grade = "A ";
    remarks = "Good 👍";
    }
else if (percentage >= 60)
    {grade = "B ";
    remarks = "You need to improve 😢"
    }
else if (percentage < 60)
    {grade = "Fail";
    remarks = "Sorry ❌"
    }
else{grade = ""}
document.write( "Name : " + userName);
document.write( "<br>Total Marks : " + totalMarks);
document.write( "<br> Marks Obtained : " + marksObtained);
document.write( "<br> Percentage : " + percentage + " %");
document.write( "<br> Grade : " + grade);
document.write( "<br> Remarks : " + remarks);