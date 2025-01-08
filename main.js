// Write JavaScript here.
console.log("main.js loaded successfully!");

/* Some sample JavaScript: this just listens 
for any "click" on the hero element and then
toggles the "active" class which we use to
shift colors when they click */
let hero = document.querySelector(".hero");
hero.addEventListener("click", () => {
  console.log("They clicked the hero!");
  hero.classList.toggle("active");
});

<script>
    // Get the Projects header element
    const projectsHeader = document.querySelector('.projects-section h2');

    // Add the glow effect on mouseenter
    projectsHeader.addEventListener('mouseenter', () => {
        projectsHeader.classList.add('glow');
    });

    // Remove the glow effect on mouseleave
    projectsHeader.addEventListener('mouseleave', () => {
        projectsHeader.classList.remove('glow');
    });
</script>
