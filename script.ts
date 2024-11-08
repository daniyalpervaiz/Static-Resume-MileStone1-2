
let skillBtn:any = document.getElementById("skills-button") 
let skill:any=document.getElementById("skills-Id")


skillBtn.addEventListener("click",()=>{
    skill.classList.toggle("hide")
  
})


let printBtn:any=document.getElementById("print-button")
printBtn.addEventListener("click",()=>{
window.print()
})