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

const aboutHeading = document.querySelector('h2');

aboutHeading.addEventListener('mouseover', () => {
    aboutHeading.classList.add('sparkle');
});

aboutHeading.addEventListener('mouseout', () => {
    aboutHeading.classList.remove('sparkle');
});


// Create the custom cursor element
const cursor = document.createElement('div');
cursor.classList.add('custom-cursor');
document.body.appendChild(cursor);

// Update cursor position on mouse move
document.addEventListener('mousemove', (e) => {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
});

// Optional: Add hover effects for specific elements
const hoverElements = document.querySelectorAll('a, button, .hover-effect');
hoverElements.forEach((el) => {
    el.addEventListener('mouseover', () => {
        cursor.style.transform = 'scale(1.5)'; // Enlarge cursor
    });
    el.addEventListener('mouseout', () => {
        cursor.style.transform = 'scale(1)'; // Reset size
    });
});


console.log("main.js loaded successfully!");



