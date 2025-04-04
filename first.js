let boxes = document.querySelectorAll(".box");
let resetbtb = document.querySelector("#reset-btb");
let newGameBtn = document.querySelector("#new-btn");
let msgcontainer = document.querySelector(".Msg-container");
let Msg = document.querySelector("#Msg");
let turnO = true;  // Player O starts

const winpatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked");
        
        if (turnO) { // Player O
            box.innerText = "0";
        } else { // Player X
            box.innerText = "x";
        }
        
        turnO = !turnO; // Switch turn
        box.disabled = true;
        
        checkwinner();
    });
});

const checkwinner = () => {
    for (let pattern of winpatterns) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if (pos1val !== "" && pos1val === pos2val && pos2val === pos3val) {
            console.log("Winner:", pos1val);
            showwinner(pos1val);
            return;
        }
    }
};

const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};

const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};

const showwinner = (winner) => {
    Msg.innerText = `Congratulations, the winner is ${winner}!`;
    msgcontainer.classList.remove("hide");
    disableBoxes();
};

const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgcontainer.classList.add("hide");
};

// Correct event listeners
newGameBtn.addEventListener("click", resetGame);
resetbtb.addEventListener("click", resetGame);
