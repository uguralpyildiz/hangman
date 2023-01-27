const container = document.querySelector(".container")
const ansDiv = document.createElement("div")
const gcontainer = document.createElement("div")
gcontainer.classList = "gamecontainer"
const gameContainer = document.createElement("div")
//WORDS
var words = ["git", "foreach", "format", "status", "facebook","instagram","snapchat", "twitter", "jeffbezos", "tesla", "spacex"]
//KEYS
const keys = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const randomWord = words[Math.floor(Math.random() * words.length)].toUpperCase()
const keysContainer = document.createElement("div")
keysContainer.classList = "key-container";

const anskeysContainer = document.createElement("div")
anskeysContainer.classList = "anskey-container";

for (let i = 0; i < randomWord.length; i++) {
    const answerKey = document.createElement("div")
    answerKey.classList = "answerkeys";


    // show answer
    // answerKey.innerHTML = randomWord.substring(i).substring(0,1);


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
