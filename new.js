// alert("bikash")
// let a = setTimeout(function(){
//     alert("i m in the timer")
// } ,5000)
// console.log(a)

// let para1 = document.createElement("p");
// para1.innerText = "hey I am Bikash";
// document.querySelector("body").append(para1);

// para1.classList.add("red");


// let div = document.createElement("div");
// let h1 = document.createElement("h1");
// let para = document.createElement("p");

// h1.innerText = "I am in the div";
// para.innerText = "Me too";

// div.append(h1);
// div.append(para);

// div.classList.add("box");

// document.querySelector("body").append(div);

// let btn = document.querySelector("button");
// btn.onmouseenter = colorchange;
// btn.onclick = sayhello;

// function sayhello(){
//     alert("Hello");
// }

// function colorchange(){
//     console.log("You entered a button");
// }


// let btn = document.querySelector("button");


// btn.addEventListener("click" , function(){
//     let h1 = document.querySelector("h1");
//     let randomColor = getRandomColor();
//     h1.innerText = randomColor;

//     let div = document.querySelector("div");
//     div.style.backgroundColor=randomColor;
//     console.log("color updated");
// });

// function getRandomColor(){
//     let red = Math.floor(Math.random() * 255);
//     let green = Math.floor(Math.random() * 255);
//     let blue = Math.floor(Math.random() * 255);

//     let color = `rgb(${red},${green},${blue})`;
//     return color;
// }

// let inp = document.querySelector("#text");
// let para = document.querySelector("p");

// inp.addEventListener("input",function(){
//     para.innerText = this.value;
// });

let gameSeq = [];
let userSeq = [];

let btns = ["yellow","red","purple","green"];

let started = false;
let level = 0;

let hh2 = document.querySelector("h2");


document.addEventListener("keypress", function(){
    if(started == false){
    console.log("game started");
    started = true;
    levelUp();
    }
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },100);

}
function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");

    },100);
}

function levelUp(){
    userSeq = [];
    level++;
    hh2.innerText = `level ${level}`;

    let randIdx = Math.floor(Math.random() * 3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);

    gameSeq.push(randColor);
    console.log(gameSeq);

    gameFlash(randBtn);
}
function checkAns(idx){
    

    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp,1000);

        }
    }else{
        hh2.innerHTML = `Game Over! your score was <b>${level}</b> <br> Press any key to start.`;
        document.querySelector("body").style.backgroundColor = "red";
        
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        },150);
         reset();
    }
}

function btnPress(){
    let btn = this;
    userFlash(btn);

     userColor = btn.getAttribute("id");
     userSeq.push(userColor);

     checkAns(userSeq.length-1);
}
let allBtn = document.querySelectorAll(".btn");
for(btn of allBtn){
    btn.addEventListener("click",btnPress);
}

function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}


