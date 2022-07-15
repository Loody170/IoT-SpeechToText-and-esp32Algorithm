var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

var textbox = $("#textbox")

var instructions = $("#instructions")

var content = '';

let form = document.forms['lang'];

recognition.continuous = true

//recognition is started
recognition.onstart = function(){
  instructions.text("voice recognition is now on")
}

recognition.onspeechend = function(){
  instructions.text("No activity detected, voice recognition is off now")
}

recognition.onerror = function(){
  instructions.text("Error, Try again")
}



// This block is called every time the Speech APi captures a line. 
recognition.onresult = function(event) {
  
  // event is a SpeechRecognitionEvent object.
  // It holds all the lines we have captured so far. 
  // We only need the current one.
  var current = event.resultIndex;

  // Get a transcript of what was said.
  var transcript = event.results[current][0].transcript;

  

  content+= transcript;

  textbox.val(content);
};

$('#start-btn').on('click', function(e) {
  if (content.length) {
    content += '';
  }
  recognition.start();
});

textbox.on('input', function(){
  content = $(this).val()
})


lang.onchange = function(){
  var selectedValue = document.getElementById("lang").value;
  console.log(selectedValue);
  if(selectedValue == 'en'){
  console.log('lang to en')
  recognition.lang = 'en-US';
  recognition.start;
  }
  else if(selectedValue == 'ar'){
    recognition.lang = 'ar-sa';
    console.log('lang to ar')
    recognition.start;
  }
};
