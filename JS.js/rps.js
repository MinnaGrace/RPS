function getComputerChoice(){

    const choice = ['rock', 'paper', 'scissors']
   
    var random = choice[Math.floor(Math.random()*choice.length)];
    
    return random;
}

function round(playerselction, computerselection){
    
   winner;
    if(playerselction == computerselection){
        winner = 'Its a tie'
    }
    else if(playerselction == 'rock' && computerselection =='paper'){
        winner = 'Computer Wins'
    }
    else if(playerselction == 'rock' && computerselection =='scissors'){
        winner = 'You win'
    }
    else if(playerselction == 'paper' && computerselection =='rock'){
        winner = 'You win'
    }
    else if(playerselction == 'paper' && computerselection =='scissors'){
        winner = 'Computer Wins'
    }
    else if(playerselction == 'scissors' && computerselection =='paper'){
        winner = 'You win'
    }
    else if(playerselction == 'scissors' && computerselection =='rock'){
        winner = 'Computer Wins'

    }
    return winner

}

function Game(){
    var playercount = 0;
    var compcount = 0;
    var playerchoice;
    var compchoice;
    for(var i = 1; i<=5; i++){
        playerchoice = prompt('Make your pick');
        compchoice= getComputerChoice();
        
        var output = round(playerchoice, compchoice);
        
        if(output == 'Computer wins'){
            compcount+=1;
        }
        else if (output == 'You win'){
            playercount+=1;
        }
        while (output == 'Its a tie'){
            console.log("That was a tie, lets play that round again.")
            playerchoice = prompt('Make your pick');
            compchoice= getComputerChoice();
            output = round(playerchoice, compchoice);
            
        }

        console.log('Round:'+ i);
        console.log(output);
        console.log( 'You:' + playercount);
        console.log( 'Computer:' + compcount);


    }
    console.log('Thank you for playing!');
    console.log('Computer:' + compcount , "Player: " + playercount);

}