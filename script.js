//Ellen Thomson week 7 Web Dev 2 with tutoring help from Jordan Mogck

//For readability and clarity it is good practice to declare variables at the beginning of the JS document if possible

//////////////////   declare global variables   //////////////////
var churchillSpeech = {
      'author': 'Churchill',
      'year': 1940,
      'yearIsBCE': false,
      'authorAge': '66'
    },
    ghandiSpeech = {
      'author': 'Ghandi',
      'year': 1942,
      'yearIsBCE': false,
      'authorAge': '73'
    },
    demosthenesSpeech = {
      'author': 'Demosthenes',
      'year': 342,
      'yearIsBCE': true,
      'authorAge': '42'
    },
    speechesArray = [churchillSpeech, ghandiSpeech, demosthenesSpeech],
    ConsoleDisplay = document.getElementById("ConsoleDisplay");


//////////////////   donate button   //////////////////

document.getElementById('BtnDonate').addEventListener('click', function(){

//clear the console display content
	if (document.getElementById('ConsoleDisplay').innherHTML != '') {
    document.getElementById('ConsoleDisplay').innerHTML = '';
  	};

//Code in here executes when the user clicks the "Donate" button.
	var donation = prompt("How much would you like to donate?"); 
	var heading = document.createElement('H3');

	if (donation < 99) {
  	var donationText = document.createTextNode("Thank you for your donation of $" + donation);
	
	} else {
  	var donationText = document.createTextNode("Thank you for your very generous donation!");
      heading.setAttribute('style', 'color: red');

//add new css class to all articles
    var articles = document.getElementsByTagName('ARTICLE');
    for (var i = 0; i < articles.length; i++) {
    articles[i].className = 'generous-donation';
	}
	}
	heading.appendChild(donationText);
	document.getElementById('SideNav').appendChild(heading);
});


//////////////////   churchillSpeech   //////////////////

	document.getElementById('BtnChurchill').addEventListener('click', function(){
//Code in here executes when the user clicks the "Churchill" button.
	document.getElementById("ConsoleDisplay").innerHTML = 'This speech was written by ' + speechesArray[0].author + ' in ' + speechesArray[0].year + '<br>';
	
	if(speechesArray[0].yearIsBCE === true){
	document.getElementById("ConsoleDisplay").innerHTML += 'This speech took place before the common era.<br>';
  	
  	}else{
    document.getElementById("ConsoleDisplay").innerHTML += 'This speech took place during the common era.<br>';
  	}

  	var oldest = speechesArray[0].year,
    newest = speechesArray[0].year;

  	for(var i = 0; i < speechesArray.length; i++){
    if(speechesArray[i].year < oldest){
      oldest = speechesArray[i].year;
    }
    if(speechesArray[i].year > newest){
      newest = speechesArray[i].year;
    }
  	}
  	if(speechesArray[0].year === oldest){
	document.getElementById("ConsoleDisplay").innerHTML += 'This is the oldest speech on the page.<br>';
  	}
  
  	if(speechesArray[0].year === newest){
	document.getElementById("ConsoleDisplay").innerHTML += 'This is the most recent speech on the page.<br>';
  	}
});

//////////////////   ghandiSpeech   //////////////////

	document.getElementById('BtnGhandi').addEventListener('click', function(){
//Code in here executes when the user clicks the "Ghandi" button.
	document.getElementById("ConsoleDisplay").innerHTML = 'This speech was written by ' + speechesArray[1].author + ' in ' + speechesArray[1].year + '<br>';

  	if(speechesArray[1].yearIsBCE === true){
	document.getElementById("ConsoleDisplay").innerHTML += 'This speech took place before the common era.<br>';

  	}else{
	document.getElementById("ConsoleDisplay").innerHTML += 'This speech took place during the common era.<br>';
	}

  	var oldest = speechesArray[0].year,
    newest = speechesArray[0].year;

  	for(var i = 0; i < speechesArray.length; i++){
    if(speechesArray[i].year < oldest){
      oldest = speechesArray[i].year;
    }
    if(speechesArray[i].year > newest){
      newest = speechesArray[i].year;
    }
  	}
  	if(speechesArray[1].year === oldest){
	document.getElementById("ConsoleDisplay").innerHTML += 'This is the oldest speech on the page.<br>';
  	}
  if(speechesArray[1].year === newest){
	document.getElementById("ConsoleDisplay").innerHTML += 'This is the most recent speech on the page.<br>';
  }
});

//////////////////   demosthenesSpeech   //////////////////

	document.getElementById('BtnDemosthenes').addEventListener('click', function(){
//Code in here executes when the user clicks the "Demosthenes" button.
	document.getElementById("ConsoleDisplay").innerHTML = 'This speech was written by ' + speechesArray[2].author + ' in ' + speechesArray[2].year + '<br>';

  	if(speechesArray[2].yearIsBCE === true){
	document.getElementById("ConsoleDisplay").innerHTML += 'This speech took place before the common era.<br>';

  	}else{
	document.getElementById("ConsoleDisplay").innerHTML += 'This speech took place during the common era.<br>';
  	}

  	var oldest = speechesArray[0].year,
    newest = speechesArray[0].year;

  	for(var i = 0; i < speechesArray.length; i++){
    if(speechesArray[i].year < oldest){
    oldest = speechesArray[i].year;
    }
    if(speechesArray[i].year > newest){
      newest = speechesArray[i].year;
    }
  	}

  	if(speechesArray[2].year === oldest){
	document.getElementById("ConsoleDisplay").innerHTML += 'This is the oldest speech on the page.<br>';
  	}
  	if(speechesArray[2].year === newest){
	document.getElementById("ConsoleDisplay").innerHTML += 'This is the most recent speech on the page.<br>';
  }
});