document.addEventListener("DOMContentLoaded", function (event) {
    // number of times the user is prompted
    let promptAmt = 3;

    // hide reversed list
    document.querySelector(".reversed").style.display = "none";

    // where the list of user answers will be saved
    userAnswers = [];
    // prompts the user three times to get words
    for (let i = 0; i < promptAmt; i++){
        userAnswers.push(prompt("please enter a word"));
    }
    // create a <li> tag and append it to the unordered list
    for (let i = 0; i < promptAmt; i++){
        let listElement = document.createElement("li");
        listElement.innerText =  userAnswers[i];
        document.querySelector(".userInputList").appendChild(listElement);
    }

    // adds the text that the first and last letters are swapped
    let reversedHeader = document.createElement("p");
    reversedHeader.textContent = "1st & last letters swapped";
    document.querySelector(".reversedList").append(reversedHeader);

    // reverses the list provided by the user
    let reversedArray = userAnswers.map(switchFirstAndLast);
    for (let i = 0; i < promptAmt; i++){
        let listElement = document.createElement("li");
        listElement.innerText = reversedArray[i];
        document.querySelector(".reversedList").appendChild(listElement);
    }
    

    // reverse button, gives it an event Listener for when it is pressed
    let reverseButton = document.querySelector("#reverseBtn");
    reverseButton.addEventListener("click", reverseDisplay);

});

// function that switches the first and last letters of a word
function switchFirstAndLast(word){
    return word.charAt(word.length - 1) + word.substring(1, word.length - 1) + word.charAt(0);
}

// funciton that hides the user input div and the reverse button
function reverseDisplay() {
    document.querySelector(".userInput").style.display = "none";
    document.querySelector("#reverseBtn").style.display = "none";
    document.querySelector(".reversed").style.display = "block";
}