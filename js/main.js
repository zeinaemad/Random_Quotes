var randomQuotes = [
    {
        quote: "A room without books is like a body without a soul." ,
        author: "--Marcus Tullius Cicero"
    },
    {
        quote: "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind." ,
        author: "--Bernard M. Baruch"
    },
    {
        quote: "You know you're in love when you can't fall asleep because reality is finally better than your dreams." ,
        author: "--Dr. Seuss"
    },
    {
        quote: "You only live once, but if you do it right, once is enough." ,
        author: "--Mae West"
    },
    {
        quote: "In three words I can sum up everything I've learned about life: it goes on." ,
        author: "--Robert Frost"
    },
    {
        quote: "If you tell the truth, you don't have to remember anything." ,
        author: "--Mark Twain"
    },
    {
        quote: "To live is the rarest thing in the world. Most people exist, that is all." ,
        author: "--Oscar Wilde"
    },
    {
        quote: "A friend is someone who knows all about you and still loves you." ,
        author: "--Elbert Hubbard"
    },
    {
        quote: "Always forgive your enemies; nothing annoys them so much." ,
        author: "--Mahatma Gandhi"
    },
    {
        quote: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment." ,
        author: "--Ralph Waldo Emerson"
    }
]

var lastQuoteIndex = -1;

function showQAndA() {
    var newIndex;
    do {
        newIndex = Math.floor(Math.random() * randomQuotes.length);
    } while (newIndex === lastQuoteIndex);
    console.log(lastQuoteIndex);   //Just for clarification
    console.log(newIndex);      
    
    document.getElementById("show1").innerHTML = randomQuotes[newIndex].quote;
    document.getElementById("show2").innerHTML = randomQuotes[newIndex].author;

    lastQuoteIndex = newIndex;
}
