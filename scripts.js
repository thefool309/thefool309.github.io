document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.querySelector(".nav-menu");

    console.log(hamburger); // Should log the hamburger element
    console.log(navMenu);    // Should log the nav-menu element

    hamburger.addEventListener("click", function () {
        navMenu.classList.toggle("active");
        console.log(navMenu.classList); // Check class list on click
    });
    document.addEventListener('click', (event) => {
        const isClickInsideMenu = navMenu.contains(event.target);
        const isClickInsideHamburger = hamburger.contains(event.target);
  
        // If the click is outside of the hamburger and menu, close the menu
        if (!isClickInsideMenu && !isClickInsideHamburger) {
          navMenu.classList.remove('active');
        }
      });
});
