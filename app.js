const container = document.querySelector(".container")
const ansDiv = document.createElement("div")
//WORDS
var words = ["git", "foreach", "format", "status", "facebook","instagram","snapchat", "twitter", "jeff bezos", "tesla", "spacex"]
//KEYS
const keys = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];



//KEYS WRITE
for (let i = 0; i < keys.length; i++) {
    const keysDiv = document.createElement("div")
    keysDiv.classList = "keystyle";
    keysDiv.innerHTML = keys[i]
    container.appendChild(keysDiv)
}
ansDiv.classList = "answer";
ansDiv.innerHTML = words[Math.floor(Math.random() * words.length )]

container.appendChild(ansDiv)