let round=1;
let CPUPoint=0;
let PlayerPoint=0;
const roundText=document.querySelector(".selection h1");
const buttons=Array.from(document.querySelectorAll(".choice-img"));
buttons.forEach(button => button.addEventListener("click", playRound));
const divPlayer=document.querySelector(".playerScore");
const divCPU=document.querySelector(".CPUScore");
const victory=document.querySelector(".victory");
const points=document.querySelector(".points");

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
    let image=document.createElement("img");
    image.classList.add("choiceImg");

    switch(selection)
    {
        case "Rock":
            image.style.transform="rotate(90deg)";
            image.setAttribute("src","https://static.thenounproject.com/png/477914-200.png");
            break;
        case "Paper":
            image.setAttribute("src","https://sitejerk.com/images/rock-paper-scissors-png.png");
            break;
        case "Scissor":
            image.setAttribute("src","https://static.thenounproject.com/png/477919-200.png");
            break;
    }
    
    return image;
}

function playRound(e)
{   
    if(victory.innerHTML)
        points.innerHTML="";
        victory.innerHTML="";
    let computerChoice=computerPlay();
    roundText.innerHTML="ROUND "+round;
    if(playerImg.firstChild)
        playerImg.firstChild.remove();
    if(CPUImg.firstChild)
        CPUImg.firstChild.remove();
    const playerPlay=e.target.getAttribute("choice");
    let player_Img=getImage(playerPlay);
    let CPU_Img=getImage(computerChoice);
    playerImg.appendChild(player_Img);
    CPUImg.appendChild(CPU_Img);

    if(computerChoice===playerPlay)
        draw();
    else{
        switch(computerChoice)
        {
            case "Rock":
                if(playerPlay==="Paper")
                   win();
                else
                    lose();
                break;
            case "Paper":
                if(playerPlay==="Scissor")
                    win();
                else
                    lose();
                break;
            case "Scissor":
                if(playerPlay==="Rock")
                    win();
                else
                    lose();
                break;
        }
    }
    
    if(CPUPoint===5){
        points.innerHTML=PlayerPoint+" - "+CPUPoint;
        victory.innerHTML="CPU WIN!";
        roundText.innerHTML="START";
        reset();
    }else if(PlayerPoint===5){
        points.innerHTML=PlayerPoint+" - "+CPUPoint;
        victory.innerHTML="PLAYER WIN!";
        roundText.innerHTML="START";
        reset();
    }

    round++;
    return;
}

function reset(){
    PlayerPoint=0;
    CPUPoint=0;
    divPlayer.innerHTML=PlayerPoint;
    divCPU.innerHTML=CPUPoint;
    playerImg.firstChild.remove();
    CPUImg.firstChild.remove();
    round=0;
    return;
}

function win()
{  
    PlayerPoint+=1;
    divPlayer.innerHTML=PlayerPoint;
    return;
}

function draw()
{
    return;
}

function lose()
{
    CPUPoint+=1;
    divCPU.innerHTML=CPUPoint;
    return;
}