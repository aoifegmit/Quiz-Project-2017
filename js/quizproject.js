var pos = 0, test, test_status, question, choice, choices, choiceA, choiceB, choiceC, correct=0, name = 0; 
//setting variables
//Place the questions array here
var questions=[
	{
		question: "What year was the Tulla Ceili Band founded?",//question
		correctAnswer: "1946",//right answer to question
		
		//list of multiple choice answers
		answer0: "1946",
		answer1: "1956",
		answer2: "1966",
		answer3: "1976"
	},
	{
		question: "Name the Clare town where the Willie Clancy Summer school is held in July of each year?",//question
		correctAnswer: "Milltown Malbay",//right answer to question
		
		//list of multiple choice answers
		answer0: "Kilrush",
		answer1: "Milltown Malbay",
		answer2: "Ennis",
		answer3: "Tulla"
	},
	{
		
		question: "What month does the Feakle Music festival take place each year?",//question
		correctAnswer: "August",//right answer to question
		
		//list of multiple choice answers
		answer0: "June",
		answer1: "July",
		answer2: "August",
		answer3: "September"
	},
	{
		question: "Name the singer who wrote the song The Wagon Wheel?",//question
		correctAnswer: "Bob Dylan",//right answer to question
		
		//list of multiple choice answers
		answer0: "Bob Dylan",
		answer1: "Johnny Cash",
		answer2: "Gerry Guthrie",
		answer3: "Brendan Shine"
	},
	{
		question: "What is the name of the singer who sings the song Thinking out Loud?",//question
		correctAnswer: "Ed Sheeran",//right answer to question
		
		//list of multiple choice answers
		answer0: "Ed Sheeran",
		answer1: "Lee Matthews",
		answer2: "Isla Grant",
		answer3: "Lisa Mc Hugh"
	},
	{
		question: "Name the song that the band The Script sing?",//question
		correctAnswer: "Hall of Fame",//right answer to question
		
		//list of multiple choice answers
		answer0: "Hall of Fame",
		answer1: "All of Me",
		answer2: "Counting Stars",
		answer3: "Impossible"
	},
	{
		question: "What nationality is the singer Mike Denver?",//question
		correctAnswer: "Irish",//right answer to question
		
		//list of multiple choice answers
		answer0: "Irish",
		answer1: "English",
		answer2: "American",
		answer3: "Scottish"
	},
	{
		question: "What nationality is the singer Lisa Mc Hugh?",//question
		correctAnswer: "Scottish",//right answer to question
		
		//list of multiple choice answers
		answer0: "Irish",
		answer1: "Scottish",
		answer2: "English",
		answer3: "Welsh"
	},
	{
		question: "Who sings the song High Hopes?",//question
		correctAnswer: "Kodaline",//right answer to question
		
		//list of multiple choice answers
		answer0: "Kodaline",
		answer1: "One Republic",
		answer2: "The Script",
		answer3: "Owl City"
	},
	{
		question: "Name 2 band members from the band The Dubliners?",//question
		correctAnswer: "Ronnie Drew and Luke Kelly",//right answer to question
		
		//list of multiple choice answers
		answer0: "Ronnie Drew and Luke Kelly",
		answer1: "Johnny Cash and June Carter",
		answer2: "Brendan and Emily Shine",
		answer3: "Lisa Mc Hugh and Nathan Carter"
	},
	{
		question: "Who represented Ireland in the Eurovision song contest in 1970 and sang the song All Kinds of Everything?"//question
		correctAnswer: "Rosemary Scallon",//right answer to question
		
		//list of multiple choice answers
		answer0: "Dolores Keane",
		answer1: "Johnny Logan",
		answer2: "Rosemary Scallon",
		answer3: "Mary Black"
	},
	{
		question: "What year did Ireland last win the Eurovision Song Contest?",//question
		correctAnswer: "1996",//right answer to question
		
		//list of multiple choice answers
		answer0: "1966",
		answer1: "1976",
		answer2: "1986",
		answer3: "1996"
	},
	{
		question: "What year was Dustin the turkey voted out of the Eurovision Song Contest after representing Ireland in the semi-final?",//question
		correctAnswer: "2008",//right answer to question
		
		//list of multiple choice answers
		answer0: "2008",
		answer1: "2009",
		answer2: "2010",
		answer3: "2011"
	},
	{
		question: "Name the singers who sang the song Rock and Roll Kids in the 1994 Eurovision Song Contest?",//question
		correctAnswer: "Charlie Mc Gettigan and Paul Harrington",//right answer to question
		
		//list of multiple choice answers
		answer0: "Mary Black and Dolores Keane",
		answer1: "Charlie Mc Gettigan and Paul Harrington",
		answer2: "The High Kings",
		answer3: "The Dubliners"
	},
	{
		question: "Which singer sings the song Fuzzy Blue Lights?",//question
		correctAnswer: "Owl City",//right answer to question
		
		//list of multiple choice answers
		answer0: "Michael English",
		answer1: "Owl City",
		answer2: "Nathan Carter",
		answer3: "Johnny Brady"
	},
	{
		question: "What nationality is the singer Robert Mizzell?",//question
		correctAnswer: "American",//right answer to question
		
		//list of multiple choice answers
		answer0: "Irish",
		answer1: "English",
		answer2: "American",
		answer3: "Scottish"
	},
	{
		question: "Name the singer who used to sing the song Paddy Mc Gintys Goat?",//question
		correctAnswer: "Val Doonican",//right answer to question
		
		//list of multiple choice answers
		answer0: "Val Doonican",
		answer1: "Johnny Cash",
		answer2: "Marty Robbins",
		answer3: "Luke Kelly"
	},
	{
		question: "Name 2 other songs that Val Doonican used to sing?",//question
		correctAnswer: "Walk Tall and The day Delaneys donkey won the half mile race",//right answer to question
		
		//list of multiple choice answers
		answer0: "The Ring of Fire and I walk the line",
		answer1: "Walk Tall and The day Delaneys donkey won the half mile race",
		answer2: "Finnegans Wake and Dirty old Town",
		answer3: "Rocky road to Dublin and Whiskey in the Jar"
	},
	{
		question: "What is the name of the singer who used to sing The ring of Fire?",//question
		correctAnswer: "Johnny Cash",//right answer to question
		
		//list of multiple choice answers
		answer0: "Luke Kelly",
		answer1: "Ronnie Drew",
		answer2: "Barney Mc Kenna",
		answer3: "Johnny Cash"
	},
	{
		question: "Who used to sing the song I walk the line?",//question
		correctAnswer: "Johnny Cash",//right answer to question
		
		//list of multiple choice answers
		answer0: "Johnny Cash",
		answer1: "Val Doonican",
		answer2: "Barney Mc Kenna",
		answer3: "David Bowie"
	}
];

