let word, wordCombos, enteredWord, points, pointsPossible, randomWord, randomWord1, randomWordArray, wordSelectionArray, playersWord

// //-----------computer stuff -----------------------------
// //list possible words computer will use
randomWord1 = ['chutzpah', 'addition', 'blithely', 'exciting', 'beautiful', 'actually', 'therefor', 'enacting']

// //randomly choose word computer will use
// //(future: use npm random word generator - https://www.npmjs.com/package/random-words){
// let computerWord = randomWord1[Math.floor(Math.random() * randomWord1.length)] 

//use corresponding randomWordArray based on computerWord
function getComputerWordArray() {
    for(let i=0; i< randomWord1.length; i++) {
        let chosenComputerWord = randomWord1[i];
        if (i = 0){ //word is chutzpah
           randomWordArray =['caph', 'chap', 'chat', 'hath', 'haut', 'pact', 'path', 'phat', 'phut', 'putz', 'tach', 'caput', 'chapt', 'hatch', 'hutch', 'patch', 'hutzpa', 'chutzpa', 'hutzpah']
           }
       if (i = 1){ //word is addition
           randomWordArray =[ 'adit',   'anti',   'dado',   'dato',   'dido',   'dino',   'dint',   'dita',   'doat',   'doit',   'dona',   'inia',   'inti',   'into',   'iota',   'naoi',   'nidi',   'nodi',   'nota',   'tain',   'toad',  ]
           }
       if (i = 2){ //word is blithely
           randomWordArray =['bell',   'belt',   'beth',   'bile',   'bill',   'bite',   'blet',   'byte',   'elhi',   'heil',   'hell',   'hill',   'hilt',   'hyte',   'illy',   'lilt',   'lily',   'lite',   'tell',   'they',   'tile',   'till',   'yell',   'yeti',   'yill', 'belly',   'billy',   'blite',   'ethyl',   'hilly',   'libel',   'lilty',   'lithe',   'telly',   'thill', 'billet',   'blithe', 'lithely', ]
           }
       if (i = 3){ //word is exciting
           randomWordArray =['cent',   'cine',   'cite',   'etic',   'exit',   'gent',   'gien',   'gite',   'inti',   'next',   'nice',   'nite',   'nixe',   'tine',   'ting', 'exing',   'genic',   'genii',   'icing',   'nixie',   'tinge',   'xenic', 'citing',   'ignite',   'incite',   'tieing', 'exiting']
           }
       if (i = 4){ //word is beautiful
           randomWordArray =['abet',   'able',   'abut',   'alef',   'alif',   'alit',   'bail',   'bait',   'bale',   'bate',   'beat',   'beau',   'belt',   'beta',   'bile',   'bite',   'blae',   'blat',   'blet',   'blue',   'bute',   'etui',   'fail',   'fate',   'feal',   'feat',   'felt',   'feta',   'fiat',   'fila',   'file',   'flab',   'flat',   'flea',   'flit',   'flub',   'flue',   'fuel',   'ilea',   'late',   'lati',   'latu',   'leaf',   'left',   'lief',   'lieu',   'life',   'lift',   'lite',   'litu',   'luau',   'lube',   'lute',   'tabu',   'tael',   'tail',   'tale',   'tali',   'teal',   'tela',   'tile',   'tuba',   'tube',   'tufa',   'tule',  'beaut',   'befit',   'blate',   'bleat',   'blite',   'bluet',   'built',   'butle',   'fable',   'fault',   'fetal',   'filet',   'flite',   'flute',   'lutea',   'table',   'telia',   'tubae',   'tubal',   'utile', 'albeit',   'albite',   'fetial',   'fibula',   'futile',   'tabuli',   'tubful',   'tubule', 'fibulae', 'fauteuil']
           }''
       if (i = 5){ //word is actually
           randomWordArray =['acta',   'acyl',   'ally',   'call',   'caul',   'clay',   'cull',   'cult',   'lacy',   'latu',   'tala',   'talc',   'tall',   'yuca', 'allay',   'alula',   'calla',   'cully',   'tally', 'actual',   'cullay']
           }
       if (i = 6){ //word is therefor
           randomWordArray =['feet',   'fere',   'fete',   'fore',   'fort',   'free',   'fret',   'froe',   'heft',   'here',   'hero',   'hoer',   'reef',   'reft',   'rete',   'rote',   'thee',   'thro',   'tore',   'torr',   'tree',   'tref', 'ether',   'fetor',   'forte',   'forth',   'freer',   'frere',   'frore',   'froth',   'ofter',   'other',   'refer',   'retro',   'there',   'three',   'throe', 'ferret',   'hefter',   'hereof',   'hereto',   'hetero',   'retore',   'rhetor', 'frother',   'thereof']
           }
       if (i = 7){ //word is enacting
           randomWordArray =['acne',   'agin',   'aine',   'ante',   'anti',   'cage',   'cain',   'cane',   'cant',   'cate',   'cent',   'cine',   'cite',   'etic',   'etna',   'gaen',   'gain',   'gait',   'gane',   'gate',   'gent',   'geta',   'gien',   'gite',   'gnat',   'neat',   'nice',   'nine',   'nite',   'tace',   'tain',   'tang',   'tine',   'ting',  'acing',   'actin',   'agent',   'anent',   'antic',   'enact',   'eniac',   'entia',   'genic',   'giant',   'inane',   'nance',   'tenia',   'tinea',   'tinge', 'acetin',   'acting',   'anting',   'canine',   'caning',   'cannie',   'centai',   'eating',   'enatic',   'encina',   'gannet',   'incage',   'incant',   'incent',   'ingate',   'innage',   'innate',   'tannic', 'ancient',   'anteing',   'antigen',   'canting',   'gentian',  ]
           }
      }
      console.log(randomWordArray)
      return randomWordArray

   }
   //getComputerWordArray()

//-----------------------------user stuff ----------------------------

//display computerWord on webpage 


//retrieve the word the player entered from the webpage
//playersWord = document.getElementById("userword")

//compare the players word to the words in the array based on computer word
//if the playersWord equals a word in the array, points go up by one
function playersWords(randomWordArray, playersWord){
    for (let i = 0; i < randomWordArray.length; i++){
    let pointsPossible = randomWordArray.length
    let points = 0;
    if (playersWord === randomWordArray[i]){
        //? - randomWordarray
        console.log ("matched word: ", randomWordArray[i])
        
        points += 1        
    }
    return randomWordArray[i] + " is a match!!"
  }
}
//what about forEach?
//possible points are determined by array length
//points board should read `${points}` out of `${pointsPossible}` "possible"





