var skillBtn = document.getElementById("skills-button");
var skill = document.getElementById("skills-Id");
skillBtn.addEventListener("click", function () {
    skill.classList.toggle("hide");
});
var printBtn = document.getElementById("print-button");
printBtn.addEventListener("click", function () {
    window.print();
});
