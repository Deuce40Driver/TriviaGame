//When the user clicks the start button display the first question from the questions array and start a 10 second timer.
//If the user clicks the correct answer congratulate them, wait a few seconds, then display next question.
//If the user clicks the wrong answer imsult them, wait a few seconds, then display the next question.
//If the timer runs out show time's up, wait a few seconds, then display the next question.
//When all 10 questions have been answered end the game and show the score and a restart button.

var questionOne = {
    question: "How many Super Bowls have the 49ers won?",
    choices: choices = [3, 4, 5, 6],
    answer: this.choices[2],
};

var questionTwo = {
    question: "In 1997, San Francisco drafted a Virginia Tech QB. Who was this successful college player who never caught on with the 49ers?",
    choices: choices = ["Jim Druckenmiller", "Micheal Vick", "Bryan Randall", "Grant Noel"],
    answer: this.choices[0],
};

var questionThree = {
    question: "What year were the 49ers founded?",
    choices: choices = ["1945", "1946", "1947", "1948"],
    answer: this.choices[1],
};

var questionFour = {
    question: "The 49ers were members of the _______________________ Football Conference before joining the NFL.",
    choices: choices = ["All Conference", "All Players", "American", "All America"],
    answer: this.choices[3],
};

var questionFive = {
    question: "Who made the famous catch to win the football game in the 1981 NFC Championship?",
    choices: choices = ["Matt Bouza", "Dwight Clarke", "Jerry Rice", "Freddie Solomon"],
    answer: this.choices[1],
};

var questionSix = {
    question: "How many times did 49er quarterback Joe Montana win a Super Bowl MVP?",
    choices: choices = [1, 2, 3, 4],
    answer: this.choices[2],
};

var questionSeven = {
    question: "Where did the 49ers play for the first 25 seasons of the franchise?",
    choices: choices = ["Candlestick Park", "Kezar Stadium", "Levi's Stadium", "AT&T Park"],
    answer: this.choices[1],
};

var questionEight = {
    question: "Which of these players was not a member of the '88 49ers Super Bowl squad?",
    choices: choices = ["Rikki Ellison", "Steve Young", "Wes Chandler", "Tom Cousineau"],
    answer: this.choices[3],
};

var questionNine = {
    question: "Which 49er was Super Bowl XXIII MVP?",
    choices: choices = ["Joe Montana", "Ronnie Lott", "Jerry Rice", "Steve Young"],
    answer: this.choices[2],
};

var questionTen = {
    question: "How many NFL Super Bowls did Joe Montana win as quarterback for the 49ers?",
    choices: choices = [1, 2, 3, 4],
    answer: this.choices[3],
};

var questions = [questionOne, questionTwo, questionThree, questionFour, questionFive, questionSix, questionSeven, questionEight, questionNine, questionTen];

var correctCollapse = "Correct! The 49ers have won 5 Super Bowls and are widely considered the greatest team of all time! Facts!";
var incorrectCollapse = "Ha! Wrong! I thought you said you were a fan!?";

var timer = 10;

var timerInterval;

var questionNumber = 0; 

// Function to set the questions, choices, and accordian 
function setQuestion() {
    $('#timer').html('Time Remaining: ' + timer);

    $('#question').html('<h2>' + questions[questionNumber].question + '</h2>');

    for (var i = 0; i < questions[questionNumber].choices.length; i++) {
        $('#choice' + [i])
            .html('<h2>' + questions[questionNumber].choices[i] + '</h2>')
            .attr('val', questions[questionNumber].choices[i])
    };

    $('.list-group-item').attr('data-toggle', 'collapse');

    for (var j = 0; j < questions[questionNumber].choices.length; j++) {

        if (questions[questionNumber].choices[j] == questions[questionNumber].answer) {
            $('#choiceCollapse' + [j]).html('<p>' + correctCollapse + '</p>');
        } else {
            $('#choiceCollapse' + [j]).html('<p>' + incorrectCollapse + '</p>');
        };
    
    };
};

// Function to run the timer
function runTimer() {
    clearInterval(timerInterval);
    timerInterval = setInterval(setTimer, 1000);
};

// Function to reset and show timer on page
function setTimer() {
    timer--;
    $('#timer').html('Time Remaining: ' + timer);

    if (timer === -1) {
        $('#timer').html('Time Remaining: ' + timer);
        alertTimeout();
    };
};

// Function to clear the time and alert the player that time is up.
function alertTimeout() {
    clearInterval(timerInterval);
    alert('Times up!');
    timer = 10;
    $('#timer').html('Time Remaining: ' + timer);
};

// Function to reset the game when a player clicks the 'Restart' button
function restartGame() {
    /*
        reset the timer
        reset the scoreboard
        go back to question 1
    */
};


$(document).ready(function() {


    $("#startButton").on('click', function() {
        runTimer();
        setQuestion();
    });

    $('.list-group-item').on('click', function() {

        playerChoice = $(this).attr('val');
         
        if (playerChoice == questions[questionNumber].answer) {
            clearInterval(timerInterval);
            $('#timer').html('Time Remaining: ' + timer);

            setTimeout(nextQuestion, 3000);

            function nextQuestion() {   
                questionNumber++;
                timer = 10;
                setQuestion();
                runTimer(); 
            };
        } else {
            clearInterval(timerInterval);
            $('#timer').html('Time Remaining: ' + timer);

            setTimeout(nextQuestion, 3000);
            
            function nextQuestion() {
                questionNumber++;
                timer = 10;
                setQuestion();
                runTimer();
            };
        };     
    });

    $('#nextQuestion').on('click', function() {
        questionNumber++;
        timer = 10;
        setQuestion();
        runTimer();
    });

    $('#restartGame').on('click', restartGame());

});
