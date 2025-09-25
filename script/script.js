// Ambil navbar dari layout.html dan masukkan ke setiap halaman
fetch("/Layout/navbar.html")
  .then(response => response.text())
  .then(data => {
    document.querySelector(".navbar").innerHTML = data;
  });

  fetch("/Layout/footer.html")
  .then(response => response.text())
  .then(data => {
    document.querySelector(".footer").innerHTML = data;
  });
