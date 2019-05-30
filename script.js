function computerPlay()
{
    let computerPick=Math.floor(Math.random()*4);
    switch(computerPick)
    {
        case 1:
            return "Rock";
        case 2:
            return "Paper";
        case 3:
            return "Scissor";
        default:
            return "Rock";
    }
}

function getImage(selection)
{
    switch(selection)
    {
        case "Rock":
            return "https://static.thenounproject.com/png/477914-200.png";
        case "Paper":
            return "https://sitejerk.com/images/rock-paper-scissors-png.png";
        case "Scissor":
            return "https://static.thenounproject.com/png/477919-200.png";
    }
}

function playRound(e)
{   
    playerImg.firstChild.remove();
    CPUImg.firstChild.remove();
    const playerPlay=e.target.getAttribute("choice");
    let player_Img=document.createElement("img");
    let CPU_Img=document.createElement("img");
    player_Img.setAttribute("src",getImage(playerPlay));
    CPU_Img.setAttribute("src",getImage(computerChoice));
    playerImg.appendChild(player_Img);
    CPUImg.appendChild(CPU_Img);

    if(computerChoice===playerPlay){
        draw();
        return;
    }
    switch(computerChoice)
    {
        case "Rock":
            if(playerPlay==="Paper")
                win();
            else
                lose();
            return;
        case "Paper":
            if(playerPlay==="Scissor")
                win();
            else
                lose();
            return;
        case "Scissor":
            if(playerPlay==="Rock")
                win();
            else
                lose();
            return;
    }
}

function win()
{  
    PlayerPoint+=1;
    divPlayer.innerHTML="You:"+PlayerPoint;
}

function draw()
{

}

function lose()
{
    CPUPoint+=1;
    divCPU.innerHTML="CPU:"+CPUPoint;
}

let round=1;
let CPUPoint=0;
let PlayerPoint=0;
let computerChoice=computerPlay();
const buttons=Array.from(document.querySelectorAll(".choice-img"));
buttons.forEach(button => button.addEventListener("click", playRound));
const divPlayer=document.querySelector(".playerScore");
const divCPU=document.querySelector(".CPUScore");