// ---- VARIABLES --------------------------------------------------------------------------------------------------------------------
var questions = 
    [{
        index: 0,
        question: "How many Super Bowls have the 49ers won?",
        choices: choices = [3, 4, 5, 6],
        answer: this.choices[2],
        correctCollapse: "Correct! The 49ers have won 5 Super Bowls and are widely considered the greatest team of all time! Facts!"
    },
    {
        index: 1,
        question: "In 1997, San Francisco drafted a Virginia Tech QB. Who was this successful college player who never caught on with the 49ers?",
        choices: choices = ["Jim Druckenmiller", "Micheal Vick", "Bryan Randall", "Grant Noel"],
        answer: this.choices[0],
        correctCollapse: "And here we have a mention of the greatest college team of all time, the Virginia Tech Hokies!"
    },
    {
        index: 2,
        question: "What year were the 49ers founded?",
        choices: choices = ["1945", "1946", "1947", "1948"],
        answer: this.choices[1],
        correctCollapse: "The Greatest Generation built the greatest football team. Not a coincidence."
    },
    {
        index: 3,
        question: "The 49ers were members of the _______________________ Football Conference before joining the NFL.",
        choices: choices = ["All Conference", "All Players", "American", "All America"],
        answer: this.choices[3],
        correctCollapse: "Meeeerrrica!! All of it."
    },
    {
        index: 4,
        question: "Who made the famous catch to win the football game in the 1981 NFC Championship?",
        choices: choices = ["Matt Bouza", "Dwight Clarke", "Jerry Rice", "Freddie Solomon"],
        answer: this.choices[1],
        correctCollapse: "You Dwight darn right he did!"
    },
    {
        index: 5,
        question: "How many times did 49er quarterback Joe Montana win a Super Bowl MVP?",
        choices: choices = [1, 2, 3, 4],
        answer: this.choices[2],
        correctCollapse: "Tres, hombre"
    },
    {
        index: 6,
        question: "Where did the 49ers play for the first 25 seasons of the franchise?",
        choices: choices = ["Candlestick Park", "Kezar Stadium", "Levi's Stadium", "AT&T Park"],
        answer: this.choices[1],
        correctCollapse: "Great salads. Oh?"
    },
    {
        index: 7,
        question: "Which of these players was not a member of the '88 49ers Super Bowl squad?",
        choices: choices = ["Rikki Ellison", "Steve Young", "Wes Chandler", "Tom Cousineau"],
        answer: this.choices[3],
        correctCollapse: "Awww, should've been there! Rings!"
    },
    {
        index: 8,
        question: "Which 49er was Super Bowl XXIII MVP?",
        choices: choices = ["Joe Montana", "Ronnie Lott", "Jerry Rice", "Steve Young"],
        answer: this.choices[2],
        correctCollapse: "Like white on Rice! Except he was black."
    },
    {
        index: 9,
        question: "How many NFL Super Bowls did Joe Montana win as quarterback for the 49ers?",
        choices: choices = [1, 2, 3, 4],
        answer: this.choices[3],
        correctCollapse: "Correct answer: All of them!"
    }];

var incorrectCollapse = "Ha! Wrong! I thought you said you were a fan!?";
var timer = 10;
var timerInterval;
var index = 0;
var id = '';


// ---- TIMER FUNCTIONS -------------------------------------------------------------------------------------------------------------

// ---- Function to run the timer
function runTimer() {
    clearInterval(timerInterval);
    timerInterval = setInterval(setTimer, 1000);
};

// ---- Function to reset and show timer on page
function setTimer() {
    timer--;
    $('#timer').html('Time Remaining: ' + timer);

    if (timer === -1) {
        $('#timer').html('Time Remaining: ' + timer);
        alertTimeout();
    };
};

// ---- Function to clear the time and alert the player that time is up.
function alertTimeout() {
    $('#gameOver').modal({show: true});
    clearInterval(timerInterval);
    timer = 10;
    $('#timer').html('Time Remaining: ' + timer);
};


// ---- GAME FUNCTIONS --------------------------------------------------------------------------------------------------------------

// ---- Function to set the questions, choices, and accordian 
function setQuestion() {
    $('#timer').html('Time Remaining: ' + timer);
    for (var i = 0; i < questions.length; i++) {
        console.log(questions[index].question);
        $('#question').html('<h2>' + questions[index].question + '</h2>');
        for (var k = 0; k < questions[index].choices.length; k++) {
            $('#choice' + [k])
                .html('<h2>' + questions[index].choices[k] + '</h2>')
                .attr('val', questions[index].choices[k])
        };
        $('.list-group-item').attr('data-toggle', 'collapse');
        for (var j = 0; j < questions[index].choices.length; j++) {
            if (questions[index].choices[j] == questions[index].answer) {
                $('#choiceCollapse' + [j]).html('<p>' + questions[index].correctCollapse + '</p>');
            } else {
                $('#choiceCollapse' + [j]).html('<p>' + incorrectCollapse + '</p>');
            };
        }
    }
};

// ---- Function to switch to the next question
function nextQuestion() {
    index++;
    timer = 10;
    setQuestion();
    runTimer(); 
};

// ---- Function to reset the game when a player clicks the 'Restart' button
function restartGame() {
    index = 0;
    timer = 10;
    setQuestion();
    runTimer();
};

// ---- Function to reload the page
function reloadPage() {
    location.reload(false);
}


// ---- MAIN GAME PLAY SECTION -------------------------------------------------------------------------------------------------------

$(document).ready(function() {
    // ---- Start button event to begin the timer and set the first question
    $("#startButton").on('click', function() {
        runTimer();
        setQuestion();   
    });

    // ---- On click event for 'Next Question' button 
    $('#nextQuestion').on('click', function() {
        event.preventDefault();
        index++;
        timer = 10;
        setQuestion();
        runTimer();
    });

    // ---- On click event for 'Restart Game' button 
    $('#restartGame').on('click', function() {
        reloadPage();
    });

    // ---- On click event for 'Try Again' button 
    $('#tryAgainButton').on('click', function() {
        reloadPage();
    });

    // ---- On click event for 'Quit' anchor to link to 49ers.com 
    $('#quitButton').on('click', function() {
        reloadPage();
    });

    // ---- On click event to capture player choice and test their answer
    $('.list-group-item').on('click', function() {
        // Update playerChoice
        playerChoice = $(this).attr('val');
        console.log(playerChoice);
        // Compare player choice to answer
        if (playerChoice == questions[index].answer) {
            // if player choice is correct...
            clearInterval(timerInterval);
            setTimeout(nextQuestion, 3000);
            $('#timer').html('Time Remaining: ' + timer);
        } else {
            // else (if) player choice is incorrect
            clearInterval(timerInterval);
            setTimeout(nextQuestion, 3000);
            $('#timer').html('Time Remaining: ' + timer);
        };     
    });
});
// ---- Main game-play section
