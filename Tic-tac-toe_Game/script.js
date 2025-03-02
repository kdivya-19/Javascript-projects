let boxes=document.querySelectorAll(".box");
let b=document.querySelector(".box");
let rst=document.querySelector("#reset");
let msg=document.querySelector("#msg");
let msgcontainer=document.querySelector(".msg-container");
let c1=true;

console.log(boxes.length);
console.log(boxes[1]);
const arr=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8]];
console.log(arr[0][1]);
boxes.forEach((box,indx)=>{
    box.addEventListener("click",()=>{
        if(c1){
            box.innerText="X";
            // console.log(box);
            // console.log(indx);
            box.style.backgroundColor="lightblue";
            c1=false;
        }
        else {
            box.innerText="O";
            console.log(box);
            console.log(indx);
            box.style.backgroundColor="lightyellow";
            c1=true;
        }
        box.disabled=true;
        checkwinner();
    });
});
const checkwinner=()=>{
    for(let p of arr) {
        console.log(p[0], p[1], p[2]);
        console.log(boxes[p[0]].innerText, boxes[p[1]].innerText, boxes[p[2]].innerText);
        let pos1=boxes[p[0]].innerText;
        let pos2=boxes[p[1]].innerText;
        let pos3=boxes[p[2]].innerText;
        if(pos1!="" && pos2!="" && pos3!=""){
            if(pos1===pos2 && pos2===pos3){
                console.log(`winner ${pos1} `);
                showwinner(pos1);
                return true;
            }
        }
    }
};
const showwinner=(winner)=>{
    if(winner=="X"){
        msg.innerText= `\t\t\t Winner is Player 1 \n Congratulations!`;
    }
    else {
        msg.innerText= `\t\t\t Winner is Player 2 \n Congratulations!`;
    }
    msgcontainer.classList.remove("hide");
    disableboxes();
};
const disableboxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};
const reset=()=> {
    c1 = true;
    enableboxes();
    msgcontainer.classList.add("hide");
};
const enableboxes=()=>{
    for(let box of boxes) {
        box.disabled=false;
        box.innerText="";
        box.style.backgroundColor="white"
        
    } 
};
rst.addEventListener("click",reset);