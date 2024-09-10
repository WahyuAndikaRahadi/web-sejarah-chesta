// Function to show the selected section and hide others
function showSection(sectionId) {
    // Get all sections
    const sections = document.querySelectorAll('.section');
    
    // Loop through each section
    sections.forEach(section => {
        // Hide the section if it's not the one to be shown
        if (section.id === sectionId) {
            section.style.display = 'block';
            section.classList.add('active');
        } else {
            section.style.display = 'none';
            section.classList.remove('active');
        }
    });
}

// Optionally, set default section to be visible on page load
document.addEventListener('DOMContentLoaded', () => {
    showSection('pengertian'); // You can change this to show a different section by default
});