function pilih() {
    let listHewan = document.getElementById("hewan");
    let idx = listHewan.selectedIndex;
    console.log("Hewan index ke-" + idx + "gambar" + listHewan.value);
    let gambar = document.getElementById("Bebek");
    gambar.src="gambar/"+ listHewan[idx].value + ".png";
}

  function diklik() {
    let listHewan = document.getElementById( "hewan");
    let idx = listHewan.selectedIndex;
    console.log("Hewan index ke-" + idx + "gambar" + listHewan.value);
    let gambar = document.getElementById("Bebek");
    gambar.src="gambar/" + listHewan[idx].value + ".png";
    window.alert("Ini gambar " + listHewan.value);
}