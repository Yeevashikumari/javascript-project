let box=document.querySelectorAll(".box");
let reset_btn=document.querySelector("#reset-btn");
let new_btn=document.querySelector("#new-btn");
let msg_container=document.querySelector(".msg-container");
let para=document.querySelector("#msg");
let turn="true";

const winPatterns=[[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8],];
const resetBoxColors=()=>{
    box.forEach((boxElement)=>{
        boxElement.style.backgroundColor="";
    });
};
const resetGame=()=>{
    turn=true;
    enablebox();
    msg_container.classList.add("hide");
    resetBoxColors();
};
box.forEach((box)=>{
    box.addEventListener("click",()=>{
       if(turn==="true")
        {
            box.innerText="x";
            box.style.backgroundColor="pink";
            turn="false"
        }
        else{
            box.innerText="o";
            box.style.backgroundColor="aqua";
            
            turn="true";
        }
        box.disabled="true";
        let isWinner=checkWinner();
    });
});
const disablebox=()=>{
    for(let boxes of box)
        {
            boxes.disabled=true;
        }
};
const enablebox=()=>{
    for(let boxes of box)
        {
            boxes.disabled=false;
            boxes.innerText="";
        }
};
const shoWinner=(winner)=>{
    para.innerText='congratulations you are Winner! ';
    msg_container.classList.remove("hide");
    disablebox();
    
};
const checkWinner=()=>{
    for (let pattern of winPatterns){
    let posval1=box[pattern[0]].innerText;
    let posval2=box[pattern[1]].innerText;
    let posval3=box[pattern[2]].innerText;
    if(posval1 !=""&& posval2 !="" && posval3 !="")
        {
            if(posval1===posval2 && posval2===posval3)
            {
                console.log("winner",posval1);
                shoWinner(posval1);
            }
        }
    }
}
new_btn.addEventListener("click",resetGame);
reset_btn.addEventListener("click",resetGame);