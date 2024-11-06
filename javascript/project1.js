let box=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let turn=false;
/*const winpatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];*/
box.forEach((box)=>{
    box.addEventListener("click",()=>{
        
        if(turn==true){
                box.innerText="o";
                turn=false;
        }
        else{
            box.innerText="x";
            turn=true;
        }
        box.disabled=true;
        checkWinner();
    });
});
/*const checkWinner=()=>{
    for(pattern of winpatterns){
        console.log(pattern);
    }
}*/