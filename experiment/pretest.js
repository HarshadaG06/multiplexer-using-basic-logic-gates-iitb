/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the below code ////////////////////////

/////////////////////////////////////////////////////////////////////////////

(function() {
  function buildQuiz() {
    // we'll need a place to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // we'll want to store the list of answer choices
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      if(questionNumber == 4){
        output.push(
          `<div class="question"> ${currentQuestion.question} </div>
          <img src="${currentQuestion.src}" />
          <div class="answers"> ${answers.join("")} </div>`
        );
      }
      else{output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")} </div>`
      );}
      // add this question and its answers to the output
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;
        answerContainers[questionNumber].style.color = "black";

        // color the answers green
        //answerContainers[questionNumber].style.color = "lightgreen";
      } else {
        // if answer is wrong or blank
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");
 

/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the above code ////////////////////////

/////////////////////////////////////////////////////////////////////////////






/////////////// Write the MCQ below in the exactly same described format ///////////////


  const myQuestions = [
    {
      question: "A multiplexer is a ___________",  ///// Write the question inside double quotes
      answers: {
        a: "data selector/multi-position switch.",                  ///// Write the option 1 inside double quotes
        b: "parallel to serial converter.",                  ///// Write the option 2 inside double quotes
        c: "design alternative to sum-of-product solutions.",                  ///// Write the option 3 inside double quotes
        d: "All of these"                   ///// Write the option 4 inside double quotes
      },
      correctAnswer: "d"                ///// Write the correct option inside double quotes
    },

    {
     question: "How many select lines are required for a 32: 1 Mux?",  ///// Write the question inside double quotes
      answers: {
        a: "Two",                  ///// Write the option 1 inside double quotes
        b: "Four",                  ///// Write the option 2 inside double quotes
        c: "Five",                  ///// Write the option 3 inside double quotes
        d: "Eight"                   ///// Write the option 4 inside double quotes
      },
      correctAnswer: "c"                ///// Write the correct option inside double quotes
    },                                  ///// To add more questions, copy the section below 
    									                  ///// this line
    {
      question: "Any n-variable truth table can be implemented using a universal logic circuit referred to as multiplexer. State True or False.",
      answers: {
        a: "True",
        b: "False",
  //c: "spring-mass system",
    //    d: "fluid pressure"
      },
      correctAnswer: "a"
    },

    {
      question: "The enable input in a multiplexer is also referred to as________",
      answers: {
        a: "decode input",
        b: "strobe input",
        c: "Select input",
        d: "All of these"
      },
      correctAnswer: "b"
    },

    /* To add more MCQ's, copy the below section, starting from open curly braces ( { )
        till closing curly braces comma ( }, )

        and paste it below the curly braces comma ( below correct answer }, ) of above 
        question

    Copy below section*/

    {
      question: "For the circuit shown below, input S1 = 1, S0 = 0, then the output is_____",
      src :"images/exp1q5.JPG",
      answers: {
        a: "Y = 0",
        b: "Y = 1",
        c: "Y - X",
        d: "None of these"
      },
      correctAnswer: "a"
    },

  




  ];




/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the below code ////////////////////////

/////////////////////////////////////////////////////////////////////////////


  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();


/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the above code ////////////////////////

/////////////////////////////////////////////////////////////////////////////