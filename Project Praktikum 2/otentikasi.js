function formulir() {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  if (username == "siti21069" && password == 1234567) {
    location.replace("Login Sukses-Siti Nur Kaffah-0110221069.html")
  }
  else {
    window.alert("Coba lagi!");
  }
}