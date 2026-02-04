// PE-GPT Enhanced Site with Tab Navigation
console.log("PE-GPT redesigned site loaded");

// Tab Navigation System
document.addEventListener('DOMContentLoaded', function() {
  const tabLinks = document.querySelectorAll('.nav-tab-link');
  const tabContents = document.querySelectorAll('.tab-content');
  
  // Function to switch tabs
  function switchTab(tabId) {
    // Hide all tab contents
    tabContents.forEach(content => {
      content.classList.remove('active');
    });
    
    // Remove active class from all tab links
    tabLinks.forEach(link => {
      link.classList.remove('active');
    });
    
    // Show the selected tab content
    const targetTab = document.getElementById('tab-' + tabId);
    if (targetTab) {
      targetTab.classList.add('active');
    }
    
    // Add active class to the clicked tab link
    const activeLink = document.querySelector(`[data-tab="${tabId}"]`);
    if (activeLink) {
      activeLink.classList.add('active');
    }
    
    // Scroll to top smoothly
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Update URL hash without jumping
    history.pushState(null, null, '#' + tabId);
  }
  
  // Add click event listeners to all tab links
  tabLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const tabId = this.getAttribute('data-tab');
      switchTab(tabId);
    });
  });
  
  // Handle initial page load with hash
  function handleInitialHash() {
    const hash = window.location.hash.substring(1); // Remove the # symbol
    
    // Map of valid tab IDs
    const validTabs = ['home', 'capabilities', 'design-cases', 'education', 'partnerships', 'resources', 'contact'];
    
    if (hash && validTabs.includes(hash)) {
      switchTab(hash);
    } else {
      // Default to home tab
      switchTab('home');
    }
  }
  
  // Handle browser back/forward buttons
  window.addEventListener('popstate', function() {
    handleInitialHash();
  });
  
  // Initialize on page load
  handleInitialHash();
  
  // Smooth scroll for any internal links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      
      // If it's a tab link, let the tab handler take care of it
      if (this.classList.contains('nav-tab-link')) {
        return;
      }
      
      // For other internal links, smooth scroll
      if (href !== '#' && href !== '#top') {
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });
  
  // Add animation on scroll for cards (optional enhancement)
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);
  
  // Observe cards for animation
  const cards = document.querySelectorAll('.capability-card, .usecase-block, .overview-card, .partner-highlight');
  cards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
  });
});

// Handle contact link clicks from within tabs
document.addEventListener('click', function(e) {
  const target = e.target.closest('a[href="#contact"]');
  if (target && !target.classList.contains('nav-tab-link')) {
    e.preventDefault();
    const contactLink = document.querySelector('.nav-tab-link[data-tab="contact"]');
    if (contactLink) {
      contactLink.click();
    }
  }
});
