/*const mobileMenu = document.getElementsByClassName("mobileMenuDiv")[0]
const mobileMenuList = document.getElementsByClassName("nav")[0]
let menuOpen = false;

console.log(mobileMenu)
/*
mobileMenu.addEventListener('click', ()=>{
    alert("click");
})
*/

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

*/