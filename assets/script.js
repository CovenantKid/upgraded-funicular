   
//    listens for click and starts quiz when button is pressed.
   document.getElementById("buttonStart").addEventListener("click", startQuiz);
//    Defines the new buttons that are made when the quiz is started.
    const GenerateButton = document.createElement("button");
    GenerateButton.textContent = ("Submit answer");
    GenerateButton.id = ("buttonStart");
    GenerateButton.addEventListener("click", submitAnswer);
    
// called when the user presses start on the quiz
 function startQuiz(){
    document.getElementById("buttonStart").remove();
    document.body.appendChild(GenerateButton);
    $('#QuestionText').text("how goes everything?");
    document.getElementById('choices').style.display = "block";
    setInterval(clearQuiz,1000,time= 30);
 }
function clearQuiz(){
    if (time == 0) {
        $('#QuestionText').text("Time is up!");
    }
    else{
        time--;
        $('#timeClock').text(time);
    }
}
function submitAnswer(){
    var option = document.querySelector('input[name="choice"]:checked').value;
    console.log(option)
}