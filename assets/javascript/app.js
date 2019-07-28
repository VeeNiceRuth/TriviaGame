var currentQuestion = 0;
var correct = 0;
var wrong = 0;
var timer = 30;
var i = 0;

var interval = setInterval(function() {
    timer--;
    $('#timer').text(timer);
    if (timer === 0) {
        currentQuestion++;
        $("#trivButtons").empty();
        i++;
        $("#response").empty();
        logic();
        timer = 30;
    }
}, 1000)


var questionArr = [{
        question: "What is the drummers name?",
        choices: ["Jimmy Page", "Jack White", "John Bonham", "Meg White"],
        values: [false, false, false, true]
    }, {
        question: "How long did it take them to record White Blood Cells?",
        choices: ["1 year", "5 months", "2 weeks", "4 days"],
        values: [false, false, false, true]

    }, {
        question: "Where was their final profermance?",
        choices: ["Cochella 2014", "MTV Awards", "Late Night With Connan O'Brien", "BBC"],
        values: [false, false, true, false]
    }, {
        question: "Where was The White Stripes formed?",
        choices: ["California", "Iowa", "Ohio", "Michigan"],
        values: [false, false, false, true]

    }, {
        question: "What year did they dissolve?",
        choices: ["2011", "2002", "2005", "2010"],
        values: [true, false, false, false]

    }, {
        question: "What is their breakthrough album?",
        choices: ["Elephant", "White Blood Cells", "Icky Thump", "De Stijl"],
        values: [false, true, false, false]

    }, 
]

function answerButton() {
    for (var i = 0; i < questionArr[currentQuestion].choices.length; i++) {

         
        var button = $("<button>");

        
        button.text(questionArr[currentQuestion].choices[i]);

        
        button.addClass("answer-buttons btn btn-primary");

        
        button.attr("value", questionArr[currentQuestion].values[i]);
       
        button.attr("Data-name", questionArr[currentQuestion].choices[i]);
       
        $("#trivButtons").append(button);
    };
}

 
function logic() {

     
    $("#trivQuestion").html(questionArr[currentQuestion].question)
        
    answerButton();
    
    $("button").on("click", function() {
        
        var answers = $(this).attr("Data-name");
         
        console.log(answers);
        
        if ($(this).attr("value") === "true") {
            correct++;
            $("#response").html("Correct");
            currentQuestion++;
            timer = 30;
            $("#trivButtons").empty();
            i++;
            $("#response").empty();
            logic();
        } else {

            $("#response").html("Wrong!");
            wrong++;
            currentQuestion++;
            timer = 30;
            $("#trivButtons").empty();
            i++;
            $("#response").empty();
            logic();
        }
        console.log(currentQuestion);
    });



}

logic();