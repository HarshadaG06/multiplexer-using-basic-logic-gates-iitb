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
      question: "The 2:1 multiplexer using basic logic gates with active low enable input can be build using:",  ///// Write the question inside double quotes
      answers: {
        a: "Two AND, Two NOT, One OR gates",                  ///// Write the option 1 inside double quotes
        b: "Two AND, One NOT, One OR gates",                  ///// Write the option 2 inside double quotes
        c: "Two AND, Two NOT, Two OR gates",                  ///// Write the option 3 inside double quotes
        d: "One AND, Three NOT, One OR gates"                   ///// Write the option 4 inside double quotes
      },
      correctAnswer: "a"                ///// Write the correct option inside double quotes
    },

    {
     question: "Select the output when S2= S1 = 1 and S0 = 0.</br><img src=\"images/ex1postQ3.JPG\"/>",  ///// Write the question inside double quotes
      answers: {
        a: "Y = 0",                  ///// Write the option 1 inside double quotes
        b: "Y = 1",                  ///// Write the option 2 inside double quotes
        c: "Y = D",                  ///// Write the option 3 inside double quotes
        d: "None of these"                   ///// Write the option 4 inside double quotes
      },
      correctAnswer: "a"                ///// Write the correct option inside double quotes
    },                                  ///// To add more questions, copy the section below 
    									                  ///// this line
    {
      question: "Identify the circuit shown below.</br><img src=\"images/ex1postQ4.JPG\"/>",
      answers: {
        a: "2:1 Mux",
        b: "4:1 Mux",
        c: "6:1 Mux",
        d: "8:1 Mux"
      },
      correctAnswer: "b"
    },

    {
      question: " Design, construct and verify a 2:1 Mux using basic logic gates. Get the simulation results evaluated from your faculty.",
      //answers: {
      // a: "decode input",
      // b: "strobe input",
      // c: "Select input",
      // d: "All of these"
      //},
      //correctAnswer: "b"
    },

    {
      question: "Differentiate between multiplexer and encoder?",
      //answers: {
      // a: "decode input",
      // b: "strobe input",
      // c: "Select input",
      // d: "All of these"
      //},
      //correctAnswer: "b"
    },
    /* To add more MCQ's, copy the below section, starting from open curly braces ( { )
        till closing curly braces comma ( }, )

        and paste it below the curly braces comma ( below correct answer }, ) of above 
        question

    Copy below section*/

  




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