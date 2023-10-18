   
//    listens for click and starts quiz when button is pressed.
   document.getElementById("buttonStart").addEventListener("click", startQuiz);
//    Defines the new button that is made when the quiz is started.
    const GenerateButton = document.createElement("button")
    GenerateButton.textContent = ("Submit answer")
    GenerateButton.id = ("buttonStart")
    GenerateButton.addEventListener("click", submitAnswer)
// called when the user presses start on the quiz
 function startQuiz(){
    $('#QuestionText').text("how goes everything?")
    document.getElementById("buttonStart").remove()
    document.body.appendChild(GenerateButton)
 }
