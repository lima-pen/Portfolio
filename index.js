// document.querySelectorAll(".navbar ul li a").forEach((link) => {
//   link.addEventListener("click", function (e) {
//     const sectionId = this.getAttribute("data-section")

//     if (sectionId) {
//       e.preventDefault()

     
//       document.querySelectorAll(".navbar ul li").forEach((li) => {
//         li.classList.remove("active")
//       })

      
//       this.parentElement.classList.add("active")

     

//       const targetSection = document.getElementById(sectionId)
//       if (targetSection) {

//         targetSection.scrollIntoView({ behavior: "smooth", block: "start" })
//       }
//     }
//   })
// })

// window.addEventListener("scroll", () => {
//   const navbar = document.querySelector(".navbar")
//   if (window.scrollY > 50) {
//     navbar.style.background = "rgba(252, 250, 238, 0.95)"
//     navbar.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)"
//   } else {
//     navbar.style.background = "transparent"
//     navbar.style.boxShadow = "none"
//   }
// })
// Hamburger menu toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

// Navigation links functionality
document.querySelectorAll('.navbar ul li a').forEach((link) => {
  link.addEventListener('click', function (e) {
    const sectionId = this.getAttribute('data-section');

    if (sectionId) {
      e.preventDefault();

      // Remove active class from all nav items
      document.querySelectorAll('.navbar ul li').forEach((li) => {
        li.classList.remove('active');
      });

      // Add active class to clicked nav item
      this.parentElement.classList.add('active');

      // Close mobile menu after clicking
      hamburger.classList.remove('active');
      navMenu.classList.remove('active');

      // Smooth scroll to section
      const targetSection = document.getElementById(sectionId);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  });
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.style.background = 'rgba(252, 250, 238, 0.95)';
    navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
  } else {
    navbar.style.background = 'transparent';
    navbar.style.boxShadow = 'none';
  }
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
  if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
  }
});