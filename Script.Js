
window.addEventListener("DOMContentLoaded", () => {
    // Select section 2 for navbar background change logic
    const section2ForNavbar = document.querySelector(".section2");
    const navbar = document.getElementById("navbar");
    const section1 = document.querySelector(".section"); // Select Section 1

    if (section2ForNavbar && navbar && section1) {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    // When Section 2 is visible, add background to navbar
                    if (entry.target === section2ForNavbar) {
                        if (entry.isIntersecting) {
                            // Add background when Section 2 is visible
                            navbar.classList.add("scrolled");
                        } else {
                            // Remove background when Section 2 is no longer visible
                            // Only remove if Section 1 is fully in view (reset condition)
                            const section1Position = section1.getBoundingClientRect();
                            if (section1Position.top >= 0) {
                                navbar.classList.remove("scrolled");
                            }
                        }
                    }
                });
            },
            { threshold: 0.5 } // Trigger when 50% of Section 2 is visible
        );

        observer.observe(section2ForNavbar);
        observer.observe(section1); // Observe section 1 as well
    } else {
        console.error("section2ForNavbar, navbar, or section1 not found.");
    }
});











// Wait for DOM content to load
window.addEventListener("DOMContentLoaded", () => {
    // Animate Title1
    const title = document.querySelector('.img1a');
    if (title) {
        setTimeout(() => {
            title.classList.add('show');
        }, 100);
    }
   
    // Animate Text2
    const Text1a = document.querySelector('.Text1a');
    if (Text1a) {
        setTimeout(() => {
            Text1a.classList.add('show');
        }, 2000);
    }
   }); 

















   function openModal(img) {
    document.getElementById("modal").style.display = "flex";
    document.getElementById("modal-img").src = img.src;
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}






















let currentSection = 'section1a';

document.getElementById('continue1').addEventListener('click', () => switchSection('section2a'));
document.getElementById('back1').addEventListener('click', () => switchSection('section1a'));
document.getElementById('continue2').addEventListener('click', validateForm);
document.getElementById('back2').addEventListener('click', () => switchSection('section2a'));
document.getElementById('submit').addEventListener('click', () => switchSection('section4a'));

document.getElementById('ticketSlider').addEventListener('input', updateTotal);
document.querySelectorAll('.extra-option').forEach(button => {
    button.addEventListener('click', function () {
        this.classList.toggle('selected');
        updateTotal();
    });
});

document.querySelectorAll('.ticket-option').forEach(button => {
    button.addEventListener('click', function () {
        document.querySelectorAll('.ticket-option').forEach(btn => btn.classList.remove('selected'));
        this.classList.add('selected');
        updateTotal();
    });
});

function switchSection(section) {
    document.querySelector(`.${currentSection}`).style.display = 'none';
    document.querySelector(`.${section}`).style.display = 'block';
    currentSection = section;
}

function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

function validateForm() {
    let valid = true;
    ['name', 'surname', 'phone', 'email'].forEach(field => {
        let input = document.getElementById(field);
        let error = document.getElementById(field + 'Error');
        if (!input.value || 
            (field === 'phone' && input.value.length < 9) || 
            (field === 'email' && !validateEmail(input.value))) {
            error.style.display = 'block';
            valid = false;
        } else {
            error.style.display = 'none';
        }
    });

    if (valid) switchSection('section3a');
}


function updateTotal() {
    let selectedTicket = document.querySelector('.ticket-option.selected');
    let ticketPrice = selectedTicket ? parseInt(selectedTicket.getAttribute('data-price')) : 0;
    let ticketCount = parseInt(document.getElementById('ticketSlider').value);
    let extraCost = Array.from(document.querySelectorAll('.extra-option.selected'))
        .reduce((sum, btn) => sum + parseInt(btn.getAttribute('data-price')), 0);
    let total = (ticketPrice * ticketCount) + extraCost;
    document.getElementById('ticketCount').innerText = ticketCount;
    document.getElementById('totalPrice').innerText = total;
}



























// script.js

// Fetch the JSON file
fetch('news.json')
  .then(response => response.json()) // Parse JSON
  .then(data => {
    const articles = data.articles;
    let output = '';

    // Loop through the articles and create HTML for each
    articles.forEach(article => {
      output += `
        <div class="article">
          <h2>${article.title}</h2>
          <p class="date">${article.date}</p>
          <p>${article.content}</p>
        </div>
      `;
    });

    // Insert the articles into the news container
    document.getElementById('news-container').innerHTML = output;
  })
  .catch(error => {
    console.log('Error loading JSON:', error);
  });






















