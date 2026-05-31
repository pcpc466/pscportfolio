/**
 * CHRONICLE - Portfolio Navigation and Interactions Control
 * Single Page App (SPA) logic using Vanilla Javascript
 */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initRouter();
  initMobileMenu();
  initFilters();
  initExpandableProjects();
  initContactForm();
});

// ==================== THEME MANAGEMENT ====================
function initTheme() {
  const themeToggle = document.getElementById('theme-toggle');
  const themeToggleMobile = document.getElementById('theme-toggle-mobile');
  
  // Retrieve saved theme or check default system color scheme
  const savedTheme = localStorage.getItem('theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  let currentTheme = savedTheme || (systemPrefersDark ? 'dark' : 'light');
  document.documentElement.setAttribute('data-theme', currentTheme);
  
  // Attach event listeners
  const handleThemeToggle = () => {
    const nextTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', nextTheme);
    localStorage.setItem('theme', nextTheme);
  };
  
  if (themeToggle) themeToggle.addEventListener('click', handleThemeToggle);
  if (themeToggleMobile) themeToggleMobile.addEventListener('click', handleThemeToggle);
}

// ==================== ROUTING & TAB NAVIGATION ====================
function initRouter() {
  // Listen to hash change for back/forward navigation
  window.addEventListener('hashchange', handleHashChange);
  
  // Set default tab on load
  handleHashChange();
}

function handleHashChange() {
  const hash = window.location.hash.substring(1);
  const validTabs = ['home', 'about', 'projects', 'skills', 'contact'];
  
  let targetTab = 'home';
  if (validTabs.includes(hash)) {
    targetTab = hash;
  }
  
  switchTab(targetTab, false); // Switch without pushing to history since hashchange already did it
}

function switchTab(tabId, updateHash = true) {
  // Select all panes and links
  const panes = document.querySelectorAll('.tab-pane');
  const desktopLinks = document.querySelectorAll('.nav-link');
  const mobileLinks = document.querySelectorAll('.mobile-link');
  
  // 1. Deactivate all panes & links
  panes.forEach(pane => pane.classList.remove('active'));
  desktopLinks.forEach(link => link.classList.remove('active'));
  mobileLinks.forEach(link => link.classList.remove('active'));
  
  // 2. Activate target pane
  const activePane = document.getElementById(tabId);
  if (activePane) {
    activePane.classList.add('active');
    // Scroll window to top smoothly
    window.scrollTo({ top: 0, behavior: 'instant' });
  }
  
  // 3. Mark active state in navigation menus
  document.querySelectorAll(`[data-tab="${tabId}"]`).forEach(el => el.classList.add('active'));
  
  // 4. Update the URL hash
  if (updateHash) {
    history.pushState(null, null, `#${tabId}`);
  }
  
  // 5. Close Mobile Menu if open
  const mobileMenu = document.getElementById('mobile-menu');
  if (mobileMenu) {
    mobileMenu.classList.remove('open');
  }
}

// ==================== MOBILE MENU ====================
function initMobileMenu() {
  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  
  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('open');
      menuToggle.textContent = mobileMenu.classList.contains('open') ? '×' : '☰';
    });
  }
}

// ==================== PROJECT FILTERS ====================
function initFilters() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectItems = document.querySelectorAll('.project-item');
  
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Set active button
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      
      const filterValue = button.getAttribute('data-filter').toLowerCase();
      
      projectItems.forEach(item => {
        const itemTags = item.getAttribute('data-tags').toLowerCase().split(',');
        
        if (filterValue === 'all' || itemTags.includes(filterValue)) {
          item.style.display = 'block';
          setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
          }, 10);
        } else {
          item.style.opacity = '0';
          item.style.transform = 'translateY(10px)';
          setTimeout(() => {
            item.style.display = 'none';
          }, 300);
        }
      });
    });
  });
}

// ==================== EXPANDABLE PROJECT DETAILS ====================
function initExpandableProjects() {
  const projectHeaders = document.querySelectorAll('.project-summary-header');
  
  projectHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const parentCard = header.closest('.project-item');
      const isExpanded = parentCard.classList.contains('expanded');
      
      // Close all other projects
      document.querySelectorAll('.project-item').forEach(card => {
        card.classList.remove('expanded');
        const btn = card.querySelector('.toggle-detail-btn');
        if (btn) btn.textContent = '+';
      });
      
      // Toggle current card
      if (!isExpanded) {
        parentCard.classList.add('expanded');
        const btn = parentCard.querySelector('.toggle-detail-btn');
        if (btn) btn.textContent = '×';
      }
    });
  });
}

// ==================== CONTACT FORM ====================
function initContactForm() {
  const contactForm = document.getElementById('contact-form');
  const formSuccess = document.getElementById('form-success');
  
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Honeypot spam check
      const honeypot = document.getElementById('website-honeypot').value;
      if (honeypot) {
        console.warn('Spam submission detected.');
        return;
      }
      
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;
      
      // Encode email contents
      const recipient = 'Prashantch.94@gmail.com';
      const subject = encodeURIComponent(`Portfolio Message from ${name}`);
      const body = encodeURIComponent(`${message}\n\n— Sent by ${name} (${email})`);
      
      // Trigger default email client launch
      window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
      
      // Visual feedback
      if (formSuccess) {
        formSuccess.style.display = 'block';
        contactForm.reset();
        
        setTimeout(() => {
          formSuccess.style.display = 'none';
        }, 6000);
      }
    });
  }
}
