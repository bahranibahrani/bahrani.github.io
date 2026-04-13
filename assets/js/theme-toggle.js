// Theme Toggle Functionality
document.addEventListener('DOMContentLoaded', function() {
  const themeToggle = document.getElementById('theme-toggle');
  const themeIcon = document.getElementById('theme-icon');
  const body = document.body;

  // Check for saved theme preference or default to light mode
  const currentTheme = localStorage.getItem('theme') || 'light';
  
  // Apply the saved theme
  if (currentTheme === 'dark') {
    body.classList.add('dark-mode');
    if (themeIcon) {
      themeIcon.classList.remove('fa-moon');
      themeIcon.classList.add('fa-sun');
    }
  }

  // Theme toggle event listener
  if (themeToggle) {
    themeToggle.addEventListener('click', function() {
      body.classList.toggle('dark-mode');
      
      // Update all icons
      var allIcons = document.querySelectorAll('#theme-icon, .dropdown-theme-icon');
      allIcons.forEach(function(icon) {
        if (body.classList.contains('dark-mode')) {
          icon.classList.remove('fa-moon');
          icon.classList.add('fa-sun');
        } else {
          icon.classList.remove('fa-sun');
          icon.classList.add('fa-moon');
        }
      });
      
      // Save preference
      if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
      } else {
        localStorage.setItem('theme', 'light');
      }
    });
  }

  // Add dark mode toggle to mobile dropdown menu (hidden-links)
  function addToggleToDropdown() {
    var hiddenLinks = document.querySelector('.hidden-links');
    if (hiddenLinks && !hiddenLinks.querySelector('.dropdown-theme-toggle')) {
      var li = document.createElement('li');
      li.className = 'masthead__menu-item dropdown-theme-toggle';
      
      var btn = document.createElement('button');
      btn.className = 'theme-toggle-dropdown';
      btn.type = 'button';
      btn.setAttribute('aria-label', 'Toggle dark mode');
      
      var icon = document.createElement('i');
      icon.className = body.classList.contains('dark-mode') ? 'fas fa-sun dropdown-theme-icon' : 'fas fa-moon dropdown-theme-icon';
      icon.style.marginRight = '8px';
      
      var text = document.createTextNode(body.classList.contains('dark-mode') ? ' Light Mode' : ' Dark Mode');
      
      btn.appendChild(icon);
      btn.appendChild(text);
      li.appendChild(btn);
      hiddenLinks.insertBefore(li, hiddenLinks.firstChild);
      
      btn.addEventListener('click', function() {
        body.classList.toggle('dark-mode');
        
        // Update all icons
        var allIcons = document.querySelectorAll('#theme-icon, .dropdown-theme-icon');
        allIcons.forEach(function(ic) {
          if (body.classList.contains('dark-mode')) {
            ic.classList.remove('fa-moon');
            ic.classList.add('fa-sun');
          } else {
            ic.classList.remove('fa-sun');
            ic.classList.add('fa-moon');
          }
        });
        
        // Update dropdown text
        var dropdownBtn = hiddenLinks.querySelector('.theme-toggle-dropdown');
        if (dropdownBtn) {
          dropdownBtn.innerHTML = '';
          var newIcon = document.createElement('i');
          newIcon.className = body.classList.contains('dark-mode') ? 'fas fa-sun dropdown-theme-icon' : 'fas fa-moon dropdown-theme-icon';
          newIcon.style.marginRight = '8px';
          var newText = document.createTextNode(body.classList.contains('dark-mode') ? ' Light Mode' : ' Dark Mode');
          dropdownBtn.appendChild(newIcon);
          dropdownBtn.appendChild(newText);
        }
        
        // Save preference
        if (body.classList.contains('dark-mode')) {
          localStorage.setItem('theme', 'dark');
        } else {
          localStorage.setItem('theme', 'light');
        }
      });
    }
  }

  // Run after a short delay to allow greedy-nav to populate hidden-links
  setTimeout(addToggleToDropdown, 500);
  
  // Also observe DOM changes to re-add if needed
  var observer = new MutationObserver(function() {
    addToggleToDropdown();
  });
  
  var hiddenLinks = document.querySelector('.hidden-links');
  if (hiddenLinks) {
    observer.observe(hiddenLinks, { childList: true });
  }
});