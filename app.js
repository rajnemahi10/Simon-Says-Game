let gameSeq=[];
let userSeq=[];

let greatlevel=0;
let color=["red","yellow","green","purple"];
let started=false;
let level=0;

document.addEventListener("keypress",function(){
    if(started==false)
    {
        started=true;

        levelup();
    }
});

function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },300);
}
function levelup(){
    userSeq=[];
    level++;

    let h2=document.querySelector("h2");
        h2.innerText=`Level ${level} & Highest Score is ${greatlevel}`;
    
    let randIdx=Math.floor(Math.random()*color.length);
    let randColor=color[randIdx];
    let randbtn=document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    btnflash(randbtn);
    


}
// function check(){
//     let j=0;
//     for(j=0;j<level;j++)
//     {
//         if(gameSeq[j]!=userSeq[j])
//             break;
//     }
//     if(j!=level)
//     {
//         //stop game
//     }
//     else{
//         userSeq=[];
//         levelup();


//     }
// }
// let t=0;
// let cont=document.querySelector(".btn-container");
// cont.addEventListener("click",function(event){
//     if(event.target.nodeName=="BUTTON")
//     {
//         t++;
//         userSeq.push(event.target.classList[1]);
//         if(t==level)
//         {
//             t=0;
//             check();


//         }

//     }
//  });

function checkAns(idx){
    if(userSeq[idx]==gameSeq[idx])
    {
        if(userSeq.length==gameSeq.length)
        {
            setTimeout( levelup,1000);
        }
           
    }
    else{
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },300);
        
        let h2 = document.querySelector("h2");
        if(level>greatlevel)
            greatlevel=level;
        h2.innerHTML = `Game Over! Your score was <b>${level} Press any key to start, Highest Score is ${greatlevel}`;
        //reset
        level = 0;
        gameSeq = [];
        started = false;
    }
}
function btnPress(){
    let btn=this;
    btnflash(btn);

    userColor=btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}

let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}




