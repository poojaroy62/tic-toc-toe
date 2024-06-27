let boxes = document.querySelectorAll(".box");
let resetButton = document.querySelector("#reset-btn");

let turnO = false;

const winPattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

boxes.forEach((box)=>{
    box.addEventListener("click", (e)=>{
        if(turnO){
            e.target.innerHTML = "O";
            turnO = false;
        }else{
            e.target.innerHTML = "X";
            turnO = true;
        }
        box.disabled=true;
        checkWinner();
    })

    
})

const checkWinner = ()=> {
    let winner = false;
    let winnerText = ""
    winPattern.forEach((pattern)=>{
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;
        if(pos1!== "" && pos2 !== "" && pos3 !== ""){
            if(pos1 === pos2 && pos2 === pos3){
                winnerText=pos1
                winner = true;
            }
        }
    })
    if(winner){
        if(turnO){
            Swal.fire({
                title: 'Congratulations!',
                text: 'you won',
                icon: 'success',
                confirmButtonText: 'New Game'
              })
        }else{
            Swal.fire({
                title: 'Oops!',
                text: 'you losed',
                icon: 'error',
                confirmButtonText: 'New Game'
              })
        }
        resetGame()
    }
}

const resetGame = () => {
    boxes.forEach((box)=>{
        box.innerHTML = "";
        box.disabled=false;
    })
    turnO = false;
}

resetButton.addEventListener("click", ()=>{
    resetGame();
})