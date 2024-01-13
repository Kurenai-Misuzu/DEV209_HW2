document.addEventListener("DOMContentLoaded", function (event) {
    // number of times the user is prompted
    let promptAmt = 3;
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

    

});