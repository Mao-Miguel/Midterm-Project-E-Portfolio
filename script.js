// Function for Single-Page Navigation
function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.classList.remove('active');
    });

    // Remove active class from all nav links
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.classList.remove('active');
    });

    // Show selected section
    document.getElementById(sectionId).classList.add('active');
    
    // Highlight selected nav link (this part is crucial for theme logic)
    document.getElementById('nav-' + sectionId).classList.add('active');

    // Scroll back to top whenever a section changes
    window.scrollTo(0, 0);
}

// IMAGE ZOOM MODAL LOGIC (New feature)

// Get the modal (the container)
var modal = document.getElementById("myModal");

// Get the image inside the modal
var modalImg = document.getElementById("img01");

// Function that runs when any portfolio image is clicked
// It takes the image source (src) of the clicked image
function openModal(imgSrc) {
  modal.style.display = "block"; // Show the modal window
  modalImg.src = imgSrc; // Set the large modal image to match the clicked image
}

// Function to close the modal
function closeModal() {
  modal.style.display = "none"; // Hide the modal window
}

// Also close the modal if the user clicks anywhere outside the zoomed image
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}