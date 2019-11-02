// define all names
const deadOrAliveNames = [
  'Nelson Mandela',
  'Desmond Tutu',
  'Richard Nixon',
  'Olof Palme',
  'Prince',
  'Mikhail Gorbachev',
  'Jimmy Carter',
  'Gro Harlem Brundtland',
  'Edith Piaf',
  'Dolly Parton',
  'Hugh Hefner',
  'Silvio Berlusconi',
  'Gene Simmons',
  'Paul Stanley',
  'John Lennon',
  'Paul McCartney',
  'Ringo Starr',
  'George Harrison',
  'Sean Connery',
  'Alan Rickman',
  'Gary Oldman',
  'Bruce Lee',
  'Stan Lee',
  'Jet Li',
  'Michael Gambon',
  'Ian McKellen',
  'George Orwell',
  'Margaret Atwood',
  'Judi Dench',
  'Meryl Streep',
  'Julie Andrews',
  'Judy Garland',
  'Margaret Thatcher',
  'Ronald Reagan',
  'George H. W. Bush',
  'Hans-Wilhelm Steinfeld',
  'Ozzy Osbourne',
  'Patrick Swayze',
  'Bryan Adams',
  'Bruce Springsteen',
  'Martin Luther King Jr.',
  'Robin Williams',
  'Robbie Williams',
  'Barbra Streisand',
  'Lindsay Lohan',
  'Frank Sinatra',
  'Neil Armstrong',
  'Buzz Aldrin',
  'Chris Columbus',
  'Bill Gates',
  'Steve Jobs',
  'Stephen Hawking',
  'George Lazenby',
  'Roger Moore',
  'Timothy Dalton',
  'Muhammad Ali',
  'Martin Luther',
  'Mother Teresa',
  'Anne Frank',
  'George R. R. Martin',
  'Elton John',
  'Freddie Mercury',
  'Brian May',
  'Philip Glass',
  'Hans Zimmer',
  'Malcolm X',
  'Nikola Tesla',
  'Aung San Suu Kyi',
  'Franz Kafka',
  'Dick Van Dyke',
  'Hayao Miyazaki',
  'Haruki Murakami',
  'Heath Ledger',
  'David Attenborough',
  'Bill Bailey',
  'Stephen Fry',
  'Gordon Brown',
  'Pele',
  'Fat Ronaldo',
  'Audrey Hepburn',
  'Morgan Freeman',
  'Denzel Washington',
  'Bruce Willis',
  'John Travolta',
  'Jack Nicholson',
  'Jack White',
  'Jack Black',
  'Donald Trump\'s mum',
  'Michael J. Fox',
  'Mary-Kate Olsen',
  'Ashley Olsen',
  'Robbie Coltrane',
  'Richard Griffiths',
  'Maggie Smith',
  'Morten Harket',
  'Jan Garbarek',
  'Kim Jong-il',
  'Kim Jong-un',
  'Kim Il-sung',
  'Ban Ki-moon',
  'Boutros Boutros-Ghali',
  'Kyrre \"Kygo\" Gorvell-Dahl',
  'Tim \"Avicii\" Bergling',
  'Dolly the sheep',
  'Goran Persson',
  'Elisabeth \"Bettan\" Andreassen',
  'Warwick Davis',
  'Mark Williams',
  'Gordon Ramsay',
  'Celine Dion',
  'Jacques Chirac',
  'Nicolas Sarkozy',
  'Pope John Paul II',
  'Pope Benedict XV',
  'Pope Benedict XVI',
  'Pope Francis',
  'Christian Dior',
  'Coco Chanel',
  'Giorgio Armani',
  'Karl Lagerfeld',
  'Gianni Versace',
  'Jean-Claude Van Damme',
  'Gerard Depardieu',
  'Claude Francois',
  'Helen Mirren',
  'Oystein Sunde',
  'Oivind Blunck',
  'Thorvald Stoltenberg',
  'Mick Jagger',
  'Chris Cornell',
  'Christopher Lee',
  'Pete Townshend',
  'Pete Doherty',
  'Keith Richards',
  'Mark Hamill',
  'Jimi Hendrix',
  'Eric Clapton',
  'David Bowie',
  'Carrie Fisher',
  'David Hasselhoff',
  'Alan Alda',
  'Quincy Jones',
  'Steven Spielberg',
  'John Williams',
  'John McCain',
  'Joe Biden',
  'Pamela Anderson',
  'Jennifer Coolidge',
  'Al Gore',
  'Dick Cheney',
  'Yasser Arafat',
  'Shimon Peres',
  'Mahmoud Abbas',
  'Benjamin Netanyahu',
  'Ariel Sharon',
  'Arve Tellefsen',
  'Ole Bull',
  'Hu Jintao',
  'Liu Xiaobo',
  'Bill Nighy',
  'Liam Neeson',
  'Emma Thompson',
  'C. S. Lewis',
  'Lewis Carroll',
  'Salman Rushdie',
  'Paulo Coelho',
  'Jostein Gaarder',
  'M. C. Escher',
  'Andrea Bocelli',
  'Luciano Pavarotti',
  'Jose Carreras',
  'Bing Crosby',
  'John Coltrane',
  'Shania Twain',
  'Claude Debussy',
  'Gustav Holst',
  'Bill Nye',
  'Olaf Tufte',
  'Pierre Trudeau',
  'Stephen Harper',
  'Stephen King',
  'Neil Gaiman',
  'Mike Tyson',
  'Martha Stewart',
  'Barry Gibb',
  'Robin Gibb',
  'Maurice Gibb',
  'Cilla Black',
  'Leonard Cohen',
  'Joni Mitchell',
  'Bob Dylan',
  'Joan Baez',
  'Jim Morrison',
  'Janis Joplin',
  'Ronnie Van Zant',
  'Johnny Van Zant',
  'Robert Plant',
  'Diana Ross',
  'Bjorn Wirkola',
  'Tove Jansson',
  'Sean Penn',
  'Doris Lessing',
  'Arvo Part',
  'Jean Sibelius',
  'Ville \"Darude\" Virtanen',
  'Philip Pullman',
  'Liv Ullmann',
  'Django Reinhardt',
  'Eddie Van Halen',
  'Olivia Newton-John',
  'Frankie Valli',
  'Ingvar Kamprad',
  'John Goodman',
  'John Cleese',
  'Barry White',
  'Betty White',
  'Harrison Ford',
  'Donna Summer',
  'Hirohito of Japan',
  'Anurag Dikshit',
  'Kofi Annan',
  'Danny DeVito',
  'Kelsey Grammer',
  'Aleksandr Solzhenitsyn',
  'John Le Carre',
  'Enid Blyton',
  'Beatrix Potter',
  'Harper Lee',
  'Geoffrey Chaucer',
  'Amelia Earhart',
  'Rick Astley',
  'Billy Joel',
  'Paul Simon',
  'Art Garfunkel',
  'Alanis Morissette',
  'Sandy Shaw',
  'Jahn Teigen',
  'Rudolf Steiner',
  'Maria Montessori',
  'David Suchet',
  'Aretha Franklin',
  'Brigitte Bardot',
  'The Princess of Wales',
  'Margrethe II of Denmark',
  'Henrik of Denmark',
  'Carl XVI Gustaf of Sweden',
  'Queen Silvia of Sweden',
  'Thor Heyerdahl sr',
  'Thor Heyerdahl jr',
  'Cybill Shepherd',
  'Marlene Dietrich',
  'Margaret Court',
  'Helen Keller',
  'Priscilla Presley',
  'Elizabeth I',
  'Elizabeth II',
  'Robert \"Kool\" Bell',
  'Alexander Graham Bell',
  'John Logie Baird',
  'Sally Field',
  'Maya Angelou',
  'Emily Dickinson',
  'Harriet Backer',
  'Beyonce Knowles',
  'Zsa Zsa Gabor',
  'Elizabeth Taylor',
  'Danielle Steel',
  'Jilly Cooper',
  'Jane Goodall',
  'Julius the monkey',
  'Keiko the orca',
  'Knut the polar bear',
  'Emmeline Pankhurst',
  'Sonja Henie',
  'Estee Lauder',
  'Jane Fonda',
  'Bette Davis',
  'Oprah Winfrey',
  'Eva Peron',
  'Agatha Christie',
  'Virginia Woolf',
  'Whitney Houston',
  'Tina Turner',
  'Michael Schumacher',
  'Albert Einstein',
  'Isaac Newton',
  'Miles Davis',
  'John Coltrane',
  'Dizzy Gillespie',
  'Bing Crosby',
  'Herbie Hancock',
  'Quincy Jones III',
  'Eva Joly',
  'River Phoenix',
  'Joaquin Phoenix',
  'Michael Hutchence',
  'Mia Farrow',
  'Johan Cruyff'
];

