let btns = document.querySelectorAll(".btn");
let h1 = document.querySelector("h1");
let resetbtn = document.querySelector(".resetbtn");

let trackPlayer = document.querySelectorAll(".playertrack");

let user1Chance = true;
let user2Chance =false;

let user1 = [];
let user2 = [];

let winPattern =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]


function mainLogic(btn){
        if(user1Chance){
            user2Chance = true;            //Chance toogle
            user1Chance = false;
            user1.push(parseInt(btn.id));  //user1 input store/track
            btn.innerText = "X";            //change in css
            btn.classList.add("player-x");
            btn.disabled = true;
            winChecker();
        }else{
            user2Chance = false;       //toggle
            user1Chance = true;
            user2.push(parseInt(btn.id));    //store user-2 input
            btn.classList.add("player-o");
            btn.innerText = "0";
            winChecker();
            btn.disabled = true;

            return;
        }
        console.log(user1,user2);
}



btns.forEach((btn)=>{
    btn.addEventListener("click",(event)=>{
        mainLogic(event.target);
    });
})

document.addEventListener("keydown",(event)=>{
        btns.forEach((btn) => {
            if(btn.id == event.key && !btn.disabled){
                mainLogic(btn)
            }
        })
    });


function disableButtons(){
    btns.forEach(btn => {
        btn.disabled = true;
    });
}


function winChecker(){
    let win = false;
    for(pattern of winPattern){
        if(pattern.every(val => user1.includes(val))){
            win  = true;
            h1.innerText = "User-1 Won !";
            console.log("User-1 win");
            flag =0;
            disableButtons();
 
        }else if (pattern.every(val => user2.includes(val))){
            win = true;
            h1.innerText = "User-2 Won";
            console.log("User-2 win");
            flag = 0;
            disableButtons();
        }
    }

    if (user1.length + user2.length === 9 && !win){
        h1.innerText = "Draw";
    }

   
}

function reset(){
    user1 = [];
    user2 =[];
    let i =0;

    user1Chance = true;
    user2Chance = false;

    btns.forEach(btn=>{
        btn.innerText = `${i}`;
        i++;
        btn.classList.remove("player-x");
        btn.classList.remove("player-o");
        btn.disabled = false;
    })

    h1.innerText = "Tic-Tac-XO";
}


resetbtn.addEventListener("click",()=>{
    reset();
})

document.addEventListener("keydown",(e)=>{
    if(e.key == 'Backspace'){
        reset();
    }
})


// function trackKey(){
//     trackPlayer.forEach((player)=>{
//             if (user1Chance && player.id === "x") {
//             player.classList.add("player-xTracker");
//             player.classList.remove("player-oTracker");
//         } else if (user2Chance && player.id === "y") {
//             player.classList.add("player-oTracker");
//             player.classList.remove("player-xTracker");
//         }
//     })
// }

