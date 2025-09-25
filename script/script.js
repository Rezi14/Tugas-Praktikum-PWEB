function highlightActiveLink() {
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll(".navbar a");

  navLinks.forEach(link => {
    const linkPath = link.getAttribute('href');
    if (currentPath.endsWith(linkPath)) {
      link.classList.add('active');
    }
  });
}

fetch("/Layout/navbar.html")
  .then(response => response.text())
  .then(data => {
    document.querySelector(".navbar").innerHTML = data;
    highlightActiveLink()
  });

  fetch("/Layout/footer.html")
  .then(response => response.text())
  .then(data => {
    document.querySelector(".footer").innerHTML = data;
  });
