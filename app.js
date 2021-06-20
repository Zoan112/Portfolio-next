//Mobile Menu
const mobileMenu = document.getElementsByClassName("mobileMenuDiv")[0]
const mobileMenuList = document.getElementsByClassName("nav")[0]
let menuOpen = false;

mobileMenu.addEventListener('click', () => {
    if (!menuOpen){
    mobileMenu.classList.add("open");
    mobileMenuList.classList.add("open");
    menuOpen = true
    }else{
        mobileMenu.classList.remove("open");
        mobileMenuList.classList.remove("open");
        menuOpen = false;
    }
  });

//Contact form

 
const submitBtn = document.getElementsByClassName("submitBtn")[0];
const contactForm = document.getElementsByClassName("contactForm")[0]
const msgStatus = document.getElementsByClassName("msgStatus")[0]

//Submit contact form

submitBtn.addEventListener("click", function(e){
      e.preventDefault()


      let myForm = document.getElementById('contactForm')
      
      console.log(myForm)
      let formData = new FormData(myForm)
      fetch('/', {
        method: 'POST',
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString()
      }).then(() => console.log('Form successfully submitted'),contactForm.style.display = "none", msgStatus.style.display = "flex").catch((error) =>
        alert(error))

})



//TypeWriter Animations

var doneDrawingText = false;
// values to keep track of the number of letters typed, which quote to use. etc. Don't change these values.
var i = 0,
    a = 0,
    m = 0,

    isParagraph = false;

// Typerwrite text content. Use a pipe to indicate the start of the second line "|".  
var textArray = [
  "Zohar Hadari|Developer",  
 
];

var drawContnet = ["<>",
];


// Speed (in milliseconds) of typing.
var speedForward = 50, //Typing Speed
    speedWait = 1000, // Wait between typing and backspacing
    speedBetweenLines = 800; //Wait between first and second lines

//Run the loop
typeWriter("output", textArray, drawContnet);

function typeWriter(id, ar, dc) {
 // console.log("ar",ar);
 // console.log(dc[a].charAt(2));
  /*
  console.log(dc[a]);
  console.log(aDrawContent);*/

  var element = $("#" + id),
      aString = ar[a],
      aDrawContent = dc[a],
      eHeader = element.children("h1"), //Header element
      eParagraph = element.children("h3"); //Subheader element
     //eDrawing = element.children("p");
     //eDrawing = document.getElementsByClassName("test")[0];


     
     var drawelement = $("#" + "test"),
    eDrawing = drawelement.children("p");
    



    // If full string hasn't yet been typed out, continue typing
    if (i < aString.length) {
      console.log(aString.charAt(i))
      // If character about to be typed is a pipe, switch to second line and continue.
      if (aString.charAt(i) == "|") {
        isParagraph = true;
        eHeader.removeClass("cursor");

       eParagraph.addClass("cursor");

      

        i++;
        setTimeout(function(){ typeWriter(id, ar, dc); }, speedBetweenLines);
        
      // If character isn't a pipe, continue typing.
      } else {
        // Type header or subheader depending on whether pipe has been detected
        if (!isParagraph) {
          eHeader.text(eHeader.text() + aString.charAt(i));
        } else {
          eParagraph.text(eParagraph.text() + aString.charAt(i));
        }
        i++;
        setTimeout(function(){ typeWriter(id, ar, dc); }, speedForward);
      }
      

    // Second Row.

    } else if (i == aString.length) {
      doneDrawingText = true
      console.log("doneDrawingText")
      eParagraph.removeClass("cursor");
      eDrawing.addClass("cursor");


      console.log(dc);
      console.log(dc[a]);
      console.log(aDrawContent);

      
    
      
      
      var x = aDrawContent.length
      console.log('x',x);
      console.log('m',m)
     
 

      // Type header or subheader depending on whether pipe has been detected
      if (m != x){ 
        //eDrawing.text(eDrawing.text() + aDrawContent.charAt(m));
        console.log(m)
        
        console.log('speed',speedForward)
        setTimeout(function(){ draw(); }, speedForward);
      }
   
      function draw(){
        if (m != x){ 
          eDrawing.text(eDrawing.text() + aDrawContent.charAt(m));
          console.log(m)
          m++
          console.log('speed',speedForward,)
          setTimeout(function(){ draw(); }, speedForward);
        }
     
        console.log("draw");
       // eDrawing.text(eDrawing.text() + aDrawContent.charAt(m));
        
      }
    }
  



 

}

