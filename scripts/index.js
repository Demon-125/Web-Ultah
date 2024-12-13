// login page scripts
document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  validateForm();
});

function validateForm() {
  var username = document.getElementById("Dilla").value;
  var password = document.getElementById("Dilla").value;

  //validasi username dan password, username dan password bisa diganti sesuai keinginan
  if (username === "Dilla" && password === "Dilla") {
    Swal.fire({
      icon: "success",
      title: "Login berhasil!",
      text: "Selamat datang dilllaa",
      showConfirmButton: false,
      timer: 1500,
    }).then(function () {
      window.location.href = "birthday.html";
    });
  } else {
    Swal.fire({
      icon: "error",
      title: "Login gagal!",
      text: "Coba cek lagi username sama passwordnya ya:)",
      confirmButtonText: "Coba lagi",
      confirmButtonColor: "#ff7675",
    });
  }
}