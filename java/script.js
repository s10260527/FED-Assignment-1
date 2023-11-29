document.addEventListener('DOMContentLoaded', (event) => {
    const latestDescLinks = document.querySelectorAll('.latest-desc a');
    latestDescLinks.forEach(link => {
      link.addEventListener('mouseover', function() {
        document.querySelector('.latest-post').classList.add('hover-effect');
      });
  
      link.addEventListener('mouseout', function() {
        document.querySelector('.latest-post').classList.remove('hover-effect');
      });
    });
  
    const overlayTxtLinks = document.querySelectorAll('.overlay-txt a');
    overlayTxtLinks.forEach(link => {
        link.addEventListener('mouseover', function() {
            this.closest('.carousel-box').classList.add('hover-effect');
        });

        link.addEventListener('mouseout', function() {
            this.closest('.carousel-box').classList.remove('hover-effect');
        });
    });
});