const wikiUrl = "https://www.wikidata.org/w/api.php?action=wbgetentities&props=claims&sites=enwiki&format=json&titles="

// function to shuffle names
function shuffle(array) {
  let currentIndex = array.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex         = Math.floor(Math.random() * currentIndex);
    currentIndex       -= 1;
    temporaryValue      = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex]  = temporaryValue;
  }
  return(array);
}

// names for use in the game
let inGameNames = shuffle(deadOrAliveNames.slice(0));
const dispName  = document.getElementById("display-name");
// const numNames  = document.getElementById("num-names");
const leftText  = document.getElementById("left");
const rightText  = document.getElementById("right");
let currentName  = inGameNames.pop();
let numNamesLeft = inGameNames.length;
updateText();

// Generate a new name
const nameButton = document.getElementById("name");
nameButton.addEventListener("click", function(){
  updateData();
  updateText();
});

// Reset all of the names and shuffle
const resetButton = document.getElementById("reset");
resetButton.addEventListener("click", function(){
  inGameNames = shuffle(deadOrAliveNames.slice(0));
  updateData();
  updateText();
});

// Check wikidata 
/*   const wikiButton = document.getElementById("check-wiki");
  wikiButton.addEventListener("click", function(){
    let wikiName = getWikiName(); 
    let fullUrl  = (wikiUrl + wikiName + "&callback=jsonpCallback");
    jsonp(fullUrl);
  })
 */
  const deadButton = document.getElementById("guess-dead");
  let   deadGuess  = "dead"
  deadButton.addEventListener("click", function(){
    let wikiName = getWikiName(); 
    let fullUrl  = (wikiUrl + wikiName + "&callback=jsonpCallback");
    deadGuess = "dead"
    jsonp(fullUrl);
  })

  const aliveButton = document.getElementById("guess-alive");
  aliveButton.addEventListener("click", function(){
    let wikiName = getWikiName(); 
    let fullUrl  = (wikiUrl + wikiName + "&callback=jsonpCallback");
    deadGuess = "alive"
    jsonp(fullUrl);
  })

