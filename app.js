let boxes = document.querySelectorAll(".box");
let reset = document.querySelector('#reset-btn');
let newgame = document.querySelector('#new-btn');
let msg = document.querySelector('#winner');
let body1 = document.querySelector('.body1');
let body2 = document.querySelector('.body2');
let body0 = document.querySelector('.body0');
let startgame = document.querySelector('.start-btn');
let home = document.querySelector('#home-btn');
let result = document.querySelector(".seeresult");

home.addEventListener("click",()=>{
    body0.classList.remove("hidden");
    body1.classList.add("hidden");
})

result.addEventListener("click",()=>{
    body2.classList.add("hidden");
    body1.classList.remove("hidden");
});

startgame.addEventListener("click",()=>{
    body1.classList.remove("hidden");
    body0.classList.add("hidden");
    for(let i=0;i<9;i++){
        boxes[i].innerText = "";
        turnO = true;
        boxes[i].disabled = false;
    }
})

//player X and player O
let turnO = true; //player O

const winCombination = [[0,1,2],[0,3,6,],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO){
            turnO = false;
            box.innerText = 'O';
        }
        else{
            turnO = true;
            box.innerText = "X";
        }
        box.disabled = true;
        checkwinner();
        checkdraw();
    })
})



const showWinner = (winner) =>{
    if(winner === "No One") msg.innerText = 'Its a Draw';
    else 
    msg.innerText = 'Congratulations, Winner is ' + winner ;
    body1.classList.add("hidden");
    body2.classList.remove("hidden");
}
const checkdraw = () => {
    let stop = true;
    for(let i=0;i<9;i++){
        let pos1 = boxes[i].innerText;
        if(pos1 == ""){
            stop = false;
            break;
        }
    }
    if(stop === true){
        showWinner("No One");
    }
}

const checkwinner = () => {

    for (let pattern of winCombination){
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if(pos1!="" && pos2!="" && pos1!="" && pos1 == pos2 && pos2 == pos3){
            for(let i=0;i<9;i++){
                boxes[i].disabled = true;
            }
            showWinner(pos1);
            newgame.addEventListener("click",()=>{
                for(let i=0;i<9;i++){
                    boxes[i].innerText = "";
                    turnO = true;
                    boxes[i].disabled = false;
                    body1.classList.remove("hidden");
                    body2.classList.add("hidden");
                }
            })
            break;
        }
    }
}

reset.addEventListener("click",()=>{
    for(let i=0;i<9;i++){
        boxes[i].innerText = "";
        turnO = true;
        boxes[i].disabled = false; 
    }
})