const navLinks = document.querySelectorAll(".nav-link")
const mousecursor = document.querySelector('.cursor')
const audio = document.querySelector('.mouse-click')


// cusror mousemove
window.addEventListener('mousemove', cursor)
function cursor(e){
    mousecursor.setAttribute("style","top:"+(e.pageY - 16)+"px; left:"+(e.pageX - 16)+"px")
}

// mouse click sound 
window.addEventListener('click',()=>{
    audio.play()
})

// active navbar menuive
navLinks.forEach(navlink =>{
    navlink.addEventListener("click", ()=>{
        navlink.classList.toggle('active')
    })
})

// const currentlocation = location.href
// const navlength = navLinks.length

// navLinks.forEach(navlink =>{
//     navlink.addEventListener("click", ()=>{
//         for (let i=0; i<navlength; i++){
//             if(navlink[i].href === currentlocation){
//                 navlink[i].classList.add('active')
//             }
//             else{
//                 navlink[i].classList.remove('active')
//             }
//         }
        
//     })
// })

// skills accordian page 

const skillsContent = document.getElementsByClassName('skills-content')
const skillsheader = document.querySelectorAll('.skills-header')

function accordion(){
    console.log(skillsContent.length);
    let classItemGet = this.parentNode.className
    for (i=0; i<skillsContent.length; i++){
        skillsContent[i].className = 'skills-content skills-close'
    }
    if(classItemGet === 'skills-content skills-close'){
        this.parentNode.className = 'skills-content skills-open'
    }
    console.log(classItemGet);
   
}

skillsheader.forEach((e) =>{
    e.addEventListener('click', accordion)
})