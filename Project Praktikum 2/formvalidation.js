function validasi_input(){
    const nama = document.getElementById('nama').value;
    const email = document.getElementById('email').value;
    const waktu = document.getElementById('waktu').value;
    const tujuan = document.getElementById('tujuan').value;
    const tiket = document.getElementById('tiket').value;
    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const timeformat = /^([0-1]?[0-9]|2[0-4]):([0-5][0-9])(:[0-5][0-9])?$/

    console.log (nama);
    console.log (email);
    console.log (waktu);
    console.log (tujuan);
    console.log (tiket);
    
    if (form.nama.value == ""){
        alert("Silahkan Isikan Nama Anda");
        form.nama.style.borderColor="red";
        form.nama.focus();
        return (false);
    }

    else if (nama.length > 30){
        alert("Jumlah Karakter Nama Melebihi Ketentuan! - Max 30 Karakter");
        form.nama.style.borderColor="red";
        form.nama.focus();
        return (false);
    }

    else {
        form.nama.style.borderColor="green";
    }

    if (email.match(mailformat)){
        form.email.style.borderColor="green";
    }
    
    else {
        alert("Format email tidak sesuai!");
        form.email.style.borderColor="red";
        form.email.focus();
        return false;
    }

    if (waktu.match(timeformat)){
        form.waktu.style.borderColor="green";
    }

    else {
        alert("Untuk Format Jam Silahkan Memilih Antara 00:00-23:59");
        form.waktu.style.borderColor="red";
        form.waktu.focus();
        return false;
    }

    if (form.tujuan.value == ""){
        alert("Tujuan harus di isi!");
        form.tujuan.style.borderColor="red";
        form.tujuan.focus();
        return (false);
    }

    else if (tujuan.length > 30){
        alert("Jumlah karakter tujuan melebihi ketentuan! - max 30 karakter");
        form.tujuan.style.borderColor="red";
        form.tujuan.focus();
        return (false);
    }

    else {
        form.tujuan.style.borderColor="green";
    }

    if (form.tiket.value < 1){
        alert("Jumlah Tiket harus di isi!");
        form.tiket.style.borderColor="red";
        form.tiket.focus();
        return (false);
    }

    else if (form.tiket.value > 10){
        alert("Jumlah pembelian tiket melebihi batas maksimum pembelian!");
        form.tiket.style.borderColor="red";
        form.tiket.focus();
        return (false);
    }

    else {
        form.tiket.style.borderColor="green";
    }

    document.addEventListener('submit', (event) => {
        event.preventDefault();
        }); 
    
    document.getElementById("hasil").innerHTML+=
    "Nama Lengkap" + "&ensp;" + ":" + "&ensp;" + nama 
    + "<br>" 
    + "Alamat Email" +  "&ensp;" + ":" + "&ensp;" + email 
    + "<br>"
    + "Waktu" +  "&ensp;" + ":" + "&ensp;" + waktu 
    + "<br>"
    + "Tujuan" +  "&ensp;" + ":" + "&ensp;" + tujuan 
    + "<br>"
    + "Jumlah tiket" +  "&ensp;" + ":" + "&ensp;" + tiket
    + "<br>"
    + "<br>";
    document.addEventListener('submit', (event) => {
        event.preventDefault();
        });
}