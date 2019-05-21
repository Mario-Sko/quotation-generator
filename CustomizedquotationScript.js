var quotesBegin = [
	"It is better to remain ",
	"The saddest aspect of life ",
	"In a good bookroom you feel in some mysterious way ",
	"The best index to a person's character is how ",
	"By three methods we may learn wisdom: First, ",
	"We do not receive wisdom; we must ",
	"Before I can live with other folks I've got ",
	"Conquer the angry one by not getting angry; conquer ",
	"An acquaintance merely enjoys your company, a fair-weather ",
	"Develop an attitude of gratitude, and give ",
	"Treachery and violence are ",
] 
  
var firstQuotesMiddle =[
	"silent at the risk of ",
	"right now is that science ",
	"that you are absorbing ",
	"he treats people who can't do him ",
	"by reflection, which is noblest; Second, ",
	"discover it for ourselves after ",
	"to live with myself; the ",
	"the wicked by goodness; conquer ",
	"companion flatters when all is well, ",
	"thanks for everything that happens to you, knowing that every ",
	"spears pointed at both ends; they ",
]

var secondQuotesMiddle =[
	"being thought a fool, than to ",
	"gathers knowledge faster ",
	"the wisdom contained in all the ",
	"any good, and how he treats ",
	"by imitation, which is easiest; and third ",
	"a journey that no one ",
	"one thing that doesn't abide ",
	"the stingy by ",
	"a true friend has your best interests ",
	"at heart and the pluck to ",
	"step forward is a step toward achieving ",
	"wound those who resort ",
]


var quotesEnd = [
	"talk and remove all doubt of it.",
	"than society gathers wisdom.",
	"books through your skin, without even opening them.",
	"people who can't fight back.",
	"by experience, which is the bitterest.",
	"can take for us or spare us.",
	"by majority rule is a person's conscience.",
	"generosity, and the liar.",
	"by speaking the truth.",
	"tell you what you need to hear.",
	"something bigger and better than your current situation.",
	"to them worse than their enemies.",
]


function createQuote(){
 
	deleteQuote();  
	var quotePhase = "";
	var txtSum = "";
	var lengthQuote ;
	var loops = document.getElementById("myNumber").value;
  
  // checking number of quotes
	if(loops > 5 || loops < 1 ) {
		var element = document.getElementById("quoteDisplay");
		element.classList.add("mistake");
		return  document.getElementById("quoteDisplay").innerHTML = "Please input a number between 1 till 5" ; 
	}

	//generate 1 till 5 quotes
	for (var k = 0; k < loops; k++ ){
		quotePhase = QuotesParts();
		txtSum += quotePhase;
		lengthQuote = txtSum.length ;
	}
	//buttons are not working
	for (var i = 0; i <= lengthQuote; i++) {
		document.getElementById("generateLoops").style.opacity="0.5";
		document.getElementById("generateLoops").removeAttribute("onclick");
		document.getElementById("deleteButton").style.opacity="0.5";
		document.getElementById("deleteButton").removeAttribute("onclick");
		var typingWriting = function(i) {
        
		// typing effect	
		return function() {
            var letter =  txtSum.charAt(i)
			document.getElementById("quoteDisplay").innerHTML += letter;
			if (txtSum.charAt(i) == "."){
			document.getElementById("quoteDisplay").innerHTML += "<br>";
				}      
			}
		};
	setTimeout(typingWriting(i), 5 * i);
	}
	// after typing effect buttons shall are working
	ButtonsWorkingAgain(lengthQuote); 
	
}
  
function ButtonsWorkingAgain (lengthQuote){
	
	setTimeout(function(){ 
		document.getElementById("generateLoops").style.opacity="1"; 
		document.getElementById("generateLoops").setAttribute("onclick", "createQuote()");
		document.getElementById("deleteButton").style.opacity="1"; 
		document.getElementById("deleteButton").setAttribute("onclick", "deleteQuote()");
		}, 5 * lengthQuote);
	}
// generate the random phases of the quote  
function QuotesParts() {
	// 2 or 4 phases of the quote
	var x = document.getElementById("sliderNumber");
	if(x.value < 2){
		var randomNumberBegin = Math.floor(Math.random() * (quotesBegin.length));
		var textArrayQuoteBegin = quotesBegin[randomNumberBegin];
  
		var randomNumberEnd = Math.floor(Math.random() * (quotesEnd.length));
		var textArrayQuoteEnd = quotesEnd[randomNumberEnd];
  
		var txt =  textArrayQuoteBegin + " " + textArrayQuoteEnd; 

		return txt; 
	   
	}else{
		var randomNumberBegin = Math.floor(Math.random() * (quotesBegin.length));
		var textArrayQuoteBegin = quotesBegin[randomNumberBegin];

		var randomNumberFirstMiddle = Math.floor(Math.random() * (firstQuotesMiddle.length));
		var textArrayFirstQuoteMiddle = firstQuotesMiddle[randomNumberFirstMiddle];

		var randomNumberSecondMiddle = Math.floor(Math.random() * (secondQuotesMiddle.length));
		var textArraySecondQuoteMiddle = secondQuotesMiddle[randomNumberSecondMiddle];

		var randomNumberEnd = Math.floor(Math.random() * (quotesEnd.length));
		var textArrayQuoteEnd = quotesEnd[randomNumberEnd];
   
		var txt = textArrayQuoteBegin + " " + textArrayFirstQuoteMiddle + " " + textArraySecondQuoteMiddle + " " + textArrayQuoteEnd; 
  
		return txt;	   		
	}
}

// main function of deleting
function deleteQuote() { 
	iteration = 0;
	RemoveClass();
	RemoveContent();	
}  

// remove the CSS classes about the misstake text if you don't put the right number in the inout field. 
function RemoveClass(){
	var idName = document.getElementById("quoteDisplay");
	
	if(idName.classList.contains("mistake")){
		var element = document.getElementById("quoteDisplay");
		idName.classList.remove("mistake"); 
	}	
}

// remove the content in the display of the quote generator
function RemoveContent(){
	 document.getElementById("quoteDisplay").innerHTML = "";
}  


