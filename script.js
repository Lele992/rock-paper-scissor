<script>
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

function playRound(computerPlay,playerPlay)
{
    if(computerPlay===playerPlay)
        return 0;
    switch(computerPlay)
    {
        case "Rock":
            if(playerPlay==="Paper")
                return 1;
            else
                return -1;
        case "Paper":
            if(playerPlay==="Scissor")
                return 1;
            else
                return -1;
        case "Scissor":
            if(playerPlay==="Rock")
                return 1;
            else
                return -1;
    }
}

function game()
{
    let CPUPoint=0;
    let PlayerPoint=0;
    for(round=1;round<=5;round++)
    {
        let computerChoice=computerPlay();
        let playerChoiceUnformatted=prompt("Choose one: Rock - Paper - Scissor","");
        let playerChoiceFormatted=playerChoiceUnformatted.charAt(0).toUpperCase()+playerChoiceUnformatted.slice(1).toLowerCase();
        let result=playRound(computerChoice,playerChoiceFormatted);
        console.log("-Round "+round+"-");
        console.log("CPU: "+computerChoice+" You: "+playerChoiceFormatted);
        if(result===-1)
        {
            console.log("You lose! :(");
            CPUPoint+=1;
        }
        else if(result===1)
        {
            console.log("You win! :)");
            PlayerPoint+=1;
        }
        else
            console.log("It'a a draw! :|");
        console.log("CPU: "+CPUPoint+" You: "+PlayerPoint+".");
    }
    console.log("-END OF GAME-");
    console.log("CPU: "+CPUPoint+" You: "+PlayerPoint+".");
    if(CPUPoint>PlayerPoint)
        console.log("YOU LOSE! :'(");
    else if(CPUPoint===PlayerPoint)
        console.log("DRAW! :/");
    else
        console.log("YOU WIN! :D");
}

</script>