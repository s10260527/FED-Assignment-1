// Elements with hover effect

document.addEventListener('DOMContentLoaded', (event) => {
  const overlayLinks = document.querySelectorAll('.latest-desc a');
  overlayLinks.forEach(link => {
      link.addEventListener('mouseover', function() {
          this.closest('.latest-post').classList.add('hover-effect');
      });

      link.addEventListener('mouseout', function() {
          this.closest('.latest-post').classList.remove('hover-effect');
          this.closest('.latest-post').classList.add('original-position');
      });
  });

  const carouselLinks = document.querySelectorAll('.overlay-txt a');
  carouselLinks.forEach(link => {
      link.addEventListener('mouseover', function() {
          this.closest('.carousel-box').classList.add('hover-effect');
      });

      link.addEventListener('mouseout', function() {
          this.closest('.carousel-box').classList.remove('hover-effect');
          this.closest('.carousel-box').classList.add('original-position');
      });
  });

  const featuredLinks = document.querySelectorAll('.featured-blog a');
  featuredLinks.forEach(link => {
      link.addEventListener('mouseover', function() {
          this.closest('.featured-blog').classList.add('hover-effect');
      });

      link.addEventListener('mouseout', function() {
          this.closest('.featured-blog').classList.remove('hover-effect');
          this.closest('.featured-blog').classList.add('original-position');
      });
  });

  const overlayTxtLinks = document.querySelectorAll('.blog-desc a');
  overlayTxtLinks.forEach(link => {
      link.addEventListener('mouseover', function() {
          this.closest('.blog-box').classList.add('hover-effect');
      });

      link.addEventListener('mouseout', function() {
          this.closest('.blog-box').classList.remove('hover-effect');
          this.closest('.blog-box').classList.add('original-position');
      });
  })
});