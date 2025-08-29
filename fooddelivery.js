    function toggleRestaurants(cityId) {
      document.querySelectorAll(".restaurant-section").forEach(section => section.style.display = "none");
      const current = document.getElementById(cityId);
      if (current) {
        current.style.display = "block";
        const cards = current.querySelectorAll(".restaurant-card");
        current.querySelector(".restaurant-summary").innerHTML = 
          "<strong>Restaurants & Ratings:</strong><br>" + 
          Array.from(cards).map((card, i) => 
            `${i + 1}. ${card.getAttribute("data-name")} - ⭐ ${card.getAttribute("data-rating")}`
          ).join("<br>");
        cards.forEach((card, i) => {
          card.style.animation = `fadeInUp 0.5s ease forwards ${i * 0.2}s`;
        });
      }
    }

    function showLogin() {
      const loginPopup = document.getElementById("login-popup");
      const loginSection = document.getElementById("login-section");
      const signupSection = document.getElementById("signup-section");
      
      loginPopup.style.display = "flex";
      loginSection.style.display = "block";
      signupSection.style.display = "none";
      document.body.style.overflow = "hidden";
    }

    function hideLogin() {
      const loginPopup = document.getElementById("login-popup");
      loginPopup.style.display = "none";
      document.body.style.overflow = "auto";
    }

    function showSignup(event) {
      event.preventDefault();
      const loginSection = document.getElementById("login-section");
      const signupSection = document.getElementById("signup-section");
      
      loginSection.style.display = "none";
      signupSection.style.display = "block";
    }

    function showLoginForm(event) {
      if (event) event.preventDefault();
      const loginSection = document.getElementById("login-section");
      const signupSection = document.getElementById("signup-section");
      
      signupSection.style.display = "none";
      loginSection.style.display = "block";
    }

    function toggleSidebar() {
      document.getElementById("sidebar").classList.toggle("active");
    }

    function toggleTheme() {
      document.body.classList.toggle("dark-mode");
      localStorage.setItem("theme", document.body.classList.contains("dark-mode") ? "dark" : "light");
    }

    window.onload = () => {
      if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
      }
    };

    document.addEventListener('DOMContentLoaded', () => {
      // Form submission handlers
      const loginForm = document.getElementById('login-form');
      const signupForm = document.getElementById('signup-form');
      
      loginForm?.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = e.target.querySelector('input[type="email"]').value;
        const password = e.target.querySelector('input[type="password"]').value;
        console.log('Login attempt:', { email });
        alert('Login functionality will be implemented soon!');
      });

      signupForm?.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = {
          name: e.target.querySelector('input[type="text"]').value,
          email: e.target.querySelector('input[type="email"]').value,
          password: e.target.querySelector('input[type="password"]').value
        };
        console.log('Signup attempt:', { name: formData.name, email: formData.email });
        alert('Signup functionality will be implemented soon!');
      });

      // Social login handlers
      document.querySelectorAll('.social-login').forEach(button => {
        button.addEventListener('click', (e) => {
          const provider = e.currentTarget.classList.contains('google') ? 'Google' : 'Apple';
          alert(`${provider} login will be implemented soon!`);
        });
      });
      
      });
   

