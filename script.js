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

// IMAGE ZOOM MODAL LOGIC 

var modal = document.getElementById("myModal");
var modalImg = document.getElementById("img01");

function openModal(imgSrc) {
  modal.style.display = "block"; 
  modalImg.src = imgSrc; 
}

function closeModal() {
  modal.style.display = "none"; 
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// ACCORDION (DROPDOWN) LOGIC
var acc = document.getElementsByClassName("accordion-btn");
for (var i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    // Toggle the active class for styling
    this.classList.toggle("active-accordion");
    
    // Toggle the +/- icon
    var icon = this.querySelector('.icon');
    if (icon.innerHTML === '+') {
        icon.innerHTML = '-';
    } else {
        icon.innerHTML = '+';
    }

    // Toggle the display of the actual portfolio grid content
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}