// pop one name off the end 
function updateData() {
  currentName  = inGameNames.pop();
  numNamesLeft = inGameNames.length;
}

// update text in html
function updateText() {
  dispName.textContent = currentName;
  // numNames.textContent = numNamesLeft;
  leftText.textContent = "";
  rightText.textContent = "";
}


// function to get title case
function titleCase(str){

   str = str.toLowerCase().split(' ');

   let final = [ ];

    for(let  word of str){
      final.push(word.charAt(0).toUpperCase()+ word.slice(1));
    }

  return final.join(' ')

}

// function to parse jsonp and update DOM
function jsonp(url) {
  var head   = document.head;
  var script = document.createElement("script");

  script.setAttribute("src", url);
  head.appendChild(script);
  head.removeChild(script);
}

function jsonpCallback(data) {
  let id = Object.keys(data.entities);
  if (id[0] === "-1") {
    if (currentName === "Thor Heyerdahl jr") {
      if (deadGuess === "dead") {
        leftText.innerText = "Alive";
      }
      if (deadGuess === "alive") {
        rightText.innerText = "Alive";
      }
    } else {
      deadText.innerText = "Unknown";
    } 
  } else {
    let claims = Object.keys(data.entities[id].claims);
    let dead   = claims.includes("P570");
    let isDead = "Alive"
    if (dead) {
      isDead = "Dead"
    }
    if (deadGuess === "dead") {
      leftText.innerText = isDead;
    }
    if (deadGuess === "alive")  {
      rightText.innerText = isDead;
    }
  }
}

