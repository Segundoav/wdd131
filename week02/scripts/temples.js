document.addEventListener('DOMContentLoaded', function () {
    const currentYearSpan = document.getElementById('currentyear');
    if (currentYearSpan) {
      currentYearSpan.textContent = new Date().getFullYear();
    }
  
    const lastModifiedSpan = document.getElementById('lastmodified');
    if (lastModifiedSpan) {
      lastModifiedSpan.textContent = document.lastModified;
    }
  
    const menuToggle = document.getElementById('menu-toggle');
    const mainNav = document.getElementById('main-nav');
  
    if (menuToggle && mainNav) {
      menuToggle.addEventListener('click', function () {
        mainNav.classList.toggle('open');
        if (mainNav.classList.contains('open')) {
          menuToggle.textContent = 'X';
          menuToggle.setAttribute('aria-expanded', 'true');
        } else {
          menuToggle.textContent = '☰';
          menuToggle.setAttribute('aria-expanded', 'false');
        }
      });
  
      document.addEventListener('click', function (event) {
        if (!mainNav.contains(event.target) && !menuToggle.contains(event.target) && mainNav.classList.contains('open')) {
          mainNav.classList.remove('open');
          menuToggle.textContent = '☰';
          menuToggle.setAttribute('aria-expanded', 'false');
        }
      });
  
      window.addEventListener('resize', function () {
        if (window.innerWidth > 768 && mainNav.classList.contains('open')) {
          mainNav.classList.remove('open');
          menuToggle.textContent = '☰';
          menuToggle.setAttribute('aria-expanded', 'false');
        }
      });
    }
  });
  