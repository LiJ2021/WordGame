// //-----------computer stuff -----------------------------
// //list possible words computer will use
randomWord1 = ['chutzpah', 'addition', 'blithely', 'exciting', 'beautiful', 'actually', 'therefor', 'enacting']

// //randomly choose word computer will use
// //(future: use npm random word generator - https://www.npmjs.com/package/random-words){
let computerWord = randomWord1[Math.floor(Math.random() * randomWord1.length)] 

//display computerWord on in pug page 
document.getElementById("computerWord").innerHTML = computerWord

//corresponding randomWordArray based on computerWord
function getComputerWordArray() {

        if (computerWord === 'chutzpah'){
           return ['caph', 'chap', 'chat', 'hath', 'haut', 'pact', 'path', 'phat', 'phut', 'putz', 'tach', 'caput', 'chapt', 'hatch', 'hutch', 'patch', 'hutzpa', 'chutzpa', 'hutzpah']
           }
       if (computerWord === 'addition'){
           return [ 'adit',   'anti',   'dado',   'dato',   'dido',   'dino',   'dint',   'dita',   'doat',   'doit',   'dona',   'inia',   'inti',   'into',   'iota',   'naoi',   'nidi',   'nodi',   'nota',   'tain',   'toad',  ]
           }
       if (computerWord === 'blithely'){ 
           randomWordArray =['bell',   'belt',   'beth',   'bile',   'bill',   'bite',   'blet',   'byte',   'elhi',   'heil',   'hell',   'hill',   'hilt',   'hyte',   'illy',   'lilt',   'lily',   'lite',   'tell',   'they',   'tile',   'till',   'yell',   'yeti',   'yill', 'belly',   'billy',   'blite',   'ethyl',   'hilly',   'libel',   'lilty',   'lithe',   'telly',   'thill', 'billet',   'blithe', 'lithely', ]
           }
       if (computerWord === 'exciting'){ 
           randomWordArray =['cent',   'cine',   'cite',   'etic',   'exit',   'gent',   'gien',   'gite',   'inti',   'next',   'nice',   'nite',   'nixe',   'tine',   'ting', 'exing',   'genic',   'genii',   'icing',   'nixie',   'tinge',   'xenic', 'citing',   'ignite',   'incite',   'tieing', 'exiting']
           }
       if (computerWord === 'beautiful'){ 
           randomWordArray =['abet',   'able',   'abut',   'alef',   'alif',   'alit',   'bail',   'bait',   'bale',   'bate',   'beat',   'beau',   'belt',   'beta',   'bile',   'bite',   'blae',   'blat',   'blet',   'blue',   'bute',   'etui',   'fail',   'fate',   'feal',   'feat',   'felt',   'feta',   'fiat',   'fila',   'file',   'flab',   'flat',   'flea',   'flit',   'flub',   'flue',   'fuel',   'ilea',   'late',   'lati',   'latu',   'leaf',   'left',   'lief',   'lieu',   'life',   'lift',   'lite',   'litu',   'luau',   'lube',   'lute',   'tabu',   'tael',   'tail',   'tale',   'tali',   'teal',   'tela',   'tile',   'tuba',   'tube',   'tufa',   'tule',  'beaut',   'befit',   'blate',   'bleat',   'blite',   'bluet',   'built',   'butle',   'fable',   'fault',   'fetal',   'filet',   'flite',   'flute',   'lutea',   'table',   'telia',   'tubae',   'tubal',   'utile', 'albeit',   'albite',   'fetial',   'fibula',   'futile',   'tabuli',   'tubful',   'tubule', 'fibulae', 'fauteuil']
           }''
       if (computerWord === 'actually'){ 
           randomWordArray =['acta',   'acyl',   'ally',   'call',   'caul',   'clay',   'cull',   'cult',   'lacy',   'latu',   'tala',   'talc',   'tall',   'yuca', 'allay',   'alula',   'calla',   'cully',   'tally', 'actual',   'cullay']
           }
       if (computerWord === 'therefor'){ 
           randomWordArray =['feet',   'fere',   'fete',   'fore',   'fort',   'free',   'fret',   'froe',   'heft',   'here',   'hero',   'hoer',   'reef',   'reft',   'rete',   'rote',   'thee',   'thro',   'tore',   'torr',   'tree',   'tref', 'ether',   'fetor',   'forte',   'forth',   'freer',   'frere',   'frore',   'froth',   'ofter',   'other',   'refer',   'retro',   'there',   'three',   'throe', 'ferret',   'hefter',   'hereof',   'hereto',   'hetero',   'retore',   'rhetor', 'frother',   'thereof']
           }
       if (computerWord === 'enacting'){ 
           randomWordArray =['acne',   'agin',   'aine',   'ante',   'anti',   'cage',   'cain',   'cane',   'cant',   'cate',   'cent',   'cine',   'cite',   'etic',   'etna',   'gaen',   'gain',   'gait',   'gane',   'gate',   'gent',   'geta',   'gien',   'gite',   'gnat',   'neat',   'nice',   'nine',   'nite',   'tace',   'tain',   'tang',   'tine',   'ting',  'acing',   'actin',   'agent',   'anent',   'antic',   'enact',   'eniac',   'entia',   'genic',   'giant',   'inane',   'nance',   'tenia',   'tinea',   'tinge', 'acetin',   'acting',   'anting',   'canine',   'caning',   'cannie',   'centai',   'eating',   'enatic',   'encina',   'gannet',   'incage',   'incant',   'incent',   'ingate',   'innage',   'innate',   'tannic', 'ancient',   'anteing',   'antigen',   'canting',   'gentian',  ]
           }
      
    //   console.log(randomWordArray)
      return randomWordArray

    }
   
//-----------------------------user stuff ----------------------------

points = 0;
let playersGuess = [];

//retrieve the word the player entered from the webpage


//compare the players word to the words in the array based on computer word
//if the playersWord equals a word in the array, points go up by one
function playersWords(){
    let randomWordArray = getComputerWordArray()
    // console.log(randomWordArray)
    //retrieve players word from pug page
     playersWord = document.getElementById("userword").value
     console.log(playersWord)
    let pointsPossible = randomWordArray.length
        if((randomWordArray.includes(playersWord)) && (!playersGuess.includes(playersWord))){
        //how to make sure that player can only match  and add the word once?
        console.log ("matched word: ", playersWord)
        
        points += 1       
        //capture users guesses - probably need to push to an array
        
        playersGuess.push(playersWord)
        //how to append words on the webpage so that they stay for the duration of the game?
        //make a tag on the play pug page
        //push the correct guesses into the array
        //can I display the array

        //how to make sure that player cant use computer word - i mean its not in the array, but do I want an error message 
        let guessElement = document.createElement("p")
        guessElement.innerHTML = playersWord
        document.getElementById("playersGuess").appendChild(guessElement)
        
         return 
    } else{
        alert ("Not a match! Try again")
       }
   
 } 




//possible points are determined by array length
//points board should read `${points}` out of `${pointsPossible}` "possible"

//capture users guesses - probably need to push to an array
//let playersGuess = []
//how to append words on the webpage so that they stay for the duration of the game

//keep track of points


//another option?  create an object called words and have the corresponding array in the object like:
//const words = [ word: chutzpah, 
//              array: [all the words in the array associated with chutzpah]]