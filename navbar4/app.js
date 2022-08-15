const burger = document.querySelector(".burger")
const navLists = document.querySelector(".nav-links")
const links = document.querySelectorAll(".nav-links > li ")

const slider = () => {
    burger.addEventListener('click', () => {
        navLists.classList.toggle("active")

        links.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ""
            } else {
                link.style.animation = `linkslider 300ms ease forwards ${index / 5 + .5}s`
            }
        })

        
    })
}

slider()



