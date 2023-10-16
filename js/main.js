document.addEventListener('DOMContentLoaded', function() {
  const sidebar = document.getElementById("mySidebar");
  const toggleButton = document.querySelector(".toggle-btn");

  toggleButton.addEventListener('click', function() {
    if (sidebar.classList.contains("open")) {
      sidebar.classList.remove("open");
      toggleButton.classList.remove("open");
    } else {
      sidebar.classList.add("open");
      toggleButton.classList.add("open");
    }
  });
});
