let boxes = document.querySelectorAll(".box");
let reset =document.querySelector("#reset");
let msgContainer = document.querySelector(".winner");
let msg = document.querySelector("#msg");

let turn0 = true;

const winpatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

const disableBoxes = () => {
    for (let box of boxes) {
      box.disabled = true;
    }
  };

const showwinner = (winner) =>{
    msg.innerText = "congratulation,winner is ${pos1val}";
    msgContainer.classList.remove("hide");
    disableBoxes();
};

boxes.forEach((box) => {
    box.addEventListener("click",()=>{
       console.log("box was click");
       if(turn0){
        box.innerText = "0";
        turn0 = false;
       }
       else{
        box.innerText = "X";
        turn0 = true;
       }
       box.disabled = true;

       checkwinner();
    });
});

const checkwinner = () =>{
    for(let pattern of winpatterns){
        console.log(pattern[0],pattern[1],pattern[2]);
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if(pos1val !="" && pos2val !="" && pos3val !=""){
            if(pos1val === pos2val && pos2val=== pos3val){
               console.log("winner",pos1val); 
               showwinner(pos1val);
               return true;
            }
        }
    }

};