   // storing score 
   score = 0;


// Defines the input that is made when you go to save your score.
   const NameField = document.createElement("input");
   const SubmitScoreButton = document.createElement("button")
   const FinalScore = document.createElement("p")



//    listens for click and starts quiz when button is pressed.
   document.getElementById("buttonStart").addEventListener("click", startQuiz);
//    Defines the new button that is made when the quiz is started.
    const GenerateButton = document.createElement("button");
    GenerateButton.textContent = ("Submit answer");
    GenerateButton.id = ("buttonSubmit");
    GenerateButton.classList.add("questionFooter")
    GenerateButton.addEventListener("click", submitAnswer);
// called when the user presses start on the quiz
 function startQuiz(){
    document.getElementById("buttonStart").remove();
    document.body.appendChild(GenerateButton);
    $('#QuestionText').text("how goes everything?");
     Quiztime = setInterval(clearQuiz,1000,time= 5,);

 }

function clearQuiz(){
    if (time == 0) {
        $('#QuestionText').text("Time is up!");
         document.getElementById('option1').remove()
         document.getElementById('option2').remove()
         document.getElementById('option3').remove()
         document.getElementById('choices').remove()
         document.getElementById('buttonSubmit').remove()
         clearInterval(Quiztime)
        document.body.appendChild(NameField)
        document.body.appendChild(SubmitScoreButton)
        document.body.appendChild(FinalScore)
        $('FinalScore').text("Your final score is:",score)
    }
    else{
        time--;
        $('#timeClock').text(time);
    }
}
function submitAnswer(){
    answer = 1;
    var option = document.querySelector('input[name="choice"]:checked').value;
    if (option == answer){
    score = score + 5;
    console.log(score);
    console.log("Correct!");
    return score
}
    else{
     console.log("Incorrect!")   
    }
}  

function saveScore(){

}