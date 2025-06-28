// Particle System
function createParticles() {
    const particlesContainer = document.getElementById("particles")
    const particleCount = 50
  
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement("div")
      particle.className = "particle"
      particle.style.left = Math.random() * 100 + "%"
      particle.style.animationDelay = Math.random() * 6 + "s"
      particle.style.animationDuration = Math.random() * 3 + 3 + "s"
      particlesContainer.appendChild(particle)
    }
  }
  
  // Tab Navigation
  function initTabs() {
    const navBtns = document.querySelectorAll(".nav-btn")
    const tabContents = document.querySelectorAll(".tab-content")
  
    navBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        const targetTab = btn.getAttribute("data-tab")
  
        // Remove active class from all buttons and tabs
        navBtns.forEach((b) => b.classList.remove("active"))
        tabContents.forEach((tab) => tab.classList.remove("active"))
  
        // Add active class to clicked button and corresponding tab
        btn.classList.add("active")
        document.getElementById(targetTab).classList.add("active")
      })
    })
  }
  
  // Slot Machine Counter Animation
  function animateCounter(element, target, suffix = "") {
    const duration = 2000
    const steps = 60
    const increment = target / steps
    let current = 0
    let step = 0
  
    const timer = setInterval(() => {
      current += increment
      step++
  
      if (step >= steps) {
        current = target
        clearInterval(timer)
      }
  
      // Format number with commas
      const formattedNumber = Math.floor(current).toLocaleString()
      element.textContent = formattedNumber + suffix
    }, duration / steps)
  }
  
  // Initialize counters when Introduction tab is active
  function initCounters() {
    const visitsCounter = document.getElementById("visits-counter")
    const playersCounter = document.getElementById("players-counter")
  
    // Start animations with a slight delay
    setTimeout(() => {
      animateCounter(visitsCounter, 15000000, "+")
    }, 500)
  
    setTimeout(() => {
      animateCounter(playersCounter, 227640, "")
    }, 800)
  }
  
  // Hire Tab Functionality
  function initHireTab() {
    const agreeBtn = document.getElementById("agree-btn")
    const termsBtn = document.getElementById("terms-btn")
    const contactForm = document.getElementById("contact-form")
    const modal = document.getElementById("terms-modal")
    const closeModal = document.getElementById("close-modal")
    const modalAgree = document.getElementById("modal-agree")
  
    agreeBtn.addEventListener("click", () => {
      contactForm.style.display = "block"
      agreeBtn.style.display = "none"
      termsBtn.style.display = "none"
    })
  
    termsBtn.addEventListener("click", () => {
      modal.style.display = "block"
    })
  
    closeModal.addEventListener("click", () => {
      modal.style.display = "none"
    })
  
    modalAgree.addEventListener("click", () => {
      modal.style.display = "none"
      contactForm.style.display = "block"
      agreeBtn.style.display = "none"
      termsBtn.style.display = "none"
    })
  
    // Close modal when clicking outside
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.style.display = "none"
      }
    })
  }
  
  // Form Submission
  function initFormSubmission() {
    const submitBtn = document.querySelector(".submit-btn")
  
    submitBtn.addEventListener("click", () => {
      const email = document.getElementById("email").value
      const discord = document.getElementById("discord").value
  
      if (email && discord) {
        alert("Application submitted successfully! We will contact you soon.")
        document.getElementById("email").value = ""
        document.getElementById("discord").value = ""
      } else {
        alert("Please fill in all fields.")
      }
    })
  }
  
  // Support Links
  function initSupportLinks() {
    const supportCards = document.querySelectorAll(".support-card")
  
    supportCards.forEach((card) => {
      card.addEventListener("click", (e) => {
        e.preventDefault()
        const platform = card.classList[1] // Get the platform class
  
        switch (platform) {
          case "youtube":
            alert("Redirecting to RDX Team YouTube channel...")
            break
          case "discord":
            alert("Joining RDX Team Discord server...")
            break
          case "gmail":
            alert("Opening Gmail to contact support@rdxteam.com...")
            break
          case "outlook":
            alert("Opening Outlook to contact business@rdxteam.com...")
            break
        }
      })
    })
  }
  
  // Add floating animation to cards
  function addFloatingAnimation() {
    const cards = document.querySelectorAll(".stat-card, .partner-card, .support-card")
  
    cards.forEach((card, index) => {
      card.style.animationDelay = index * 0.1 + "s"
      card.classList.add("floating")
    })
  }
  
  // Add CSS for floating animation
  const floatingCSS = `
  .floating {
      animation: floating 3s ease-in-out infinite;
  }
  
  @keyframes floating {
      0%, 100% {
          transform: translateY(0px);
      }
      50% {
          transform: translateY(-10px);
      }
  }
  `
  
  // Add the floating CSS to the document
  function addFloatingCSS() {
    const style = document.createElement("style")
    style.textContent = floatingCSS
    document.head.appendChild(style)
  }
  
  // Initialize everything when DOM is loaded
  document.addEventListener("DOMContentLoaded", () => {
    createParticles()
    initTabs()
    initCounters()
    initHireTab()
    initFormSubmission()
    initSupportLinks()
    addFloatingCSS()
    addFloatingAnimation()
  })
  
  // Add some interactive effects
  document.addEventListener("mousemove", (e) => {
    const cursor = document.querySelector(".cursor")
    if (!cursor) {
      const newCursor = document.createElement("div")
      newCursor.className = "cursor"
      newCursor.style.cssText = `
              position: fixed;
              width: 20px;
              height: 20px;
              background: radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%);
              border-radius: 50%;
              pointer-events: none;
              z-index: 9999;
              transition: transform 0.1s ease;
          `
      document.body.appendChild(newCursor)
    }
  
    const cursorElement = document.querySelector(".cursor")
    cursorElement.style.left = e.clientX - 10 + "px"
    cursorElement.style.top = e.clientY - 10 + "px"
  })
  
  // Add glitch effect to logo on hover
  document.querySelector(".logo-text").addEventListener("mouseenter", function () {
    this.style.animation = "glitch 0.5s ease-in-out"
    setTimeout(() => {
      this.style.animation = "glow 2s ease-in-out infinite alternate"
    }, 500)
  })
  
  // Add glitch animation CSS
  const glitchCSS = `
  @keyframes glitch {
      0% { transform: translate(0); }
      20% { transform: translate(-2px, 2px); }
      40% { transform: translate(-2px, -2px); }
      60% { transform: translate(2px, 2px); }
      80% { transform: translate(2px, -2px); }
      100% { transform: translate(0); }
  }
  `
  
  const glitchStyle = document.createElement("style")
  glitchStyle.textContent = glitchCSS
  document.head.appendChild(glitchStyle)
  