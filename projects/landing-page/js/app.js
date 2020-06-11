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
for (let i = 0; i < landingContainer.length; i++) {
    // Create new anchor element.
    let navBarListItem = document.createElement("a");

    // Get text content of landingContainers First Element
    navBarListItem.textContent = landingContainer[i].firstElementChild.textContent;
    // Add a new class to the navBarListItem.
    navBarListItem.classList.add("menu__link");
    // Add the class tag as an href
    navBarListItem.href = "#" + landingContainer[i].parentElement.id;
    // Give the navBarListItem an id.
    navBarListItem.id = landingContainer[i].parentElement.id;
    // Append the new navBarListItem to the navBarList element.
    navBarList.appendChild(navBarListItem);
}

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
            sections[i].classList.add("your-active-class");
        } else {
            sections[i].classList.remove("your-active-class");
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

