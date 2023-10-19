   // storing score 
   score = 0;
   questionsPassed = 0;



// Defines the input that is made when you go to save your score.
   const NameField = document.createElement("input");
   NameField.classList.add('QuestionArea');

   const SubmitScoreButton = document.createElement("button");
   SubmitScoreButton.id = ('ButtonStart');
   SubmitScoreButton.textContent = ('Submit score');
   SubmitScoreButton.addEventListener("click", saveScore);

   const ScoreTag = document.createElement("p");
   ScoreTag.id = ("leaderboard");


//    listens for click and starts quiz when button is pressed.
   document.getElementById("buttonStart").addEventListener("click", startQuiz);
    // Defines the new button that is made when the quiz is started.
     const GenerateButton = document.createElement("button");
     GenerateButton.textContent = ("Submit answer");
     GenerateButton.classList.add("questionFooter");
     GenerateButton.id = ("buttonStart");
     GenerateButton.addEventListener("click", submitAnswer);
// called when the user presses start on the quiz
 function startQuiz(){
    document.getElementById("buttonStart").remove();
    document.body.appendChild(GenerateButton);
    $('#QuestionText').text(GetQuestion);
     Quiztime = setInterval(clearQuiz,1000,time= 120,);

 }

function clearQuiz(){
    if (time <= 0) {
        $('#QuestionText').text("Time is up!");
         document.getElementById('option1').remove()
         document.getElementById('option2').remove()
         document.getElementById('option3').remove()
         document.getElementById('choices').remove()
         document.getElementById('buttonStart').remove()
         clearInterval(Quiztime)
        document.body.appendChild(NameField)
        document.body.appendChild(SubmitScoreButton)
        
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
    GetQuestion()
    return score
}
    else{
     console.log("Incorrect!")
     time = time - 5   
     GetQuestion()
    }

}  

function saveScore(){
Name = NameField.value
localStorage.setItem("Score",score)
localStorage.setItem("Name",Name)
document.body.appendChild(ScoreTag)
ScoreTag.textContent += score
ScoreTag.textContent += " "
ScoreTag.textContent += Name
ScoreTag.textContent += "      "

}

var QuestionTexts=["what tag is used to create a link between HTML and javascript? 1.<link> 2.<script> 3.<div>",
 "Question 2", "question 3"]

function GetQuestion(){
activeQuestion = QuestionTexts[0]
questionsPassed = questionsPassed + 1

}
