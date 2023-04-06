// hitung luas segitiga
function hitungLuasSegitiga() {
    // mengambil nilai dari input
    const alas = parseFloat(document.getElementById("alas-segitiga").value);
    const tinggi = parseFloat(document.getElementById("tinggi-segitiga").value);

    // jika input kosong, tampilkan sweet alert
    if (!alas || !tinggi) {
        Swal.fire({
            icon: "error",
            title: "Luas Segitiga",
            text: "Alas dan tinggi tidak boleh kosong!",
        });
        return;
    }

    // menghitung luas segitiga
    const luas = 0.5 * alas * tinggi;

    // menampilkan hasil luas segitiga
    document.getElementById("luasSegitiga").innerHTML = "L = 1/2 * a * t <br> L = 1/2 * " + alas + " * " + tinggi + " <br> L = " + luas;

    // tampilkan hasil luas segitiga menggunakan sweet alert
    Swal.fire({
        icon: "success",
        title: "Luas Segitiga",
        text: `Luas segitiga dengan alas ${alas} dan tinggi ${tinggi} adalah ${luas.toFixed(1)}`,
    });
}

// hitung keliling segitiga
function hitungKelilingSegitiga() {
    // mengambil nilai dari input
    const sisi1 = parseFloat(document.getElementById("sisi1-segitiga").value);
    const sisi2 = parseFloat(document.getElementById("sisi2-segitiga").value);
    const sisi3 = parseFloat(document.getElementById("sisi3-segitiga").value);

    // jika input kosong, tampilkan sweet alert
    if (!sisi1 || !sisi2 || !sisi3) {
        Swal.fire({
            icon: "error",
            title: "Keliling Segitiga",
            text: "Sisi 1, Sisi 2, dan Sisi 3 tidak boleh kosong!",
        });
        return;
    }

    // menghitung keliling segitiga
    const keliling = sisi1 + sisi2 + sisi3;

    // menampilkan hasil keliling segitiga
    document.getElementById("kelilingSegitiga").innerHTML = "K = s1 + s2 + s3 <br> K = " + sisi1 + "  + " + sisi2 + " + " + sisi3 + " <br> K = " + keliling;

    // tampilkan hasil keliling segitiga menggunakan sweet alert
    Swal.fire({
        icon: "success",
        title: "Keliling Segitiga",
        text: `Keliling segitiga dengan sisi 1 = ${sisi1}, sisi 2 = ${sisi2}, dan sisi 3 = ${sisi3} adalah ${keliling}`,
    });
}

// hitung luas jajar genjang
function hitungLuasJajarGenjang() {
    // mengambil nilai dari input
    const alas = parseFloat(document.getElementById("alas-jajargenjang").value);
    const tinggi = parseFloat(document.getElementById("tinggi-jajargenjang").value);

    // jika input kosong, tampilkan sweet alert
    if (!alas || !tinggi) {
        Swal.fire({
            icon: "error",
            title: "Luas Jajar Genjang",
            text: "Alas dan tinggi tidak boleh kosong!",
        });
        return;
    }

    // menghitung luas jajar genjang
    const luas = alas * tinggi;

    // menampilkan hasil luas jajar genjang
    document.getElementById("luasJajarGenjang").innerHTML = "L = a * t <br> L = " + alas + " * " + tinggi + " <br> L = " + luas;

    // tampilkan hasil luas jajar genjang menggunakan sweet alert
    Swal.fire({
        icon: "success",
        title: "Luas Jajar Genjang",
        text: `Luas Jajar Genjang dengan Alas = ${alas} dan Tinggi = ${tinggi} adalah ${luas}`,
    });
}

// hitung keliling jajar genjang
function hitungKelilingJajarGenjang() {
    // mengambil nilai dari input
    const sisi1 = parseFloat(document.getElementById("sisi1-jajargenjang").value);
    const sisi2 = parseFloat(document.getElementById("sisi2-jajargenjang").value);

    // jika input kosong, tampilkan sweet alert
    if (!sisi1 || !sisi2) {
        Swal.fire({
            icon: "error",
            title: "Keliling Jajar Genjang",
            text: "alas dan sisi miring tidak boleh kosong!",
        });
        return;
    }

    // menghitung keliling jajar genjang
    const keliling = 2 * (sisi1 + sisi2);

    // menampilkan hasil keliling jajar genjang
    document.getElementById("kelilingJajarGenjang").innerHTML = "K = 2 * (a+b) <br> K = 2 * (" + sisi1 + "  + " + sisi2 + ") <br> K = " + keliling;

    // tampilkan hasil keliling jajar genjang menggunakan sweet alert
    Swal.fire({
        icon: "success",
        title: "Keliling Jajar Genjang",
        text: `Keliling Jajar Genjang dengan Alas = ${sisi1} dan sisi miring = ${sisi2} adalah ${keliling}`,
    });
}

// menampilkan segitiga
function showTriangle() {
    //ambil id section segitiga dan jajar genjang
    var x = document.getElementById("calculate-triangle");
    var y = document.getElementById("calculate-parallelogram");
    if (x.style.display === "none") {
        x.style.display = "block";
        y.style.display = "none";
    } else {
        x.style.display = "block";
        y.style.display = "none";
    }
}

// menampilkan jajar genjang
function showParallelogram() {
    //ambil id section segitiga dan jajar genjang
    var x = document.getElementById("calculate-parallelogram");
    var y = document.getElementById("calculate-triangle");
    if (x.style.display === "none") {
        x.style.display = "block";
        y.style.display = "none";

    } else {
        x.style.display = "block";
        y.style.display = "none";
    }
}
// reset luas segitiga
function resetLuasSegitiga() {
    // mereset nilai input dan output
    document.getElementById("alas-segitiga").value = "";
    document.getElementById("tinggi-segitiga").value = "";
    document.getElementById("luasSegitiga").innerHTML = "";
}

// reset keliling segitiga
function resetKelilingSegitiga() {
    // mereset nilai input dan output
    document.getElementById("sisi1-segitiga").value = "";
    document.getElementById("sisi2-segitiga").value = "";
    document.getElementById("sisi3-segitiga").value = "";
    document.getElementById("kelilingSegitiga").innerHTML = "";
}

// reset luas jajar genjang
function resetLuasjajargenjang() {
    // mereset nilai input dan output
    document.getElementById("alas-jajargenjang").value = "";
    document.getElementById("tinggi-jajargenjang").value = "";
    document.getElementById("luasJajarGenjang").innerHTML = "";
}

// reset keliling jajar genjang
function resetKelilingJajargenjang() {
    // mereset nilai input dan output
    document.getElementById("sisi1-jajargenjang").value = "";
    document.getElementById("sisi2-jajargenjang").value = "";
    document.getElementById("kelilingJajarGenjang").innerHTML = "";
}