let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".imag");
const msg=document.querySelector("#mess");
const userscorep=document.querySelector("#user")
const compscorep=document.querySelector("#computer")


const compchoice=()=>{
    const options=["rock","paper","scissor"];
    const val=Math.floor(Math.random()*3);
    return options[val];
}

const draw=()=>{
 msg.innerText="Game draw!. Play again.";
        msg.style.backgroundColor="blue";

};
const winner=(userWin,userchoice, comp_choice)=>{
    if(userWin){
        userScore++;
        userscorep.innerText=userScore;
        msg.innerText=`You win! Your ${userchoice} beats ${comp_choice}`;
        msg.style.backgroundColor="green";
    }
    else{
        compScore++;
        compscorep.innerText=compScore;
        msg.innerText=`You lose! ${comp_choice} beats your ${userchoice}`;
        msg.style.backgroundColor="red";

    }
};
const Game=(userchoice)=>{
    const comp_choice= compchoice();
 
    
    if(userchoice===comp_choice){
        //draw
        draw();
    }
    else{
         let userWin=true;
         if(userchoice==="rock")
         {
           userWin= comp_choice==="paper"? false:true;
         }
         else if(userchoice==="paper"){
           userWin= comp_choice==="scissor"? false:true;
         }else{
            userWin= comp_choice==="rock"? false:true;
         }
         winner(userWin,userchoice,comp_choice);
    }
};


choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        Game(userchoice);
    });

});