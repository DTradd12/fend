/**
 * Define Global Variables
 *
 */
let navBarList = document.querySelector("#navbar__list");
let landingContainer = document.querySelectorAll(".landing__container");
let sections = document.querySelectorAll("section");
let anchors = document.getElementsByClassName("menu__link");

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

// build the nav
(function () {
    for (let i = 0; i < landingContainer.length; i++) {
        // Create new anchor element.
        let navBarListItem = document.createElement("li");

        // Get text content of landingContainers First Element
        navBarListItem.textContent = landingContainer[i].firstElementChild.textContent;
        // Add a new class to the navBarListItem.
        navBarListItem.classList.add("menu__link");
        // Give the navBarListItem an id.
        navBarListItem.id = landingContainer[i].parentElement.id;
        // Append the new navBarListItem to the navBarList element.
        navBarList.appendChild(navBarListItem);
    }
}());

// Add class 'active' to section when near top of viewport
document.addEventListener("scroll", function viewPortCheck() {
    for (let i = 0; i < landingContainer.length; i++) {
        // Get the bounding of each LandingContainer
        const bounding = landingContainer[i].getBoundingClientRect();

        // If the landingContainer is in the main window, make the class "active", if not active, remove "active"
        if (
            bounding.top >= 0 &&
            bounding.left >= 0 &&
            bounding.right <= (window.innerWidth)
            && bounding.bottom <= (window.innerHeight)
        ) {
            sections[i].classList.add("active-class");
            sections[i].classList.remove("inactive-class");
        } else {
            sections[i].classList.add("inactive-class");
            sections[i].classList.remove("active-class");
        }
    }
    for (let i = 0; i < sections.length; i++){
        if (sections[i].className === "active-class") {
            for(let x =0; x < anchors.length; x++){
                if (anchors[x].id === sections[i].id) {
                    anchors[x].classList.add("active");
                    anchors[x].classList.remove("inactive");
                } else {
                    anchors[x].classList.add("inactive");
                    anchors[x].classList.remove("active");
                }
                }
            }
        }
});



// Scroll to anchor ID using scrollTO event
for (let i=0; i<anchors.length;i++){
    // Assign the topmost bounding of each section to a variable.
    let sectionTop = sections[i].getBoundingClientRect().top;

    // if the anchor is clicked, go to the corresponding section.
    anchors[i].addEventListener("click", () => window.scroll({top: sectionTop, behavior: "smooth"}))
}

/**
 * End Main Functions
 * Begin Events
 *
 */

for (let i = 0; i < sections.length; i++){
    if(sections[i].classList.value === "active-class"){
        sections[i].classList.value;
    }
}