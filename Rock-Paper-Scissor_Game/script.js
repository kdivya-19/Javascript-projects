let chs =document.querySelectorAll(".choice");
let msg=document.querySelector("#msg");
let ym=document.querySelector("#ym");
let cm=document.querySelector("#cm");
let userscore=0;
let comscore=0;

chs.forEach((c)=>{
    c.addEventListener("click",()=>{
        console.log("button clicked");
        let userChoice = c.getAttribute("id");
        console.log(userChoice);
        playgame();
    }); 
});

const compchoice=()=>{
    let options=["r","p","s"];
    console.log(Math.random());//This will generate random no between 0-1
    console.log(Math.random()*3);  // now it wll become no. btwn 0-2
    let comchoice=options[Math.floor(Math.random()*3)];
    console.log(comchoice);
    return comchoice;
}
const playgame=(userChoice)=>{
    let comchoice=compchoice();
    if(userChoice==comchoice){
        msg.innerText="Game is a Draw!";
        msg.style.backgroundColor="purple";
    }
    else{ 
        let userwin=true;
        if(userChoice=="r"){
            userwin=comchoice=="s"?flase:true
        }
        else if(userChoice=="s"){
            userwin=comchoice=="r"?false:true;
        }
        else{
            userwin=comchoice=="r"?true:false;
        }
        console.log(userwin);
        showwinner(userwin);
    }
    
    // showwinner(userwin);
}

const showwinner=(userwin)=>{
    if(userwin){
        msg.innerText="You Won!";
        msg.style.backgroundColor="green";
        userscore++;
        ym.innerText=userscore;
    }
    else{
        msg.innerText="Computer Won";
        msg.style.backgroundColor="red";
        comscore++;
        cm.innerText=comscore;
    }
}
