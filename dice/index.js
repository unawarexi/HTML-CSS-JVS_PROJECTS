// let box = document.getElementById('box');
// let button = document.getElementById('btn');


// function changecolor(){
//   if(box.style.background == 'blue'){   
//         box.style.background = 'red';
//     }else{
//         box.style.background = 'blue';
//     }
// }


// // function popout(show){
// // const pop = document.querySelector('.box')
// // pop.innerHTML = `<img src='${show}' width='100%' height='100%'>` 
// // }

// // function changepic(){
// //     const pop = document.querySelector('.box')
// //     pop.innerHTML = ''
    
// // }




























// function popout(show){
//     const pop = document.querySelector('.box');
//     pop.innerHTML = `<img src= '${show}' width= '100%' , height= '100%' >`

// }

// function changepic(){
//     const pop =document.querySelector('.box')
//     pop.innerHTML = ""



// }



// john ={
//     height: 50.90,
//     numm: 20,
//     // addd: this.height + this.numm,
// }

// var add= john.height+john.numm
// john_average = (add)/2
//  console.log(john_average)


// mary = {
//    height: 90.5,
//    extra: 14,
// }

// var mary_sum= mary.height+mary.extra
// mary_average = (mary_sum)/2
// console.log(mary_average)

// var both= john_average > mary_average

// if (both) {
//     console.log(                    'isjons average greater than mary?' +both)
// }
// else{
//    console.log('ismary average less than jons?' +both)
// }


// document.querySelector(".player1_score" + activeplayer).textContent=dice
var scores = [0, 0]
var roundscore= 0
var activeplayer= 0
var dice
var gameplayin=true

document.querySelector(".numm0").innerHTML= 0
document.querySelector(".numm1").innerHTML= 0
document.querySelector(".player1_score0").innerHTML= 0

document.querySelector(".dice_img").style.display="none"

// newGame()

document.querySelector(".roll_dice").addEventListener('click', () =>{

    if (gameplayin){

        dice = Math.floor(Math.random() * 6)+1
    
      var diceDom= document.querySelector(".dice_img")
       diceDom.style.display="block"
       diceDom.src= "DICE-"+ dice + ".jpg"
    
       if(dice !== 1){
        roundscore += dice
        document.querySelector(".player1_score" + activeplayer).textContent=roundscore
    
       } else{
           nextPlayer()
       
        }
    }
   

})

document.querySelector(".hold").addEventListener("click", () => {
  if (gameplayin) {
    scores[activeplayer] += roundscore
    document.querySelector(".numm" + activeplayer).innerHTML = scores[activeplayer]
 
    if ( scores[activeplayer] >= 20){
     document.querySelector(".playon" + activeplayer).textContent= 'winner'
     document.querySelector(".dice_img").style.display="none"
      
     gameplayin = false
 
    } else{
        nextPlayer()
 
    }
 
  }
   


   
})


function nextPlayer (){
    activeplayer === 0 ? activeplayer = 1 : activeplayer=0
    roundscore = 0
    document.querySelector(".player11 ").classList.toggle("active")
    document.querySelector(".player1").classList.toggle("active")
    document.querySelector(".dice_img").style.display="none"
    document.querySelector(".player1_score0").innerHTML= 0
    document.querySelector(".player1_score1").innerHTML= 0

}

document.querySelector(".new_game").addEventListener("click", () => {
     newGame()
})

function newGame() {
     var scores = [0, 0]
var roundscore= 0
var activeplayer= 0
var dice
var gameplayin= true
document.querySelector(".numm0").innerHTML= 0
document.querySelector(".numm1").innerHTML= 0
document.querySelector(".player1_score0").innerHTML= 0
document.querySelector(".player1_score1").innerHTML= 0
     document.querySelector(".dice_img").style.display="none"


dice = Math.floor(Math.random() * 6)+1

}

