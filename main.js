// Get all h2 elements on the page
const h3Elements = document.querySelectorAll('h3');

// Add event listeners for each h2 element
h3Elements.forEach((h3) => {
    // When mouse is over the h2 element
    h3.addEventListener('mouseover', () => {
        h3.style.textShadow = '0 0 10px #778769, 0 0 20px #778769, 0 0 30px #778769';
    });

    // When mouse leaves the h2 element
    h3.addEventListener('mouseout', () => {
        h3.style.textShadow = 'none';
    });
});

console.log("main.js loaded successfully!");



