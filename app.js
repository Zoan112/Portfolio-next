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
