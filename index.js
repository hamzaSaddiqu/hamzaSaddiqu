// let firstCard =getRandomNumber();
// let secondCard = getRandomNumber();
// let cards=[firstCard,secondCard]
// let sum = firstCard + secondCard;
// let message = "";

// let sumEl = document.getElementById("sum-el");
// let cardEl = document.getElementById("card-el");
// let result = document.getElementById("result")

// let player = {
//     name:"Hamza",
//     price:175
// }

// let playerEl=document.getElementById("player-el");
// playerEl.textContent=player.name + ": $"+ player.price ;


// function start() {
//     renderGame();
// }

// function renderGame() {
//     cardEl.innerText = "Card:"

//     for(let i=0;i<cards.length;i++){
//         cardEl.textContent+=cards[i]+" , "
//     }
//     sumEl.innerText = "Sum:" + sum;
//     if (sum < 21) {
//         result.innerText = "Do You Want to Draw a New Card ?";
//     }

//     else if (sum === 21) {
//         result.innerText = "You've got a BlackJack !!";
//     }
//     else {
//         result.innerText = "You're Out of the Game.";
//     }
// }
// function newCard() {
//     if(sum<21){
//         let newCard = getRandomNumber();
//         sum += newCard;
//         cards.push(newCard);
//         console.log(cards)
//         renderGame()
//     }
   
// }

// function getRandomNumber(){
//     let randomNumber=Math.floor(Math.random()*13)+1;
//     if(randomNumber===1){
//         return 11;
//     }
//     else if(randomNumber >=11 && randomNumber <=13){
//         return 10;
//     }
//     else{
//         return randomNumber;
//     }
// }





// let boxx=document.getElementById("box");
// boxx.addEventListener("click",function(){
//     console.log("I Want to open the Box.")
// })

let myLeed=["www.abc.com","www.xyz.com","www.mno.com"];
const inputEl=document.getElementById("input-el");
const inputBtn=document.getElementById("input-btn");
const ulEl=document.getElementById("ul-el")
inputBtn.addEventListener("click", function(){
    
    myLeed.push(inputEl.value)
    console.log(myLeed)
})
let listItems=""


for(let i=0; i<myLeed.length; i++){
    listItems +="<li>" + myLeed[i] + "<li/>";
}
ulEl.innerHTML=listItems

// const container=document.getElementById("con");
// container.innerHTML="<button>Buy!</button>"
// container.addEventListener("click",function(){
//     container.innerHTML+="<p>Thank you for buying</p>"
// })