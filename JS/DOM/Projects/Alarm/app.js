alert("Solve the following mathemetical question to end the alert!!");
while (true) {
    alert("Round off to the next integer value");
    let opnSign = ["+", "-", "x", "/"];

    let firstNum = Math.ceil(Math.random() * 1000);
    let secondNum = Math.ceil(Math.random() * 1000);
    console.log(firstNum);
    console.log(secondNum);

    let opnSelect = Math.ceil(Math.random() * 4) - 1;

    let randOpn = opnSign[opnSelect];

    let userAns = prompt(`${firstNum} ${randOpn} ${secondNum} = ?`);
    let corAns;
    switch (opnSelect) {
        case 0:
            corAns = firstNum + secondNum;
            console.log(corAns);
            console.log(userAns);
            break;
        case 1:
            corAns = firstNum - secondNum;
            console.log(corAns);
            console.log(userAns);
            break;
        case 2:
            corAns = firstNum * secondNum;
            console.log(corAns);
            console.log(userAns);
            break;
        case 3:
            corAns = Math.ceil(firstNum / secondNum);
            console.log(corAns);
            console.log(userAns);
            break;
    }
    
    if (userAns==corAns){
        alert("Correct Answer!!! You may enter");
        break;
    }
        else{
        alert("Wrong answer! Try Again...");
    }
}