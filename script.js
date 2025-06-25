// Typing effect for the role text
const roles = ['AI Enthusiast!', 'Automation Freak', 'Software Engineer'];
const typingText = document.getElementById('typing-text');
const cursor = document.querySelector('.cursor');
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingDelay = 100; // Typing speed in milliseconds
let erasingDelay = 50;  // Erasing speed in milliseconds
let newTextDelay = 2000; // Delay between roles in milliseconds

function type() {
    const currentRole = roles[roleIndex];
    
    if (isDeleting) {
        // Remove character
        typingText.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
    } else {
        // Add character
        typingText.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
    }

    // If word is complete
    if (!isDeleting && charIndex === currentRole.length) {
        // Pause at end of word
        isDeleting = true;
        setTimeout(type, newTextDelay);
    } else if (isDeleting && charIndex === 0) {
        // Move to next word
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        setTimeout(type, typingDelay);
    } else {
        // Continue typing/erasing
        const delay = isDeleting ? erasingDelay : typingDelay;
        setTimeout(type, delay);
    }
}

// Start the typing effect when the page loads
window.addEventListener('load', () => {
    // Start the typing effect after a short delay
    setTimeout(type, 500);
});
