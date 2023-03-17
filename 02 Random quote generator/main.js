let quotes = [

    ' \" Born to lose, live to win.\" \n-Lemmy Kilmister',
    '\"I think heavy metal is therapeutic - it\'s music that blows the tension away. I think that\'s why people who have had really bad childhoods are attracted to heavy metal. It allows people to release aggression and tension in a nonviolent way.\" \n-Kirk Hammet',
    '\"If you are a pop band, don\'t say you\'re a metal band. Poison and Warrant were about as metal as the Backstreet Boys.\" \n-Geezer Butler',
    '\"If heavy metal bands ruled the world, we\'d be a lot better off\"\n-Bruce Dickinson',
    '\"We are one of the last heavy metal bands. Iron Maiden has always been unique.\"\n-Adrian Smith',
    '\"I\'d rather regret doing something than not doing something.\"\n-James Hetfield',
    '\"This is your here, this is your now, let it be magical.\"\n-Ronnie James Dio'
]

function quote() {
let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

let hmquote = document.querySelector('.quote').innerHTML = randomQuote};

let btn = document.querySelector('.btn').addEventListener('click', quote);
