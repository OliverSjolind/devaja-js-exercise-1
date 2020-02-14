let birdNames = ['Charlie', 'test']
let birdDisplay = document.getElementById('bird-display');
let i = 0;
birdDisplay.innerText = birdNames[i]
let firstLetterTurn = true;
document.addEventListener('keydown', handleKeyPress, false)

function handleKeyPress(event) {
    if (event.key === getCurrentLetter()) {
        removeKey(event.key)
    }

    function getCurrentLetter() {
        return (firstLetterTurn ? birdNames[i][0].toLowerCase() : birdNames[i][birdNames[i].length - 1].toLowerCase())
    }

    function removeKey(key) {
        let upperCase = key.toUpperCase()
        let re = new RegExp(key, "gi");
        birdNames[i] = birdNames[i].replace(re, "")
        update();
    }

    function update() {
        birdDisplay.innerText = birdNames[i]
        firstLetterTurn = !firstLetterTurn
        if (!birdNames[i]) {
            i++
            if (i === birdNames.length) {
                birdDisplay.innerText = "End of array!"
                document.removeEventListener('keydown', handleKeyPress, false)
            } else {
                birdDisplay.innerText = birdNames[i]
                firstLetterTurn = true;
            }
        }
    }
}