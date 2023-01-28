const container = document.querySelector(".container")
const ansDiv = document.createElement("div")
const gcontainer = document.createElement("div")
gcontainer.classList = "gamecontainer"
const gameContainer = document.createElement("div")
//WORDS
const words = ["git", "foreach", "format", "status", "facebook","instagram","snapchat", "twitter", "jeffbezos", "tesla", "spacex"]
//KEYS
const keys = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

function randomNumb() {
    let randomer = Math.floor(Math.random() * words.length)
    return randomer;
}



const randomWord = words[randomNumb()].toUpperCase()
const keysContainer = document.createElement("div")
keysContainer.classList = "key-container";

const anskeysContainer = document.createElement("div")
anskeysContainer.classList = "anskey-container";

for (let i = 0; i < randomWord.length; i++) {
    const answerKey = document.createElement("div")
    answerKey.classList = "answerkeys";
    anskeysContainer.appendChild(answerKey)
}
//KEYS WRITE

for (let i = 0; i < keys.length; i++) {

    const keysDiv = document.createElement("div")
    keysDiv.classList = "keystyle";
    keysDiv.innerHTML = keys[i]
    keysContainer.appendChild(keysDiv)
}

ansDiv.classList = "answer";
gameContainer.classList = "game-container";
ansDiv.innerHTML = randomWord;

container.appendChild(ansDiv)
container.appendChild(gcontainer)
gcontainer.appendChild(gameContainer)
gcontainer.appendChild(anskeysContainer)
container.appendChild(keysContainer)

const keystyle = document.querySelectorAll(".keystyle")
const answerkeys = document.querySelectorAll(".answerkeys")



for (let i = 0; i < keys.length; i++) {
    keystyle[i].addEventListener("click", (e) => {
        const clickItem = e.target.textContent;
        var randomWordArray = []
        for (let i = 0; i < randomWord.length; i++) {
            randomWordArray.push(randomWord.substring(i).substring(0,1))     
        }

       
            if (randomWordArray.includes(clickItem)) {
                keystyle[i].style.background = "darkgreen"           
                console.log("var");
                // for (let i = 0; i < answerkeys.length; i++) {
                //     answerkeys[i].innerHTML = randomWord.substring(i).substring(0, 1);
                // } 
            }else{
                keystyle[i].style.opacity = "0.20"
            }        
     


    }) 
}

// answerKey.innerHTML = randomWord.substring(i).substring(0, 1);