function renderQuestion()
{
	test = _("test");
	if (pos >= questions.length)//If position is greater or equel to the number of questions
	{
		test.innerHTML = "<h2>You got "+correct +" of "+questions.length+" questions correct
		("+percent() + "%)</h2>";//Print # correct out of 20
		_("test status").innerHTML += " Thank you for completing the quiz";//Print "thank you ...."
		pos = 0;
		correct = 0;
		return false;
	}
	
	var bar=document.getElementById("progressBar");//Progress bar value
	
	_("test_status").innerHTML = "Question "+(pos+1)+" of "+questions.length;
	
	bar.value = (pos+1)//Progress bar increments as we go through questions, starts at 1
	
	question = questions[pos].question;//question is in position 0 in the array(zero indexed)
	choiceA = questions[pos].answer0; //choice A is in position 1 in the array
	choiceB = questions[pos].answer1; //choice B is in position 2 in the array
	choiceC = questions[pos].answer2; //choice C is in position 3 in the array
	choiceD = questions[pos].answer3; //choice D is in position 4 in the array
	test.innerHTML = "<h3>"+question+"</h3>";
	test.innerHTML += "<input type='radio' name='choices' value="'+choiceA+"' checked> "+choiceA+"<br>";
	//Radio button
	test.innerHTML += "<input type='radio' name='choices' value="'+choiceB+"' checked> "+choiceB+"<br>";
	//Radio button
	test.innerHTML += "<input type='radio' name='choices' value="'+choiiceC"' checked> "+choiceC+"<br>;
	//Radio button
	test.innerHTML += "<input type='radio' name='choices' value="'+choiceD"' checked> "+choiceD+"<br>;
	//Radio button
	test.innerHTML += "<button onclick='checkAnswer()'>Submit Answer</button>";
}

var quizAnswers = []


//push all potential answers to the quizAnswers array
quizAnswers[0] = questions[pos].answer0;
quizAnswers[1] = questions[pos].answer1;
quizAnswers[2] = questions[pos].answer2;
quizAnswers[3] = questions[pos].answer3;

console.log("Unshuffled answers" + quizAnswers);

//Shuffle the answers
var shuffledAnswers = shuffleArray(quizAnswers);

console.log("Shuffled answers" + shuffledAnswers);

question = questions[pos].question;//question is in position 0 in the array(zero indexed)
choiceA = shuffledAnswers[0]; //choice A is in position 1 in the array
choiceB = shuffledAnswers[1]; //choice B is in position 2 in the array
choiceC = shuffledAnswers[2]; //choice C is in position 3 in the array
choiceD = shuffledAnswers[3]; //choice D is in position 4 in the array

function checkAnswer()
{
	choices = document.getElementsByName("choices"); //Creates an array
	for(var i=0; i<choices.length; i++)//variable i=0, when i is less than the length of the choices, increment it by one
	{
		if(choices[i].checked) //if a choice is checked
		{
			choice = choices[i].value; //Take the value of that choice and put it into choice
		}
	}
	if(choice == questions[pos].correctAnswer)//If the value of choices is equal to position 4
	{
		alert('Correct!');//Alert correct
		correct++;//Increment it by one
	}
	else//or else
	{
		alert('Sorry wrong answer. The correct answer is' + questions[pos][4]);
	)
	pos++; //Increment position by one ie go on to the next question
	
	renderQuestion(); //go to render question again
}

//function which takes an array and shuffles its contents 
//used to get different order of multiple choice answers
function shuffleArray(array)
{
	for (var i = array.length - 1; i > 0; i--)
	{
		var j = Music.floor(Music.random() * (i + 1));
		var temp = array[i];
		array[i] = array[j];
		array[j] = temp;
	}
	return array;
}

