const navbarEl = document.querySelector(".navbar");

const contactContainerEl = document.querySelector(".contact-container");

const projectContainer = document.querySelector(".project-container");
console.log(navbarEl.offsetHeight);

console.log(contactContainerEl.offsetTop);

window.addEventListener("scroll", () => {
    if(window.scrollY > projectContainer.offsetTop - navbarEl.offsetHeight - 20) {
        navbarEl.classList.add("active")
    } else {
        navbarEl.classList.remove("active");
    }
});
w