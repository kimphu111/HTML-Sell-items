document.addEventListener('DOMContentLoaded', (event) => {
  const links = document.querySelectorAll("a");
  
  links.forEach(link => {
      const modalId = link.id.replace("link", "modal");
      const modal = document.getElementById(modalId);

      link.addEventListener('mouseover', function(event) {
          const rect = link.getBoundingClientRect();
          modal.style.top = `${rect.bottom + window.scrollY}px`;  // Position below the link
          modal.style.left = `${rect.left + window.scrollX}px`;   // Align left with the link
          modal.style.display = "block";
      });

      link.addEventListener('mouseout', function(event) {
          if (!modal.contains(event.relatedTarget)) {
              modal.style.display = "none";
          }
      });

      modal.addEventListener('mouseleave', function() {
          modal.style.display = "none";
      });

      modal.addEventListener('mouseover', function() {
          modal.style.display = "block";
      });
  });
});
