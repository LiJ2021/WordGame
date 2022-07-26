//-----------computer stuff -----------------------------
//list possible words computer will use
function computersWord(){
    
    let randomWord1 = ['chutzpah', 'addition', 'blithely', 'exciting', 'beautiful', 'actually', 'therefor', 'enacting']

//randomly choose word computer will use
//(future: use npm random word generator - https://www.npmjs.com/package/random-words){
let computerWord = randomWord1[Math.floor(Math.random() * randomWord1.length)] 
}

//do I need to call the function?
computersWord(computerWord)