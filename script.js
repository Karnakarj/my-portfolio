// Toggle Mobile Navigation
function toggleMenu() {
  const navLinks = document.getElementById('navLinks');
  navLinks.classList.toggle('show');
}

// Smooth Scroll to Section with Header Offset
function navigateToSection(id) {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('nav ul li a');
  sections.forEach(section => section.classList.remove('active-section'));
  navLinks.forEach(link => link.classList.remove('active'));
  document.getElementById(id).classList.add('active-section');
  navLinks.forEach(link => {
    if (link.getAttribute('href').substring(1) === id) {
      link.classList.add('active');
    }
  });
  if (window.innerWidth <= 768) toggleMenu();
  const headerHeight = document.querySelector('header').offsetHeight;
  const elementPosition = document.getElementById(id).getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - headerHeight - 20;
  window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
}

document.addEventListener("DOMContentLoaded", () => {
  navigateToSection('home');
});

// Initialize EmailJS (replace with your keys)
(function () {
  emailjs.init("YOUR_EMAILJS_USER_ID");
})();

// Handle Contact Form Submission
document.getElementById('contact-form').addEventListener('submit', function (event) {
  event.preventDefault();
  emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
    .then(() => {
      alert('Message sent successfully!');
      this.reset();
    }, error => {
      alert('Failed to send message. Please try again.');
      console.error('Error:', error);
    });
});

// Custom Cursor Movement
document.addEventListener('mousemove', function (e) {
  const cursor = document.querySelector('.cursor');
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
});
document.addEventListener('scroll', function () {
  const cursor = document.querySelector('.cursor');
  cursor.style.display = 'none';
});
document.addEventListener('mousemove', function () {
  const cursor = document.querySelector('.cursor');
  cursor.style.display = 'block';
});

// Contact Overlay Hover Effects
function animateContactOverlay() {
  const msg = document.getElementById('contactHoverMsg');
  if (msg) msg.innerText = "Thank you for stopping by! I invite you to leave a message, share your suggestions, or simply drop a note—your feedback is the spark that helps drive our innovation";
}
function resetContactOverlay() {
  const msg = document.getElementById('contactHoverMsg');
  if (msg) msg.innerText = "Thank you for stopping by! I invite you to leave a message, share your suggestions, or simply drop a note—your feedback is the spark that helps drive our innovation";
}

// Toggle Media in About Section
document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("toggleMedia");
  const profilePhoto = document.getElementById("profilePhoto");
  const introVideo = document.getElementById("introVideo");

  toggleBtn.addEventListener("click", () => {
    if (introVideo.style.display === "none") {
      introVideo.style.display = "block";
      profilePhoto.style.display = "none";
      toggleBtn.textContent = "Show Photo";
    } else {
      introVideo.style.display = "none";
      profilePhoto.style.display = "block";
      toggleBtn.textContent = "Watch Video";
    }
  });
});

