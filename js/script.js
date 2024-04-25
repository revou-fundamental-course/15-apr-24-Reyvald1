// menyembunyikan konten
document.getElementById('CF').style.display='none'
document.getElementById('FC').style.display='none'

// konversi Celcius ke Fahrenheit
function convertToFahrenheit() {
    const inputTemp = parseFloat(document.getElementById("inputTemp").value);
    if (!isNaN(inputTemp)) {
        const fahrenheit = (inputTemp * 9/5) + 32;
        // Konversi suhu
        document.getElementById("result").innerText = `${fahrenheit.toFixed(2)}°F`;
        // Cara hitung
        document.getElementById("caraHitung").innerHTML = `(${inputTemp}°C × 9/5) + 32 = ${fahrenheit.toFixed(2)}°F`;
        // validasi ketika input kosong
        document.getElementById("invalid").innerText = "";
        // meneyembunyikan konten
        document.getElementById('FC').style.display='none'
         // memunculkan konten
        document.getElementById('CF').style.display='block'
    } else {
        document.getElementById("invalid").innerText = "Input tidak valid!";
    }
}

// konversi Fahrenheit ke Celcius
function convertToCelsius() {
    const inputTemp = parseFloat(document.getElementById("inputTemp").value);
    if (!isNaN(inputTemp)) {
        const celsius = (inputTemp - 32) * 5/9;
        // Konversi suhu
        document.getElementById("result").innerText = `${celsius.toFixed(2)}°C`;
        // Cara hitung
        document.getElementById("caraHitung").innerHTML = `(${inputTemp}°F - 32) * 5/9 = ${celsius.toFixed(2)}°C`;
        // validasi ketika input kosong
        document.getElementById("invalid").innerText = "";
        // meneyembunyikan konten
        document.getElementById('CF').style.display='none'
        // memunculkan konten
        document.getElementById('FC').style.display='block'
    } else {
        document.getElementById("invalid").innerText = "Input tidak valid!";
    }
}

// reset perhitungan
function reset() {
    document.getElementById("inputTemp").value = "";
    document.getElementById("result").innerText = "";
    document.getElementById("caraHitung").innerHTML = "";
    document.getElementById("invalid").innerText = "";
    document.getElementById('FC').style.display='none'
    document.getElementById('CF').style.display='none'
}
