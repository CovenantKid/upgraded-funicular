   // storing score 
   score = 0;
   questionsPassed = 0;
   loadScore()



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
    GetQuestion();
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
    var option = document.querySelector('input[name="choice"]:checked').value;
    if (option == CurrentAnswer){
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
function loadScore(){
    localStorage.getItem("Score",score)
    localStorage.getItem("Name",Name)
    document.body.appendChild(ScoreTag)
    ScoreTag.textContent += score
    ScoreTag.textContent += " "
    ScoreTag.textContent += Name
    ScoreTag.textContent += "      "
}
// storing the text of the question and its answer
var QuestionTexts=["what tag is used to create a link between HTML and javascript? 1.<link> 2.<script> 3.<div>",
 "Which symbol is used to make a class in CSS? 1. A period 2.A hashtag 3.A dollar sign",
"read the following line: var numbers = [1,2,3] if you need to select the 2 in this variable, which of the following would work? 1.console.log(numbers) 2.console.log(numbers[1]) 3.console.log(numbers[2])",
"If you need to get a variable out of a function to the wider code, which of these tags would work? assume the word variable to be the variable in question. 1.escape variable 2.just write the variable's name. 3.return variable",
"When creating a responsive design page which of the following allows you to create breakpoints in the code for smaller devices? 1. A class 2.An ID 3.A media Querry.",
"What is Jquery? 1. A function that lets you find the type of data something is. 2. A library 3. A alternative to javascript",
"If you need to add a new item to the document, which of these will allow you to?  1.appendchild() 2.setitem() 3.neither",
"what is a constant? 1. Another word for a variable 2.A variable that can't be changed 3.A way to change a variable",
"What is a p tag in HTML? 1.a way to write javascript without a script 2. A way to write a paragraph 3. none of the above"]

var answer=[1,1,2,3,3,2,1,2,2]

// Selects the next active question from the above variables aswell as the answer for the question
function GetQuestion(){
    if (questionsPassed <= 8){
activeQuestion = QuestionTexts[questionsPassed];
$('#QuestionText').text(activeQuestion);
CurrentAnswer = answer[questionsPassed];
questionsPassed = questionsPassed + 1;
return CurrentAnswer;
}
 else {
    console.log("end")
    clearQuiz(time = 0)
    $('#QuestionText').text("End of questions! Thanks for your participation!");
 }

}
