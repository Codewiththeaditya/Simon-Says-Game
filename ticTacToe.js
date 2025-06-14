let btns = document.querySelectorAll("button");
let h1 = document.querySelector("h1");

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



btns.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        if(user1Chance){
            user2Chance = true;            //Chance toogle
            user1Chance = false;
            user1.push(parseInt(btn.id));  //user1 input store/track
            btn.innerText = "X";            //change in css
            btn.classList.add("player-x");
            btn.disabled = true;
            winChecker();
            return;
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
    })
});

function disableButtons(){
    btns.forEach(btn => {
        btn.disabled = true;
    });
}


function winChecker(){
    for(pattern of winPattern){
        if(pattern.every(val => user1.includes(val))){
            h1.innerText = "User-1 Won !";
            console.log("User-1 win");
            flag =0;
            disableButtons();

        }else if (pattern.every(val => user2.includes(val))){
            h1.innerText = "User-2 Won";
            console.log("User-2 win");
            flag = 0;
            disableButtons();
        }
    }
}
