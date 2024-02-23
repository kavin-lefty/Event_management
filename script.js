//Password Validation
const passwordInput = document.querySelector("#password");
const eyeIcon = document.querySelector(".pass-eye");
const requirementList = document.querySelectorAll(".requirement-list li");


const requirements = [
    { regex: /.{8,}/, index: 0 }, // Min of 8 characters
    { regex: /[0-9]/, index: 1 }, // At least one number
    { regex: /[a-z]/, index: 2 }, // At least one lowercase letter
    { regex: /[^A-Za-z0-9]/, index: 3 }, // At least one special character
    { regex: /[A-Z]/, index: 4 }, // At least one uppercase letter
]

passwordInput.addEventListener("keyup", (e) => {
    requirements.forEach(item => {

        const isValid = item.regex.test(e.target.value);
        const requirementItem = requirementList[item.index];

        // Updating class and check icon
        if (isValid) {
            requirementItem.classList.add("valid");
            requirementItem.firstElementChild.className = "fa-solid fa-check";
        } else {
            requirementItem.classList.remove("valid");
            requirementItem.firstElementChild.className = "fa-solid fa-circle";
        }
    });
});

eyeIcon.addEventListener("click", () => {
    // Toggle the password input type
    passwordInput.type = passwordInput.type === "password" ? "text" : "password";

    // Update the eye icon 
    eyeIcon.className = `fa-solid fa-eye${passwordInput.type === "password" ? "" : "-slash"}`;
});


// scroll Effect
document.addEventListener('DOMContentLoaded', function() {
    ScrollReveal().reveal ('.card .image',{
    delay: 1500,
    origin:'bottom',
    reset:true,
    distance:'60px',
    duration:3500 
   });
   ScrollReveal().reveal ('.card .con',{
    delay: 500,
    origin:'bottom',
    reset:true,
    distance:'60px',
    duration:3500 
   });
 });