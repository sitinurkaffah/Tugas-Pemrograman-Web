    function konversi() {
        let x = (document.getElementById("rupiah").value);
        let y = (document.getElementById("kurs").value);
    
        console.log (y);
        console.log (x);
    
        let usd = x * 9915;
        let sgd = x * 13472;
        let eur = x * 15888;
        let rm = x * 874;
        let yen = x * 120;
        let riyal = x * 3592;
        let salah = 0
    
        if (y == "usd") {
            document.getElementById("asing").value="Rp. " + usd;
            document.addEventListener('submit', (event) => {
                event.preventDefault();
            });
            console.log (usd);
        }
    
        else if (y == "sgd") { 
            document.getElementById("asing").value="Rp. " + sgd;
            document.addEventListener('submit', (event) => {
                event.preventDefault();
            });
            console.log (sgd);
        }
    
        else if (y == "yen") { 
            document.getElementById("asing").value="Rp. " + yen;
            document.addEventListener('submit', (event) => {
                event.preventDefault();
            });
            console.log (yen);
        }
    
        else if (y == "eur") { 
            document.getElementById("asing").value="Rp. " + eur;
            document.addEventListener('submit', (event) => {
                event.preventDefault();
            });
            console.log (eur);
        }
        
        else if (y == "rm") { 
            document.getElementById("asing").value="Rp. " + rm;
            document.addEventListener('submit', (event) => {
                event.preventDefault();
            });
            console.log (rm);
        } 
        
        else if (y == "riyal") {
            document.getElementById("asing").value="Rp. " + riyal;
            document.addEventListener('submit', (event) => {
                event.preventDefault();
            });
            console.log (riyal);
        }
    
        else {
            value = salah;
            console.log ("salah");
        }
    }
    
function hapus_form () {
    document.getElementById("form1").reset();
}