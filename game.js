

class Player{
    constructor(name,score){
        this.name = name
        this.score = score
        this.turn = false
    }
}

const player1 = new Player('Ray',0)
const player2 = new Player('Junior',0)



//create a function that flips the cards


const card1 = {
    dom: document.getElementById("card1"),
    value:''
}
const card2 = {
    dom: document.getElementById("card2"),
    value:''
}
const card3 = {
    dom: document.getElementById("card3"),
    value:''
}
const card4 = {
    dom: document.getElementById("card4"),
    value:''
}
const card5 = {
    dom: document.getElementById("card5"),
    value:''
}
const card6 = {
    dom: document.getElementById("card6"),
    value:''
}
const card7 = {
    dom: document.getElementById("card7"),
    value:''
}
const card8 = {
    dom: document.getElementById("card8"),
    value:''
}


// card1.dom.innerHTML = 'fdsfd'
// const card1 = document.getElementById("card1")
// const card2 = document.getElementById("card2")
// const card3 = document.getElementById("card3")
// const card4 = document.getElementById("card4")
// const card5 = document.getElementById("card5")
// const card6 = document.getElementById("card6")
// const card7 = document.getElementById("card7")
// const card8 = document.getElementById("card8")



card1.dom.addEventListener("click",(e) => {
    card1.dom.classList.toggle("flipCard")
    card1.value = card1.dom.getAttribute('src')
    chosenCards.push(card1)
    console.log(card1.value)
    game()
})
card2.dom.addEventListener("click",(e) => {
    card2.dom.classList.toggle("flipCard")
    card2.value = card2.dom.getAttribute('src')
    chosenCards.push(card2)
    console.log(card2.value)
    game()
})
card3.dom.addEventListener("click",(e) => {
    card3.dom.classList.toggle("flipCard")
    card3.value = card3.dom.getAttribute('src')
    chosenCards.push(card3)
    console.log(card3.value)
    game()
})
card4.dom.addEventListener("click",(e) => {
    card4.dom.classList.toggle("flipCard")
    card4.value = card4.dom.getAttribute('src')
    chosenCards.push(card4)
    console.log(card4.value)
    game()
})
card5.dom.addEventListener("click",(e) => {
    card5.dom.classList.toggle("flipCard")
    card5.value = card5.dom.getAttribute('src')
    chosenCards.push(card5)
    console.log(card5.value)
    game()
})
card6.dom.addEventListener("click",(e) => {
    card6.dom.classList.toggle("flipCard")
    card6.value = card6.dom.getAttribute('src')
    chosenCards.push(card6)
    console.log(card6.value)
    game()
})
card7.dom.addEventListener("click",(e) => {
    card7.dom.classList.toggle("flipCard")
    card7.value = card7.dom.getAttribute('src')
    chosenCards.push(card7)
    console.log(card7.value)
    game()
})
card8.dom.addEventListener("click",(e) => {
    card8.dom.classList.toggle("flipCard")
    card8.value = card8.dom.getAttribute('src') 
    chosenCards.push(card8)
    console.log(card8.value)
    game()
})

const arrCards = [card1,card2,card3,card4,card5,card6,card7,card8]


const randomize = ()=>{
    let list = ['A','A','B','B','C','C','D','D']
    list = list.sort(() => Math.random() - 0.5)
    for(let i = 0; i < list.length; i++){
        arrCards[i].dom.setAttribute('src',list[i])
    
    }
}
randomize()

for(item of arrCards){
    switch(item.dom.getAttribute('src')){
        case 'A':
            item.dom.style.cssText+=`background-image:url(${"images/Griffey.jpg"})` 
            break
        case 'B':
            item.dom.style.cssText+=`background-image:url(${'images/Jackie.jpg'})`
            break
        case 'C':
            item.dom.style.cssText+=`background-image:url(${'images/Jeter.jpg'})`  
            break
        case 'D':
            item.dom.style.cssText+=`background-image:url(${'images/Mickey.jpg'})`  
            break  
    }
}

//match cards to each click
let chosenCards = []
function matchCards(a,b){
    if(a.value === b.value){
        console.log('matched')
    }else{
        flipBack(a.dom)
        flipBack(b.dom)
        console.log('no match')
    }
}
function game(){
    if(chosenCards.length >= 2){
        setTimeout(matchCards(chosenCards[0],chosenCards[1]),2000)
        chosenCards = []        
    }else{

    }
}
function flipBack(card){
    card.classList.toggle("flipCard")   
}