function getWikiName() {
  let nameForWiki = titleCase(currentName).replace(/\s+/g, "_");
  switch(currentName) {
    case "Quincy Jones III":
      nameForWiki = "Quincy_Jones_III";
      break;
    case "Knut the polar bear":
      nameForWiki = "Knut_(polar_bear)";
      break;
    case "Keiko the orca":
      nameForWiki = "Keiko_(killer_whale)";
      break;
    case "Julius the monkey":
      nameForWiki = "Julius_(chimpanzee)";
      break;
    case "Beyonce Knowles":
      nameForWiki = "Beyoncé";
      break;
    case "Robert \"Kool\" Bell":
      nameForWiki = "Robert_\"Kool\"_Bell"
      break;
    case "Elizabeth II":
      nameForWiki = "Elizabeth_II";
      break;
    case "Elizabeth I":
      nameForWiki = "Elizabeth_I_of_England";
      break;
    case "Thor Heyerdahl sr":
      nameForWiki = "Thor_Heyerdahl";
      break;
    case "Queen Silvia of Sweden":
      nameForWiki = "Queen_Silvia_of_Sweden";
      break;
    case "Carl XVI Gustaf of Sweden":
      nameForWiki = "Carl_XVI_Gustaf_of_Sweden";
      break;
    case "Henrik of Denmark":
      nameForWiki = "Henrik,_Prince_Consort_of_Denmark";
      break;
    case "Margrethe II of Denmark":
      nameForWiki = "Margrethe_II_of_Denmark";
      break;
    case "The Princess of Wales":
      nameForWiki = "Camilla,_Duchess_of_Cornwall";
      break;
    case "John Le Carre":
      nameForWiki = "John_le_Carré";
      break;
    case "Danny DeVito":
      nameForWiki = "Danny_DeVito";
      break;
    case "Hirohito of Japan":
      nameForWiki = "Hirohito";
      break;
    case "Olivia Newton-John":
      nameForWiki = "Olivia_Newton-John";
      break;
    case "Ville \"Darude\" Virtanen":
      nameForWiki = "Darude";
      break;
    case "John McCain":
      nameForWiki = "John_McCain";
      break;
    case "Jean-Claude Van Damme":
      nameForWiki = "Jean-Claude_Van_Damme";
      break;
    case "Pope Benedict XVI":
      nameForWiki = "Pope_Benedict_XVI";
      break;
    case "Pope Benedict XV":
      nameForWiki = "Pope_Benedict_XV";
      break;
    case "Pope John Paul II":
      nameForWiki = "Pope_John_Paul_II";
      break;
    case "Elisabeth \"Bettan\" Andreassen":
      nameForWiki = "Elisabeth_Andreassen"
      break;
    case "Dolly the sheep":
      nameForWiki = "Dolly_(sheep)";
      break;
    case "Tim \"Avicii\" Bergling":
      nameForWiki = "Avicii";
      break;
    case "Kyrre \"Kygo\" Gorvell-Dahl":
      nameForWiki = "Kygo";
      break;
    case "Boutros Boutros-Ghali":
      nameForWiki = "Boutros_Boutros-Ghali";
      break;
    case "Mary-Kate Olsen":
      nameForWiki = "Mary-Kate_Olsen";
      break;
    case "Donald Trump\'s mum":
      nameForWiki = "Mary_Anne_MacLeod_Trump";
      break;
    case "Fat Ronaldo":
      nameForWiki = "Ronaldo_(Brazilian_footballer)";
      break;
    case "Chris Columbus":
      nameForWiki = "Chris_Columbus_(filmmaker)";
      break;
    case "Hans-Wilhelm Steinfeld":
      nameForWiki = "Hans-Wilhelm_Steinfeld";
      break;
    case "Ian McKellen":
      nameForWiki = "Ian_McKellen";
      break;
    case "Paul McCartney":
      nameForWiki = "Paul_McCartney";
      break; 
    case "Edith Piaf": 
      nameForWiki = "Édith Piaf";
      break;
    case "Goran Persson":
      nameForWiki = "Göran Persson";
      break;
    case "Estee Lauder":
      nameForWiki = "Estée Lauder";
      break;
    case "Eva Perón":
      nameForWiki = "Eva Perón";
      break;
    case "Gerard Depardieu":
      nameForWiki = "Gérard Depardieu";
      break;
    case "Claude Francois":
      nameForWiki = "Claude François";
      break;
    case "Pele":
      nameForWiki = "Pelé";
      break;
    case "Arvo Part":
      nameForWiki = "Arvo Pärt";
      break;
    case "Jose Carreras":
      nameForWiki = "José Carreras";
      break;
    case "Oystein Sunde":
      nameForWiki = "Øystein Sunde";
      break;
    case "Oivind Blunck":
      nameForWiki = "Øivind Blunck";
      break;
    case "Bjorn Wirkola":
      nameForWiki = "Bjørn Wirkola";
      break;
  }
  return nameForWiki;
}