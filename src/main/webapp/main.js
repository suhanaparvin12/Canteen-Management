document.addEventListener("DOMContentLoaded", function() {
            const signup = document.getElementById("signup_form");
            const login = document.getElementById("login_form");
            const loinswitch = document.getElementById("loinswitch");

            function toggleSignup() {
                if (signup.style.display === "none") {
                    signup.style.display = "flex";
                    login.style.display = "none";
                    loinswitch.querySelector('p').innerHTML = "Have an account ?";
                    loinswitch.querySelector('a').innerHTML = "Login";
                } else {
                    login.style.display = "flex";
                    signup.style.display = "none";
                    loinswitch.querySelector('p').innerHTML = "Don't have an account ?";
                    loinswitch.querySelector('a').innerHTML = "Register";
                }
            }

            document.getElementById("regBtn").addEventListener("click", toggleSignup);
            
            window.onload = (event) => {
                console.log("page is fully loaded");
                toggleSignup();
            };
});


/*show dashboard menu */
const navMenu = document.getElementById('nav-menu'),
	  navToggle = document.getElementById('nav-toggle'),
	  navClose = document.getElementById('nav-close');
	  
	  
navToggle.addEventListener('click',()=>{
	navMenu.classList.add('show-menu');
})

navClose.addEventListener('click',()=>{
	navMenu.classList.remove('show-menu');
})


/*show form */
const form = document.getElementById('form-container'),
	  formToggle = document.getElementById('add-btn'),
	  formClose = document.getElementById('form-close');
	  
	  
formToggle.addEventListener('click',()=>{
	form.classList.add('show-form');
})

formClose.addEventListener('click',()=>{
	form.classList.remove('show-form');
})


/* show profile menu */
document.addEventListener('DOMContentLoaded', () => {
    const navprofile = document.getElementById('nav-profile');
    const profile = document.getElementById('profile');

    profile.addEventListener('click', (event) => {
        // Prevent the click event from propagating to the window
        event.stopPropagation();
        navprofile.classList.toggle('show-profile');
    });

    window.addEventListener('click', () => {
        navprofile.classList.remove('show-profile');
    });
});





