
//Questions
(function() {
  var questions = [{
    question: "What number besides 23 and 45 did Michael wear?",
    choices: [2, 5, 12, 15, 20],
    correctAnswer: 12
  }, {
    question: "What is number is MJ on the NBA's all time scoring list?",
    choices: [1, 2, 3, 4, 5],
    correctAnswer: 4
  }, {
    question: "How many years of college did MJ attend?",
    choices: [1, 2, 3, 4, 5],
    correctAnswer: 3
  }, {
    question: "How many years did MJ play in the NBA?",
    choices: [13, 14, 15, 16, 17, ],
    correctAnswer: 15
  }, {
    question: "What is the most points MJ scored in a game",
    choices: [62, 63, 67, 69, 71],
    correctAnswer: 69
  }];
  
  var questionCounter = 0; 
  var selections = []; 
  var quiz = $('#quiz'); 
  
  // Display first question
  displayNext();
  
  //'next' button
  $('#continue').on('click', function (e) {
    e.preventDefault();
    
    
    if(quiz.is(':animated')) {        
      return false;
    }
    choose();
    
    
    if (isNaN(selections[questionCounter])) {
      alert('Please make a selection!');
    } else {
      questionCounter++;
    //Keeps it moving to next question
      displayNext();
    }
  });
  
  //'previous' button
  $('#previous').on('click', function (e) {
    e.preventDefault();
    
    if(quiz.is(':animated')) {
      return false;
    }
    choose();
    questionCounter--;
    displayNext();
  });
  
  // 'Start Over' button
  $('#begin').on('click', function (e) {
    e.preventDefault();
    
    if(quiz.is(':animated')) {
      return false;
    }
    questionCounter = 0;
    selections = [];
    displayNext();
    $('#begin').hide();
  });
  
  // Button Hover
  $('.button').on('mouseenter', function () {
    $(this).addClass('active');
  });
  $('.button').on('mouseleave', function () {
    $(this).removeClass('active');
  });
  
  // Div Container
  function createQuestionElement(index) {
    var qElement = $('<div>', {
      id: 'question'
    });
    
    var header = $('<h2>Question ' + (index + 1) + ':</h2>');
    qElement.append(header);
    
    var question = $('<p>').append(questions[index].question);
    qElement.append(question);
    
    var radioButtons = createRadios(index);
    qElement.append(radioButtons);
    
    return qElement;
  }
  
  // answer choices 
  function createRadios(index) {
    var radioList = $('<ul>');
    var item;
    var input = '';
    for (var i = 0; i < questions[index].choices.length; i++) {
      item = $('<li>');
      input = '<input type="radio" name="answer" value=' + i + ' />';
      input += questions[index].choices[i];
      item.append(input);
      radioList.append(item);
    }
    return radioList;
  }
  
  function choose() {
    selections[questionCounter] = +$('input[name="answer"]:checked').val();
  }
  
  // Displays next requested element
  function displayNext() {
    quiz.fadeOut(function() {
      $('#question').remove();
      
      if(questionCounter < questions.length){
        var nextQuestion = createQuestionElement(questionCounter);
        quiz.append(nextQuestion).fadeIn();
        if (!(isNaN(selections[questionCounter]))) {
          $('input[value='+selections[questionCounter]+']').prop('checked', true);
        }
        
        // Controls display of 'prev' button
        if(questionCounter === 1){
          $('#previous').show();
        } else if(questionCounter === 0){
          
          $('#previous').hide();
          $('#continue').show();
        }
      }else {
        var scoreElem = displayScore();
        quiz.append(scoreElem).fadeIn();
        $('#continue').hide();
        $('#previous').hide();
        $('#begin').show();
      }
    });
  }
  
  // Computes score and returns a paragraph element to be displayed
  function displayScore() {
    var score = $('<p>',{id: 'question'});
    
    var numCorrect = 0;
    for (var i = 0; i < selections.length; i++) {
      if (selections[i] === questions[i].correctAnswer) {
        numCorrect++;
      }
    }
    
    score.append('You got ' + numCorrect + ' questions out of ' +
                 questions.length + ' correct!!!');
    return score;// Does not work.  Cant figure out where I messed up at.

  //Pseudo Code for timer

  //Timer will count down from 30 seconds before it times out.
  //When the time out occurs there is an alert box that appears and 
  //says Time is up and the game moves on to the next question.
  }
})();