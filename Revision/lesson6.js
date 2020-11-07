/*Every javaScript object runs inside the global window object.
  Global DOM Objects -- global context all js programs
        1. document - JS representation of current web page and elments.
        2. history - list of sites the browser has visited in this window.
        3. location - URL of current web page
        4. navigator - information about the web browser
        5. screen - information about client's display screen
        6. window - top-level object in DOM hierarchy
  Unobtrusive Javascript - seperation of concern, content(HTML), style(CSS) and behavior(JS)
  DOM ELEMENT Objects - main operatives of JS
  JS code can be placed directly in the HTML file's body or head (like CSS)
  <script src="filename" type="text/javascript"></script>*/

  function func(){
      element.event = functionName;
      element2.event = functionName;
  }

  window.onload = functionName;

  //event names are all lowercase, not capitalized like most variables

okButton.onclick = okayClick(); //ERRORRRRRR
okButton.onclick = okayClick; //CORECT

function okayClick(){
    expressiohn;
}

okButton.onclick = okayClick(){
    expression;
};

//"use strict";

//TIMER EVENTS
setTImeount(function, delayMS); //arranges to call after given delay
setInterval(function, delayMS); //arranges to call repeatedly
clearTimeout(timeID); //stops funciton
clearInterval(timeID)

/*
writing "use strict"; at the very top of your JS file turns on strict
syntax checking:
shows an error if you try to assign to an undeclared variable
stops you from overwriting key JS system libraries
forbids some unsafe or error-prone language features
"use strict" also works inside of individual functions
You should always turn on strict mode for your code in this class!*/