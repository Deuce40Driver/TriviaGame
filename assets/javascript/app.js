var questionOne = {
    question: "How many Super Bowls have the 49ers won?",
    choices: choices = [3, 4, 5, 6],
    answer: this.choices[1],
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

var questions = [questionOne.question, questionTwo.question, questionThree.question, questionFour.question, questionFive.question, questionSix.question, questionSeven.question, questionEight.question, questionNine.question, questionTen.question];

var answers = [questionOne.answer, questionTwo.answer, questionThree.answer, questionFour.answer, questionFive.answer, questionSix.answer, questionSeven.answer, questionEight.answer, questionNine.answer, questionTen.answer];

//When the user clicks the start button display the first question from the questions array and start a 10 second timer.

//If the user clicks the correct answer congratulate them, wait a few seconds, then display next question.

//If the user clicks the wrong answer imsult them, wait a few seconds, then display the next question.

//If the timer runs out show time's up, wait a few seconds, then display the next question.

//When all 10 questions have been answered end the game and show the score and a restart button.

$("#startButton").click(function() {
    setTimeout(fiveSeconds, 5000);
    setTimeout(tenSeconds, 10000);
    setTimeout(fifteenSeconds, 15000);
    setTimeout(twentySeconds, 20000);
    setTimeout(twentyFiveSeconds, 25000);
    setTimeout(thirtySeconds, 30000);
    setTimeout(thirtyFiveSeconds, 35000);
    setTimeout(fortySeconds, 40000);
    setTimeout(fortyFiveSeconds, 45000);
    $("#question").html('<h2>' + questions[0] + '</h2>');
    $("#choiceOne").html('<h2>' + questionOne.choices[0] + '</h2>');
    $("#choiceTwo").html('<h2>' + questionOne.choices[1] + '</h2>');
    $("#choiceThree").html('<h2>' + questionOne.choices[2] + '</h2>');
    $("#choiceFour").html('<h2>' + questionOne.choices[3] + '</h2>');

    // Put an if else statement here.
    // if the user clicks the correct answer
    // alert correct and add point to correct
    // else the user picks any other answer
    // alert wrong and add point to incorrect
    //if ()
})

function fiveSeconds() {
    alert("Time's Up!")
    $("#question").html('<h2>' + questions[1] + '</h2>');
    $("#choiceOne").html('<h2>' + questionTwo.choices[0] + '</h2>');
    $("#choiceTwo").html('<h2>' + questionTwo.choices[1] + '</h2>');
    $("#choiceThree").html('<h2>' + questionTwo.choices[2] + '</h2>');
    $("#choiceFour").html('<h2>' + questionTwo.choices[3] + '</h2>');
}

function tenSeconds() {
    alert("Time's Up!")
    $("#question").html('<h2>' + questions[2] + '</h2>');
    $("#choiceOne").html('<h2>' + questionThree.choices[0] + '</h2>');
    $("#choiceTwo").html('<h2>' + questionThree.choices[1] + '</h2>');
    $("#choiceThree").html('<h2>' + questionThree.choices[2] + '</h2>');
    $("#choiceFour").html('<h2>' + questionThree.choices[3] + '</h2>');
}

function fifteenSeconds() {
    alert("Time's Up!")
    $("#question").html('<h2>' + questions[3] + '</h2>');
    $("#choiceOne").html('<h2>' + questionFour.choices[0] + '</h2>');
    $("#choiceTwo").html('<h2>' + questionFour.choices[1] + '</h2>');
    $("#choiceThree").html('<h2>' + questionFour.choices[2] + '</h2>');
    $("#choiceFour").html('<h2>' + questionFour.choices[3] + '</h2>');
}

function twentySeconds() {
    alert("Time's Up!")
    $("#question").html('<h2>' + questions[4] + '</h2>');
    $("#choiceOne").html('<h2>' + questionFive.choices[0] + '</h2>');
    $("#choiceTwo").html('<h2>' + questionFive.choices[1] + '</h2>');
    $("#choiceThree").html('<h2>' + questionFive.choices[2] + '</h2>');
    $("#choiceFour").html('<h2>' + questionFive.choices[3] + '</h2>');
}

function twentyFiveSeconds() {
    alert("Time's Up!")
    $("#question").html('<h2>' + questions[5] + '</h2>');
    $("#choiceOne").html('<h2>' + questionSix.choices[0] + '</h2>');
    $("#choiceTwo").html('<h2>' + questionSix.choices[1] + '</h2>');
    $("#choiceThree").html('<h2>' + questionSix.choices[2] + '</h2>');
    $("#choiceFour").html('<h2>' + questionSix.choices[3] + '</h2>');
}

function thirtySeconds() {
    alert("Time's Up!")
    $("#question").html('<h2>' + questions[6] + '</h2>');
    $("#choiceOne").html('<h2>' + questionSeven.choices[0] + '</h2>');
    $("#choiceTwo").html('<h2>' + questionSeven.choices[1] + '</h2>');
    $("#choiceThree").html('<h2>' + questionSeven.choices[2] + '</h2>');
    $("#choiceFour").html('<h2>' + questionSeven.choices[3] + '</h2>');
}

function thirtyFiveSeconds() {
    alert("Time's Up!")
    $("#question").html('<h2>' + questions[7] + '</h2>');
    $("#choiceOne").html('<h2>' + questionEight.choices[0] + '</h2>');
    $("#choiceTwo").html('<h2>' + questionEight.choices[1] + '</h2>');
    $("#choiceThree").html('<h2>' + questionEight.choices[2] + '</h2>');
    $("#choiceFour").html('<h2>' + questionEight.choices[3] + '</h2>');
}

function fortySeconds() {
    alert("Time's Up!")
    $("#question").html('<h2>' + questions[8] + '</h2>');
    $("#choiceOne").html('<h2>' + questionNine.choices[0] + '</h2>');
    $("#choiceTwo").html('<h2>' + questionNine.choices[1] + '</h2>');
    $("#choiceThree").html('<h2>' + questionNine.choices[2] + '</h2>');
    $("#choiceFour").html('<h2>' + questionNine.choices[3] + '</h2>');
}

function fortyFiveSeconds() {
    alert("Time's Up!")
    $("#question").html('<h2>' + questions[9] + '</h2>');
    $("#choiceOne").html('<h2>' + questionTen.choices[0] + '</h2>');
    $("#choiceTwo").html('<h2>' + questionTen.choices[1] + '</h2>');
    $("#choiceThree").html('<h2>' + questionTen.choices[2] + '</h2>');
    $("#choiceFour").html('<h2>' + questionTen.choices[3] + '</h2>');
}



