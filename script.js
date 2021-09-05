var quotes=["“Be yourself; everyone else is already taken.”― Oscar Wilde" , 
"“It is better to be hated for what you are than to be loved for what you are not.” ― Andre Gide, Autumn Leaves",
"“Insanity is doing the same thing, over and over again, but expecting different results.”― Narcotics Anonymous",
"“To live is the rarest thing in the world. Most people exist, that is all.”― Oscar Wilde",
"“I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.”― Maya Angelou",
"“You only live once, but if you do it right, once is enough.”― Mae West",
"“Sometimes the questions are complicated and the answers are simple.”― Dr. Seuss",
"“Life isn't about finding yourself. Life is about creating yourself.”― George Bernard Shaw",
"“Life is like riding a bicycle. To keep your balance, you must keep moving.”― Albert Einstein"]

function randomquote(){

    randomvar=Math.floor(Math.random() * quotes.length);
    document.getElementById("quote").innerHTML= quotes[randomvar];

}

