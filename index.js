const subtitle = document.getElementsByClassName("card-subtitle")[0];
// console.log(subtitle)
// console.log("this works")
//turn each word into a span and give it a class of "card-subtitle-word"
const createWord = (text, index) => {
    const word = document.createElement("span");
    word.innerHTML = `${text} `;

    word.classList.add("card-subtitle-word");
    word.style.transitionDelay = (`${index * 40}ms`);
    
    return word;
}


// Make the given a list of words from the subtitle into the new class and add it to the subtitle element. 
const addWord = (textlist, index) => {
    subtitle.appendChild(createWord(textlist,index));
}

// turns the subtitle into a list and run it through addWord
const createSubtitleList = (text) => {
    text.split(" ").map(addWord);
}

createSubtitleList("Day 2 of learning and figured out how to replicate this cool effect.")
// console.log("this works")

