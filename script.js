function vypocitatKapacitu() {
    // Načítanie hodnôt z formulára
    var rozlisenie = document.getElementById('rozlisenie').value;
    var pocetKamier = document.getElementById('pocetKamier').value;
    var dlzkaNahravania = document.getElementById('dlzkaNahravania').value;
    var fps = document.getElementById('fps').value;

    // Základný výpočet (tento vzorec je potrebné prispôsobiť podľa vašich potrieb)
    var velkost = rozlisenie * pocetKamier * dlzkaNahravania * fps; // Toto je veľmi zjednodušené, slúži ako príklad

    // Zobrazenie výsledku
    document.getElementById('vysledok').innerText = 'Potrebná disková kapacita: ' + velkost + ' GB';
}

function exportToPDF() {
    const doc = new window.jspdf.jsPDF(); // alebo jednoducho new jspdf.jsPDF() ak to funguje

    // Pridanie textu
    doc.text('Výpočet diskovej kapacity pre bezpečnostné kamery', 10, 10);
    doc.text(document.getElementById('vysledok').innerText, 10, 20);

    // Uloženie PDF
    doc.save('vypocet-kapacity.pdf');
}

