function checkOddOrEven() {
    const userInput = prompt("Enter a number:");
    const number = parseInt(userInput);

    if (isNaN(number)) {
        document.getElementById("result").textContent = "Please enter a valid number.";
    }
    else {
        if (number % 2 === 0) {
            document.getElementById("result").textContent = number + " is even.";
        }
        else {
            document.getElementById("result").textContent = number + " is odd.";
        }
    }
}




function checkNumber() {
    const userInput = prompt("Enter a number:");
    const number = parseFloat(userInput);

    if (isNaN(number)) {
        document.getElementById("result2").textContent = "NAN";
    } else {
        document.getElementById("result2").textContent = "A NUMBER";
    }
}




function findLargest() {
    const number1 = parseFloat(document.getElementById("number1").value);
    const number2 = parseFloat(document.getElementById("number2").value);

    if (isNaN(number1) || isNaN(number2)) {
        document.getElementById("result3").textContent = "Please enter valid numbers.";
     } 
     else {
            if (number1 >= number2) {
                document.getElementById("result3").textContent = number1 + " is the largest number.";
            }
            else {
                document.getElementById("result3").textContent = number2 + " is the largest number.";
            }

        }
    }




    function findGrade() {
        const score = prompt(document.getElementById("score").value);

        if (isNaN(score)) {
        document.getElementById("result").textContent = "Please enter a valid score.";
        }
        else {
            let grade;

            if (score >= 90) {
                grade = "A+";
            }

            else if (score >= 80) {
                grade = "A";               
            }
            else if (score >= 70) {
                grade = "B";
            }
            else if (score >= 60) {
                grade = "C";        
            }
            else if (score >= 50) {
                grade = "D";
            }
            else {
                grade = "F";
            }

            document.getElementById("result4").textContent = "The student's grade is: " + grade;
        }
    }


const text = document.getElementById("text");
const hand = document.getElementById("hand");

window.addEventListener('scroll',() => {
    let value = window.scrollY;
    text.style.top = scrollvalue * 0.5 + 'px';
})

