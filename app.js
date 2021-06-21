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

var buttonContnet = ["Download CV",
];
var stringButton = buttonContnet[a]
var w = stringButton.length;

console.log("w",w)

var e = 0;


// Speed (in milliseconds) of typing.
var speedForward = 80, //Typing Speed
    speedWait = 1000, // Wait between typing and backspacing
    speedBetweenLines = 600; //Wait between first and second lines

//Run the loop
typeWriter("output", textArray, drawContnet, buttonContnet);

function typeWriter(id, ar, dc, bc) {


  var element = $("#" + id),
      aString = ar[a],
      aDrawContent = dc[a],
      eHeader = element.children("h1"), //Header element
      eParagraph = element.children("h3"); //Subheader element



    var drawelement = $("#" + "test"),
    eDrawing = drawelement.children("p");


      
    var drawElementBtn = $("#" + "downloadCvBtn"),
    eDrawButton = drawElementBtn.children("a");
    aDrawButton = bc[e];

  


    
    // If full string hasn't yet been typed out, continue typing
    if (i < aString.length) {
      console.log(aString.charAt(i))
      // If character about to be typed is a pipe, switch to second line and continue.
      if (aString.charAt(i) == "|") {
        isParagraph = true;
        eHeader.removeClass("cursor");

       eParagraph.addClass("cursor");

      

        i++;
        setTimeout(function(){ typeWriter(id, ar, dc, bc); }, speedBetweenLines);
        
      // If character isn't a pipe, continue typing.
      } else {
        // Type header or subheader depending on whether pipe has been detected
        if (!isParagraph) {
          eHeader.text(eHeader.text() + aString.charAt(i));
        } else {
          eParagraph.text(eParagraph.text() + aString.charAt(i));
        }
        i++;
        setTimeout(function(){ typeWriter(id, ar, dc, bc); }, speedForward);
      }
      

    // Second Row.
    } else if (i == aString.length) {
      doneDrawingText = true
      console.log("doneDrawingText")
      eParagraph.removeClass("cursor");
      eDrawing.addClass("cursor");
      var x = aDrawContent.length
      if (m != x){ 
        setTimeout(function(){ draw(); }, speedBetweenLines);
      }
   
      function draw(){
        if (m != x){ 
          eDrawing.text(eDrawing.text() + aDrawContent.charAt(m));
          console.log("m",m);
          console.log(aDrawContent.charAt(m));
          m++
          console.log('speed',speedForward,)
          setTimeout(function(){ draw(); }, speedForward);
        }
        else if(m == x){
         // alert("done");
          buttonDrawing();
        }


        //Third Line

        function buttonDrawing(){
          console.log("buttonDrawing");
          eDrawing.removeClass("cursor");
          eDrawButton.addClass("cursor");
          console.log(eDrawButton)

          if (w != e){ 
            setTimeout(function(){ drawBtn(); }, speedBetweenLines);
          }
        };


        function drawBtn(){
          if (w != e){
            console.log(w);
          console.log(bc);
         console.log(stringButton.charAt(e));
         eDrawButton.text(eDrawButton.text() + stringButton.charAt(e));
          e++
          console.log(e);
          setTimeout(function(){ drawBtn(); }, speedForward);
          }else if (w == e){
            buttonOutline()
          }
        }




        function buttonOutline(){
          //eDrawButton.removeClass("cursor");
          //drawElementBtn.addClass("cursor");
        
          setTimeout(function(){ CVbuttonStyle(); }, speedBetweenLines);
        }





       function CVbuttonStyle(){
        CVbutton = document.getElementsByClassName("downloadCvBtn")[0]
        CVbutton.classList.add("bacgroundColor");
        console.log("BGColor")


        setTimeout(function() {
          CVbutton.style.borderColor = "#C0AC9F";
          eDrawButton.removeClass("cursor");
          $("#" + "blink").addClass("cursor")
          console.log("borderColor")
          },600)
          
          setTimeout(function() {
            CVbutton.style.color = "white"
            console.log("TextColor")
            },1200)


            setTimeout(function() {
              console.log("cursor")
             /* drawElementBtn.removeClass("cursor");*/
              },1800)
         
       }
        
      }
    }
  



 

}

