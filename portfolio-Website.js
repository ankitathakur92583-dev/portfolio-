 let body = document.querySelector("body")
 let modeBtn = document.getElementById('mode-btn')

  let isdark = false;
  modeBtn.addEventListener("click",()=>{
   console.log("click")
    if(!isdark){
    body.style.color = "black";
    body.style.background = "white"
    modeBtn.style.marginLeft = "12%"
    modeBtn.classList.add("mode-out")
    Hamburger.style.color = "black"
      isdark = true;
    }else{
    body.style.color = "var(--text)";
    body.style.background = "var(--bg)"
    modeBtn.style.marginLeft = "56%"
    Hamburger.style.color = "white"
      isdark = false
    }
  })
      
// Hamburger menu //
let navLinks = document.querySelector('.nav-links')
let Hamburger = document.querySelector('#menuBtn');
let navHamb = document.querySelector('#navMenu')
      
Hamburger.addEventListener("click",(e)=>{
  navHamb.classList.add("show")
  navHamb.style.display = "flex"
  body.classList.add("show-overlay")
   e.stopPropagation()
    console.log("click");
      });
body.addEventListener("click",()=>{
  navHamb.style.display = "none"
  body.classList.remove("show-overlay");
  contactForm.style.display = "none" 
  contactPopup.style.display="none"
})

// scroll-animation //
const reavels = document.querySelectorAll(".reveal")
const observer = new IntersectionObserver((entries)=>{
  entries.forEach((entry) =>{
    if(entry.isIntersecting){
      entry.target.classList.add("show")
    }
  })
});
      reavels.forEach((element)=>{
        observer.observe(element);
      })
// ----typing----//
let typing = document.querySelector(".kicker");

const textType = "available for junior developer roles.";
const words = textType
let index = 0;

const interval = setInterval(() => {
  if (index < words.length) {
    typing.textContent = typing.textContent + words[index];
    index++;
  } else {
    clearInterval(interval);
  }
},100);

// ---- contact-form validation ---- // 
let From = document.getElementById('contactForm')  
let contactForm = document.querySelector('.contact-form')
let btnGost = document.querySelectorAll('.btn-form')  ;
let sumbitBtn = document.getElementById('sumbit')
let contactPopup = document.getElementById('contact-popup')
let okBtn = document.getElementById("ok-pop")
let nameInput = document.getElementById('name')  
let emailInput = document.getElementById('email')  
let messageInput = document.getElementById('message')  
let nameError = document.getElementById('nameError')
let emailError = document.getElementById('emailError')   
let messageError = document.getElementById('messageError')   
let massLength = document.getElementById('mass-length')

      //character counter textarea//
   messageInput.addEventListener("input",()=>{
     let maxlength = 150;
     let remain = maxlength - messageInput.value.length
     massLength.innerText = remain
   });
      
  btnGost.forEach((btn) =>{
 btn.addEventListener("click",(e)=>{
   e.stopPropagation()
  contactForm.style.display = "block" 
   console.log("click")
   body.classList.add("show-overlay")
   console.log(contactForm)
      })
 })  
  contactForm.addEventListener("click",(e)=>{
  e.stopPropagation()
  })
 contactPopup.addEventListener("click",(e)=>{
  e.stopPropagation()
  })
  okBtn.addEventListener("click",()=>{
    contactPopup.style.display = "none"
    body.classList.remove("show-overlay")
  })
      
      
sumbitBtn.addEventListener("click",(e)=>{
    e.preventDefault()
    
const name = nameInput.value.trim();
const email = emailInput.value.trim();
const massage = messageInput.value.trim();

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
let isValid = true;
    
   if(name === ""){
    nameError.style.visibility = 'visible';
     nameError.innerText = "Name shouldn't be empty"
     isValid = false;
   }else {
    nameError.style.visibility = "hidden";
      }
    
    if(email ===""){
      emailError.style.visibility = 'visible';
     emailError.innerText = "Name shouldn't be empty"
     isValid = false;
    }else if(!emailPattern.test(email)){
    emailError.style.visibility = "visible";
    emailError.innerText = "Please enter a valid email";
    isValid = false;
    }
    else{
      emailError.style.visibility = "hidden";
    }
  
    //---Post Method---//
  if(isValid){
    fetch(From.action, {
      method: "POST",
      body: new FormData(From),
      headers: { "Accept": "application/json" }
    }).then((response)=>{
    if(response.ok){
      
    contactPopup.style.display="block"
    contactForm.style.display = "none" 
    body.classList.add("show-overlay")

    nameInput.value =""
    emailInput.value =""
    messageInput.value = ""
    }
    })
   .catch(error => console.log("Error:",error))
  } 
  }) ;
      