/* ----- Particle Background with 10 Random Configurations & Parallax Effect ----- */
const particleConfigs = [
  {
    particles: {
      number: { value: 100, density: { enable: true, value_area: 800 } },
      color: { value: "#ff6e48" },
      shape: { type: "circle" },
      size: { value: 4, random: true },
      line_linked: { enable: true, distance: 150, color: "#ff6e48", opacity: 0.8, width: 2 },
      move: { enable: true, speed: 3 }
    },
    interactivity: {
      detect_on: "window",
      events: {
        onhover: {
          enable: true,
          mode: "repulse",
          parallax: { enable: true, force: 60, smooth: 10 }
        }
      }
    },
    retina_detect: true
  },
  {
    particles: {
      number: { value: 80, density: { enable: true, value_area: 700 } },
      color: { value: "#4285F4" },
      shape: { type: "triangle" },
      size: { value: 5, random: true },
      line_linked: { enable: true, distance: 120, color: "#4285F4", opacity: 0.6, width: 1 },
      move: { enable: true, speed: 4 }
    },
    interactivity: {
      detect_on: "window",
      events: {
        onhover: {
          enable: true,
          mode: "grab",
          parallax: { enable: true, force: 60, smooth: 10 }
        }
      }
    },
    retina_detect: true
  },
  {
    particles: {
      number: { value: 110, density: { enable: true, value_area: 850 } },
      color: { value: "#0F9D58" },
      shape: { type: "star" },
      size: { value: 3, random: true },
      line_linked: { enable: true, distance: 130, color: "#0F9D58", opacity: 0.7, width: 1 },
      move: { enable: true, speed: 3.5 }
    },
    interactivity: {
      detect_on: "window",
      events: {
        onhover: {
          enable: true,
          mode: "bubble",
          parallax: { enable: true, force: 60, smooth: 10 }
        }
      }
    },
    retina_detect: true
  },
  {
    particles: {
      number: { value: 80, density: { enable: true, value_area: 800 } },
      color: { value: "#DB4437" },
      shape: { type: "polygon", polygon: { nb_sides: 6 } },
      size: { value: 4, random: true },
      line_linked: { enable: true, distance: 150, color: "#DB4437", opacity: 0.8, width: 2 },
      move: { enable: true, speed: 3 }
    },
    interactivity: {
      detect_on: "window",
      events: {
        onhover: {
          enable: true,
          mode: "grab",
          parallax: { enable: true, force: 60, smooth: 10 }
        }
      }
    },
    retina_detect: true
  },
  {
    particles: {
      number: { value: 100, density: { enable: true, value_area: 800 } },
      color: { value: "#ff6e48" },
      shape: { type: "circle" },
      size: { value: 6, random: true },
      line_linked: { enable: false },
      move: { enable: true, speed: 5 }
    },
    interactivity: {
      detect_on: "window",
      events: {
        onhover: {
          enable: true,
          mode: "repulse",
          parallax: { enable: true, force: 60, smooth: 10 }
        }
      }
    },
    retina_detect: true
  },
  {
    particles: {
      number: { value: 70, density: { enable: true, value_area: 700 } },
      color: { value: "#4285F4" },
      shape: { type: "polygon", polygon: { nb_sides: 8 } },
      size: { value: 4, random: true },
      line_linked: { enable: true, distance: 160, color: "#4285F4", opacity: 0.9, width: 2 },
      move: { enable: true, speed: 2 }
    },
    interactivity: {
      detect_on: "window",
      events: {
        onhover: {
          enable: true,
          mode: "grab",
          parallax: { enable: true, force: 60, smooth: 10 }
        }
      }
    },
    retina_detect: true
  },
  {
    particles: {
      number: { value: 95, density: { enable: true, value_area: 750 } },
      color: { value: "#F4B400" },
      shape: { type: "edge" },
      size: { value: 5, random: true },
      line_linked: { enable: true, distance: 150, color: "#F4B400", opacity: 0.7, width: 1 },
      move: { enable: true, speed: 4 }
    },
    interactivity: {
      detect_on: "window",
      events: {
        onhover: {
          enable: true,
          mode: "repulse",
          parallax: { enable: true, force: 60, smooth: 10 }
        }
      }
    },
    retina_detect: true
  },
  {
    particles: {
      number: { value: 105, density: { enable: true, value_area: 800 } },
      color: { value: "#DB4437" },
      shape: { type: "triangle" },
      size: { value: 4, random: true },
      line_linked: { enable: true, distance: 140, color: "#DB4437", opacity: 0.8, width: 1 },
      move: { enable: true, speed: 3 }
    },
    interactivity: {
      detect_on: "window",
      events: {
        onhover: {
          enable: true,
          mode: "grab",
          parallax: { enable: true, force: 60, smooth: 10 }
        }
      }
    },
    retina_detect: true
  }
];

const config = particleConfigs[Math.floor(Math.random() * particleConfigs.length)];
particlesJS("particles-js", config);
