$(document).ready(function(){

    /*--- Display information modal box ---*/
    $("#instruct").click(function(){
        $(".overlay").fadeIn(1000);
        $(".blur").hide();
        $(".question").hide();
        $(".answers").hide();
        $(".next").hide();
    });

    /*--- Hide information modal box ---*/
    $("a.close").click(function(){
        $(".overlay").fadeOut(1000);
        $(".blur").show();
        $(".question").show();
        $(".answers").show();
        $(".next").show();
    });

    $("#blur-quest").click(function() {
  		$("#quest").toggleClass( "covers" );
  		$("#blur-quest").toggleClass("red");
	});

	$("#blur-answers").click(function(){
		$(".vocab").toggleClass('covers');
		$("#blur-answers").toggleClass('red');
	});

  test = new Quiz()

    //Remeber order of operations, add listener after elements are created
  $('#new').click(function(event){
    event.preventDefault();
    location.reload();
  });

	$(document).on('click', '.btn-red', function(event){
      event.preventDefault();
      $('.correct-answer').text();
   		$(this).closest(".choice").find(".vocab").toggleClass('strike');
   	});


    $(document).on('click', '.btn-green', function(event){
      event.preventDefault();
      $('.correct-answer').removeClass('correct-answer');
      $(this).closest(".choice").find(".vocab").toggleClass('correct-answer');
    });

    $(document).on('click', '#next', function(event){
      event.preventDefault();
      var answerChoice = $('.correct-answer').text();
      if (answerChoice == test.correctAnswers[test.currentQuestion]){
        test.numCorrect++;
      }
      if (test.currentQuestion < test.numQuestions) {
        test.currentQuestion++;
        test.createElements(test);
      } else {
        test.done(test);
      }
    });
      //if match the add to correct answer, then append new question, call in creat elements
});

function Quiz() {

  this.currentQuestion = 1;

  this.numCorrect = 0;

  this.numQuestions = 5;
  
  this.questions = {
  "1": ["The cafe attracts a _______ clientele; a startlingly heterogenous group of people collects there."],
  "2": ["Concrete is ______ of many materials, a composite of rocks, pebbles, sand and cerment."],
  "3": ["Like many other groups of people in the United States who have needed laws to _______ equal rights, Americans with disabilities have had to _______ legislation adressing their concerns."],
  "4": ["The second edition of the textbook provides ______ footnotes; since the first edition, the editors have apparently _______ a great deal of background data."],
  "5": ["Professor Fernandez has been ______ about most of the purportedly humanitarian aspects of the colonial government and has insisted that its actions were, on the contray, _______."]
  }
  this.answers = {
  "1": ["A. motley", "B. callous", "C. languid", "D. mysterious", "E. humane"],
  "2": ["A. a conflagration", "B. a distillation", "C. a concordance", "D. an aberration", "E. an amalgamation"],
  "3": ["A. guarantee..lobby for", "B. preclude..enact", "C. ascertain..consolidate", "D. compund..contend with", "E. suppress..ratify"],
  "4": ["A. meager..accumulated", "B. illegible..clariefied", "C. copious..amassed", "D. valuminous..excised", "E. monotonous..embellished"],
  "5": ["A. dubious..self-serving", "B. enthusiatic..contemptible", "C. disparaging..sporadic", "D. excited..gratutious", "E. disillusioned..benevolent"]
  }
  this.correctAnswers = {
  "1": ["A. motley"],
  "2": ["E. an amalgamation"],
  "3": ["A. guarantee..lobby for"],
  "4": ["C. copious..amassed"],
  "5": ["A. dubious..self-serving"]
  }

  this.createElements = function(self){
    $('#quest').text(self.questions[self.currentQuestion]);
    $('.answers').html('');
    $.each(self.answers[self.currentQuestion], function( index, value ) {
    $(".answers").append("<ul class='choice'><li class='btn-red'><a href='#' class='btn red'>X</a></li><li class='vocab'>" + value + "</li><li class='btn-green'><a href='#' class='btn green'>&#10004;</a></li></ul>");
    });
  }

  this.createElements(this);

  this.done = function(self){
    $('.blur-these').hide();
    $('.next').hide();
    $('#quest').text('Quiz Completed!').css('font-size', '50px').css('text-align', 'center').css('font-family', 'Oswald');
    $('.answers').html('You got ' + self.numCorrect + ' out of ' + self.numQuestions + ' correct!').css('text-align', 'center').css('font-size', '40px').css('font-family', 'Oswald');
  }
}








