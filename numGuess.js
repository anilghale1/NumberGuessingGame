





let result = document.getElementById("haha");


let a = parseInt(Math.random()*100);

let Iscorrect = false;


function player1()
{
    let first = document.getElementById("abc");
    var num = first.value;

    

    if(num == a)
    {
        result.innerHTML = "Correct Guess";
        Iscorrect = true;
    }
    else if(num > a)
    {
        result.innerHTML = "Your Guess is too high";
    }

    else if(num < a - 30)
    {
         result.innerHTML = "Your Guess it too low";
    }

    else {
        result.innerHTML = "Your Guess it low";
    }

    player1();
}

   



function res()
{
     
     
       
}
