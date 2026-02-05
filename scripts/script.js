document.querySelector(".js-light-dark-mode-button").addEventListener("click", () => {
    toggleLightDarkMode();
})

function toggleLightDarkMode() {
    element = document.querySelector(".js-light-dark-mode-button");
    if (element.dataset.mode === "dark") {
        element.dataset.mode = "light";

        element.classList.remove("dark-mode-button")
        element.classList.add("light-mode-button")

        document.body.classList.remove("dark-mode");
        document.body.classList.add("light-mode");

        document.querySelector(".download-button-dark").classList.add("download-button-light");
        document.querySelector(".download-button-dark").classList.remove("download-button-dark");


        element.innerHTML = ` <img class="light-mode-sign" src="images/light-mode-sign.png" alt="dark-mode-sign">`

        document.querySelector(".js-download-link").innerHTML=`<img class="download-sign" src="images/dark-download-sign.png" alt="">`;

        document.querySelector(".phone-no-sign-container").innerHTML=`<img class="phone-sign" src="images/dark-telephone-sign.png" alt="telephone-sign">`

        containers=document.querySelectorAll(".about-me-container, .education-container, .awards-container, .skills-container, .project-details-container, .contact-container, .footer-container")

        containers.forEach(container => {
            container.style.backgroundColor="rgb(214, 210, 210)";
            container.style.borderColor="rgb(0,0,0)";
        });

        document.querySelectorAll(".project-heading-dark").forEach(element=>{
            element.classList.add("project-heading-light")
            element.classList.remove(".project-heading-dark")
        })
        
        
    }
    else {
        element.dataset.mode = "dark";

        element.classList.remove("light-mode-button")
        element.classList.add("dark-mode-button")

        document.body.classList.remove("light-mode");
        document.body.classList.add("dark-mode");

         document.querySelector(".download-button-light").classList.add("download-button-dark");
        document.querySelector(".download-button-light").classList.remove("download-button-light");

        element.innerHTML = ` <img class="dark-mode-sign" src="images/dark-mode-sign.png" alt="dark-mode-sign">`

        document.querySelector(".js-download-link").innerHTML=`<img class="download-sign" src="images/light-download-sign.png" alt="">`;

        document.querySelector(".phone-no-sign-container").innerHTML=`<img class="phone-sign" src="images/light-telephone-sign.png" alt="telephone-sign">`

        containers=document.querySelectorAll(".about-me-container, .education-container, .awards-container, .skills-container, .project-details-container, .contact-container, .footer-container")

        containers.forEach(container => {
            container.style.backgroundColor="#2a2a2a";
            container.style.borderColor="rgb(119, 118, 118)";
        });

        document.querySelectorAll(".project-heading-light").forEach(element=>{
            element.classList.add("project-heading-dark")
            element.classList.remove(".project-heading-light")
        })
    }
}
