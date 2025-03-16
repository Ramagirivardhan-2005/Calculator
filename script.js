document.addEventListener("DOMContentLoaded", () => {
let button=document.querySelectorAll(".Game");
let res=document.querySelector("h3");
let us=document.querySelector(".mm");
let com=document.querySelector(".ax");
let body=document.querySelector("body");
let rs=document.querySelector("kk");
let yo=document.querySelector(".You");
let comP=document.querySelector(".Comp");
let t=document.querySelector(".Total");
let tie=document.querySelector(".Tie");
let form=document.querySelector(".form");
let nam=document.querySelector("h2");
let dat=document.querySelector(".age");
let total=0;
let you=0;
let computer=0;
let ti=0;
button.forEach(btn=>{
    btn.onclick=()=>{
    const choice=btn.id;
    playgame(choice);
    };
});
const playgame=(choice)=>{
    const b=compchoice();
    if(b===choice){
        us.innerText=`You: ${choice}`;
        com.innerText=`computer: ${b}`;
        res.innerText="Its Tie!";
        res.style.backgroundColor="goldenrod";
        us.style.backgroundColor="skyblue";
        com.style.backgroundColor="skyblue";
        ti++;
    tie.innerText=`${ti}`;
    }
    else if((b==='Scissor' && choice==='Rock') || (b==='Rock' && choice==='Paper') || (b==='Paper' && choice==='Scissor')){
        res.innerText="Congratiolations you Won The Round!";
        us.innerText=`You: ${choice}`;
        com.innerText=`computer: ${b}`;
        res.style.backgroundColor="Green";
        us.style.backgroundColor="Green";
        com.style.backgroundColor="Green";
        you++;
        yo.innerText=`${you}`;
    }
    else{
        res.innerText="You Lost The Round";
        us.innerText=`You: ${choice}`;
        com.innerText=`computer: ${b}`;
        res.style.backgroundColor="red";
        us.style.backgroundColor="red";
        com.style.backgroundColor="red";
        computer++;
        comP.innerText=`${computer}`;
        
    };
    total++;
    t.innerText=`${total}`;
};
function compchoice(){
    const arr=["Rock","Paper","Scissor"];
    const index=Math.floor(Math.random()*3);
    const compopt=arr[index];
    return compopt;
};
rs.addEventListener("click",()=>{
alert(`\t\t\t***SCORE BOARD***\nTotal Rounds You Won = ${yo.textContent}\nTotal Rounds You lose = ${comP.textContent}\nTotal Tie Rounds = ${tie.textContent}\nTotal Rounds  played = ${t.textContent}`);
total=0;
you=0;
computer=0;
ti=0;
yo.innerText=0;
t.innerText=0;
comP.innerText=0;
tie.innerText=0;
res.style.backgroundColor="blue";
us.style.backgroundColor="White";
com.style.backgroundColor="White";
us.innerText="";
com.innerText="";
res.innerText="Start playing Game";
});
form.addEventListener("submit", (event) => {
    event.preventDefault();
    userName = document.querySelector(".name").value;
    const dateOfBirth = document.querySelector(".date").value;
    const currentYear = new Date().getFullYear();
    userAge = currentYear - new Date(dateOfBirth).getFullYear();
    nam.innerText = `Name: ${userName}`;
    dat.innerText = `Age: ${userAge}`;
});
});



