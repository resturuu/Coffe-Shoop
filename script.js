document.addEventListener("DOMContentLoaded", function () {
     // Mengambil semua tautan kategori
     var kategoriLinks = document.querySelectorAll(".kategori-link");
   
     // Menambahkan penanganan klik ke setiap tautan kategori
     kategoriLinks.forEach(function (link) {
       link.addEventListener("click", function (event) {
         // Menghentikan perilaku default dari tautan
         event.preventDefault();
   
         // Mendapatkan id target dari href
         var targetId = link.getAttribute("href").substring(1);
   
         // Menyembunyikan semua produk
         var semuaProduk = document.querySelectorAll(".produk-semua > div");
         semuaProduk.forEach(function (produk) {
           produk.style.display = "none";
         });
   
         // Menampilkan semua produk jika tautan "Semua" diklik
         if (targetId === "semua") {
           semuaProduk.forEach(function (produk) {
             produk.style.display = "block";
           });
         } else {
           // Menampilkan produk yang sesuai dengan id target
           var targetProduk = document.getElementById(targetId);
           if (targetProduk) {
             targetProduk.style.display = "block";
           }
         }
       });
     });
   });

// collor navbar
   document.addEventListener("DOMContentLoaded", function () {
    // Mengambil semua tautan kategori
    var kategoriLinks = document.querySelectorAll(".kategori-link");
  
    // Menambahkan penanganan klik ke setiap tautan kategori
    kategoriLinks.forEach(function (link) {
      link.addEventListener("click", function (event) {
        // Menghentikan perilaku default dari tautan
        event.preventDefault();
  
        // Mendapatkan id target dari href
        var targetId = link.getAttribute("href").substring(1);
  
        // Menambahkan kelas 'active' pada kategori yang sesuai dengan id target
        document.querySelectorAll('.menu > div').forEach(function(elem) {
          elem.classList.remove('active');
        });
        document.querySelector('.menu .' + targetId).classList.add('active');
      });
    });
  });
  
  // algoritma search product
  document.addEventListener("DOMContentLoaded", function () {
    var inputCari = document.getElementById('cari');
    inputCari.addEventListener('input', function () {
      var kataKunci = inputCari.value.toLowerCase(); // Mengambil nilai input dan mengonversi menjadi lowercase
      
      var semuaProduk = document.querySelectorAll('.all-product'); // Mengambil semua produk
      
      semuaProduk.forEach(function(produk) {
        var namaProduk = produk.querySelector('#nama-product').textContent.toLowerCase(); // Mengambil teks nama produk dan mengonversi menjadi lowercase
        
        // Memeriksa apakah teks nama produk mengandung kata kunci
        if (namaProduk.includes(kataKunci)) {
          produk.style.display = 'block'; // Menampilkan produk jika cocok
        } else {
          produk.style.display = 'none'; // Menyembunyikan produk jika tidak cocok
        }
      });
    });
  });
  
  
  // card
  document.addEventListener("DOMContentLoaded", function () {
    var addToCartButtons = document.querySelectorAll('.add-to-cart');
    var cardContainer = document.getElementById('card');
  
    addToCartButtons.forEach(function(button) {
      button.addEventListener('click', function(event) {
        event.preventDefault();
  
        var productId = button.getAttribute('data-product-id');
        var productElement = document.getElementById(productId);
  
        if (productElement) {
          // Clone elemen produk
          var clonedProduct = productElement.cloneNode(true);
  
          // Menghilangkan tombol tambah ke keranjang dari klon produk
          var addToCartButton = clonedProduct.querySelector('.add-to-cart');
          if (addToCartButton) {
            addToCartButton.parentNode.removeChild(addToCartButton);
          }
  
          // Menambahkan klon produk ke dalam keranjang
          cardContainer.appendChild(clonedProduct);
  
          // Menghitung total harga
          var totalHarga = 0;
          var hargaProduk = cardContainer.querySelectorAll('#rp');
          hargaProduk.forEach(function(harga) {
            var hargaString = harga.textContent.replace('Rp ', '').replace(',', '');
            totalHarga += parseInt(hargaString);
          });
  
          // Menampilkan total harga di dalam keranjang
          var totalHargaElement = document.createElement('p');
          totalHargaElement.textContent = 'Total Harga: Rp ' + totalHarga.toLocaleString();
          cardContainer.appendChild(totalHargaElement);
        }
      });
    });
  });

  // semuvunyikan card jika belum di klik
  // jika sudah di klik sembunyikan produk
  document.addEventListener("DOMContentLoaded", function () {
    var toggleCardLink = document.getElementById('toggle-card');
    var cardDiv = document.getElementById('card');
    var semuaDiv = document.getElementById('semua');
  
    // Fungsi untuk menampilkan atau menyembunyikan elemen card
    function toggleCardVisibility(event) {
      event.preventDefault(); // Mencegah navigasi ke "#card"
      if (cardDiv.style.display === 'none') {
        cardDiv.style.display = 'block';
        semuaDiv.style.display = 'none'; // Menyembunyikan elemen dengan ID "semua"
      } else {
        cardDiv.style.display = 'none';
        semuaDiv.style.display = 'block'; // Menampilkan elemen dengan ID "semua"
      }
    }
  
    // Menambahkan event listener untuk tautan
    toggleCardLink.addEventListener('click', toggleCardVisibility);
  });
  