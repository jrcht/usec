document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    mobileMenuButton.addEventListener('click', function() {
      mobileMenu.classList.toggle('hidden');
      mobileMenuButton.setAttribute('aria-expanded', 
        mobileMenuButton.getAttribute('aria-expanded') === 'false' ? 'true' : 'false'
      );
    });
  });