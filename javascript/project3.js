let user=0;
let comp=0;
const msg=document.querySelector(".msg-container");
const choices=document.querySelectorAll(".choice");
const userscore=document.querySelector("#user");
const compscore=document.querySelector("#comp");
const genCompChoice=()=>{
    const options=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
};
const drawGame=()=>{
    msg.innerText="game has been draw";
    msg.style.backgroundColor="red";
};
const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        msg.innerText="Congratulations,You have Win!";
        msg.style.backgroundColor="green";
        ++user;
        userscore.innerText=++user;
    }
    else{
        msg.innerText="Sorry,You have lost!";
        msg.style.backgroundColor="blue";
        comp++;
        compscore.innerText=comp++;
    }
};
const playgames=(userChoice)=>{
const compChoice=genCompChoice();
if(userChoice===compChoice)
    {
        drawGame();
    }
    else{
        let userWin=true;
        if(userChoice==="rock")
            {
                userWin=compChoice==="paper"?false:true;
            }
            else if(userChoice==="paper")
                {
                    userWin=compChoice==="scissors"?false:true;
                }
                else{
                    //rock,paper
                    userWin=compChoice==="rock"?false:true;
                }
                showWinner(userWin,userChoice,compChoice);
    }
};
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
    const userChoice= choice.getAttribute("id");
    playgames(userChoice);
    });
});