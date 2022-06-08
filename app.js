


// Anasayfa Menüler Yemekler vs... Butonlarını için JS Kodları
const menuler = document.querySelector("#menu");
const yemekler = document.querySelector("#yemek");
const icecekler = document.querySelector("#icecek");
const tatlilar = document.querySelector("#tatli");

console.log(menuler);
console.log(yemekler);

function anasayfaBtn() {
    menuler.style.display = "flex";
    yemekler.style.display = "flex";
    icecekler.style.display = "flex";
    tatlilar.style.display = "flex";

    console.log("Anasayfa butonuna basıldı");
}

function menulerBtn() {
    menuler.style.display = "flex";
    yemekler.style.display = "none";
    icecekler.style.display = "none";
    tatlilar.style.display = "none";

    console.log("Menüler butonuna basıldı");
}

function yemeklerBtn() {
    menuler.style.display = "none";
    yemekler.style.display = "flex";
    icecekler.style.display = "none";
    tatlilar.style.display = "none";

    console.log("Yemekler butonuna basıldı");
}

function iceceklerBtn() {
    menuler.style.display = "none";
    yemekler.style.display = "none";
    icecekler.style.display = "flex";
    tatlilar.style.display = "none";

    console.log("İçecekler butonuna basıldı");
}

function tatlilarBtn() {
    menuler.style.display = "none";
    yemekler.style.display = "none";
    icecekler.style.display = "none";
    tatlilar.style.display = "flex";

    console.log("Tatlilar butonuna basıldı");
}
//------------------------------------------------------------------------




// Sayaç (+1 -1) (İnternetten JS,CSS,HTML kodları hazır bir şekilde alındı)
$(document).ready(function () {
    $('.count').prop('disabled', true);
    $(document).on('click', '.plus', function () {
        $('.count').val(parseInt($('.count').val()) + 1);
    });
    $(document).on('click', '.minus', function () {
        $('.count').val(parseInt($('.count').val()) - 1);
        if ($('.count').val() == 0) {
            $('.count').val(1);
        }
    });
});
//---------------------------------------------------------------------------





// modall JS Kodları (Boostrapden alındı)
$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
})
// -------------------------------------




// Giriş Yap Kaydol JS Kodları
// Kayıt etme fonksiyonu
function formReg() {
    let userNameReg = document.querySelector("#userNameRegister");  // kullancının girdiği değerleri alıyoruz
    let emailReg = document.querySelector("#emailRegister");
    let passwordReg = document.querySelector("#passwordRegister");
    sessionStorage.setItem("username", userNameReg.value); // Değerleri session storage kaydediyoruz
    sessionStorage.setItem("email", emailReg.value);
    sessionStorage.setItem("password", passwordReg.value);
    if (userNameReg.value == "" || emailReg.value == "" || passwordReg.value == "")
        alert("Lütfen Eksik Alanları Doldurunuz!")
    else
        alert("Başarıyla Kayıt Oldunuz.")
}
// Giriş yap kontrol fonksiyonu
function formLog() {
    let userNameLog = document.querySelector("#userNameLogin"); //kullanıcının girdiği değerleri alıyrouz
    let passwordLog = document.querySelector("#passwordLogin");
    // Giriş ekranında kullanıcı adı ve şifrenin aynı anda kontrol edildiği yer.
    if (userNameLog.value == sessionStorage.getItem("username") && passwordLog.value == sessionStorage.getItem("password")) {
        alert("Giriş Başarılı");

        // burada ise giriş başarılı oldukdan sonra navbardaki buttonlar giriş yapan kullanıcının profiline dönüşüyor
        let girisDegistir = document.querySelector("#girisYap"); // giriş yap butonunu seçiyorum
        let kayitOlDegistir = document.querySelector("#kayitOl"); // kayıt ol butonunu seçiyorum
        girisDegistir.innerHTML = `<button class="btn btn-warning btn-lg">Hoşgeldiniz - ${sessionStorage.getItem("username")}</button>`;
        kayitOlDegistir.innerHTML = `  <button class="btn btn-warning btn-lg" onclick="exit()" type="button" href="#"> Çıkış Yap </button>`
    }
    else {
        alert("Kullanıcı adı veya şifre hatalı!")
    }
}
//--------------------------------------------------------------------------------------------------------


// Giriş yapıldıkdan sonra Çıkış Yapabilmek için gerekli olan foknsiyon
function exit() {
    let girisDegistir = document.querySelector("#girisYap"); // giriş yap butonunu seçiyorum
    let kayitOlDegistir = document.querySelector("#kayitOl"); // kayıt ol butonunu seçiyorum
    girisDegistir.innerHTML = `<button class="btn btn-warning btn-lg" type="button" data-toggle="modal" data-target="#exampleModal"
    href="#">Giriş Yap
</button>`;
    kayitOlDegistir.innerHTML = ` <button class="btn btn-warning btn-lg" type="button" data-toggle="modal" data-target="#exampleModal2"
    href="#">Kayıt Ol
</button>`
}
//-----------------------------------------------------------------------------------------------------------






// Sepete Ekle Butonu JS Kodları
let sayacAdet = document.querySelector(".count"); //Sepete ekle butonu altındaki adet sayacını seçiyoruz
let sepetimAdd = document.querySelector("#sepetimText");

// Burada toplam tutarı seçiyorum. Sepete ekle fonksiyonu her çalıştıgında toplam tutarı arttırıyorum.
let toplamTutar = document.querySelector("#toplamTutar");
let toplam = 0;

//Her Ürün için ayrı fonksiyon oluşturup butonlara atadım.Şimdilik çalışıyor ama gelişmesi lazım
function sepeteEkleHamburger() {
    var el = document.createElement("h5");
    var t = document.createTextNode(`${sayacAdet.value}x29.99TL Hamburger Menü Toplam=${sayacAdet.value * 29.99}TL`);
    el.appendChild(t);
    sepetimAdd.appendChild(el);
    toplam += sayacAdet.value * 29.99;
    toplamTutar.innerHTML = `<h3>Toplam Tutar = ${toplam} TL</h3>`;
}
function sepeteEklePizza() {
    var el = document.createElement("h5");
    var t = document.createTextNode(`${sayacAdet.value}x39.99TL Pizza Menü Toplam=${sayacAdet.value * 39.99}TL`)
    el.appendChild(t);
    sepetimAdd.appendChild(el);
    toplam += sayacAdet.value * 39.99;
    toplamTutar.innerHTML = `<h3>Toplam Tutar = ${toplam} TL</h3>`;
}
function sepeteEkleSalataMenu() {
    var el = document.createElement("h5");
    var t = document.createTextNode(`${sayacAdet.value}x19.99TL Salata Menü Toplam=${sayacAdet.value * 19.99}TL`)
    el.appendChild(t);
    sepetimAdd.appendChild(el);
    toplam += sayacAdet.value * 19.99;
    toplamTutar.innerHTML = `<h3>Toplam Tutar = ${toplam} TL</h3>`;
}
function sepeteEkleIskender() {
    var el = document.createElement("h5");
    var t = document.createTextNode(`${sayacAdet.value}x37.99TL İskender Menü Toplam=${sayacAdet.value * 37.99}TL`)
    el.appendChild(t);
    sepetimAdd.appendChild(el);
    toplam += sayacAdet.value * 37.99;
    toplamTutar.innerHTML = `<h3>Toplam Tutar = ${toplam} TL</h3>`;
}
function sepeteEkleBorek() {
    var el = document.createElement("h5");
    var t = document.createTextNode(`${sayacAdet.value}x25.99TL Börek Menü Toplam=${sayacAdet.value * 25.99}TL`)
    el.appendChild(t);
    sepetimAdd.appendChild(el);
    toplam += sayacAdet.value * 25.99;
    toplamTutar.innerHTML = `<h3>Toplam Tutar = ${toplam} TL</h3>`;
}
function sepeteEklePide() {
    var el = document.createElement("h5");
    var t = document.createTextNode(`${sayacAdet.value}x29.99TL Pide Menü Toplam=${sayacAdet.value * 29.99}TL`)
    el.appendChild(t);
    sepetimAdd.appendChild(el);
    toplam += sayacAdet.value * 29.99;
    toplamTutar.innerHTML = `<h3>Toplam Tutar = ${toplam} TL</h3>`;
}
function sepeteEkleBalik() {
    var el = document.createElement("h5");
    var t = document.createTextNode(`${sayacAdet.value}x39.99TL Hamsi Balık Menü Toplam=${sayacAdet.value * 39.99}TL`)
    el.appendChild(t);
    sepetimAdd.appendChild(el);
    toplam += sayacAdet.value * 39.99;
    toplamTutar.innerHTML = `<h3>Toplam Tutar = ${toplam} TL</h3>`;
}
function sepeteEkleTavuk() {
    var el = document.createElement("h5");
    var t = document.createTextNode(`${sayacAdet.value}x23.99TL Tavuk Menü Toplam=${sayacAdet.value * 23.99}TL`)
    el.appendChild(t);
    sepetimAdd.appendChild(el);
    toplam += sayacAdet.value * 23.99;
    toplamTutar.innerHTML = `<h3>Toplam Tutar = ${toplam} TL</h3>`;
}
function sepeteEkleManti() {
    var el = document.createElement("h5");
    var t = document.createTextNode(`${sayacAdet.value}x45.99TL Mantı Toplam=${sayacAdet.value * 45.99}TL`)
    el.appendChild(t);
    sepetimAdd.appendChild(el);
    toplam += sayacAdet.value * 45.99;
    toplamTutar.innerHTML = `<h3>Toplam Tutar = ${toplam} TL</h3>`;
}
function sepeteEklePirinc() {
    var el = document.createElement("h5");
    var t = document.createTextNode(`${sayacAdet.value}x14.99TL Pirinç Pilavı Toplam=${sayacAdet.value * 14.99}TL`)
    el.appendChild(t);
    sepetimAdd.appendChild(el);
    toplam += sayacAdet.value * 14.99;
    toplamTutar.innerHTML = `<h3>Toplam Tutar = ${toplam} TL</h3>`;
}
function sepeteEkleKarniyarik() {
    var el = document.createElement("h5");
    var t = document.createTextNode(`${sayacAdet.value}x29.99TL Karnıyarık Toplam=${sayacAdet.value * 29.99}TL`)
    el.appendChild(t);
    sepetimAdd.appendChild(el);
    toplam += sayacAdet.value * 29.99;
    toplamTutar.innerHTML = `<h3>Toplam Tutar = ${toplam} TL</h3>`;
}
function sepeteEklePatates() {
    var el = document.createElement("h5");
    var t = document.createTextNode(`${sayacAdet.value}x9.99TL Patates Toplam=${sayacAdet.value * 9.99}TL`)
    el.appendChild(t);
    sepetimAdd.appendChild(el);
    toplam += sayacAdet.value * 9.99;
    toplamTutar.innerHTML = `<h3>Toplam Tutar = ${toplam} TL</h3>`;
}
function sepeteEkleSalata() {
    var el = document.createElement("h5");
    var t = document.createTextNode(`${sayacAdet.value}x9.99TL Salata Toplam=${sayacAdet.value * 9.99}TL`)
    el.appendChild(t);
    sepetimAdd.appendChild(el);
    toplam += sayacAdet.value * 9.99;
    toplamTutar.innerHTML = `<h3>Toplam Tutar = ${toplam} TL</h3>`;
}
function sepeteEkleMakarna() {
    var el = document.createElement("h5");
    var t = document.createTextNode(`${sayacAdet.value}x9.99TL Makarna Toplam=${sayacAdet.value * 9.99}TL`)
    el.appendChild(t);
    sepetimAdd.appendChild(el);
    toplam += sayacAdet.value * 9.99;
    toplamTutar.innerHTML = `<h3>Toplam Tutar = ${toplam} TL</h3>`;
}
function sepeteEkleBulgur() {
    var el = document.createElement("h5");
    var t = document.createTextNode(`${sayacAdet.value}x11.99TL Bulgur Pilavı Toplam=${sayacAdet.value * 11.99}TL`)
    el.appendChild(t);
    sepetimAdd.appendChild(el);
    toplam += sayacAdet.value * 11.99;
    toplamTutar.innerHTML = `<h3>Toplam Tutar = ${toplam} TL</h3>`;
}
function sepeteEkleSarma() {
    var el = document.createElement("h5");
    var t = document.createTextNode(`${sayacAdet.value}x17.99TL Yaprak Sarma Toplam=${sayacAdet.value * 17.99}TL`)
    el.appendChild(t);
    sepetimAdd.appendChild(el);
    toplam += sayacAdet.value * 17.99;
    toplamTutar.innerHTML = `<h3>Toplam Tutar = ${toplam} TL</h3>`;
}
function sepeteEkleCay() {
    var el = document.createElement("h5");
    var t = document.createTextNode(`${sayacAdet.value}x4.99TL Çay Toplam=${sayacAdet.value * 4.99}TL`)
    el.appendChild(t);
    sepetimAdd.appendChild(el);
    toplam += sayacAdet.value * 4.99;
    toplamTutar.innerHTML = `<h3>Toplam Tutar = ${toplam} TL</h3>`;
}
function sepeteEkleKola() {
    var el = document.createElement("h5");
    var t = document.createTextNode(`${sayacAdet.value}x9.99TL Kola Toplam=${sayacAdet.value * 9.99}TL`)
    el.appendChild(t);
    sepetimAdd.appendChild(el);
    toplam += sayacAdet.value * 9.99;
    toplamTutar.innerHTML = `<h3>Toplam Tutar = ${toplam} TL</h3>`;
}
function sepeteEkleIcetea() {
    var el = document.createElement("h5");
    var t = document.createTextNode(`${sayacAdet.value}x7.99TL Ice Tea Toplam=${sayacAdet.value * 7.99}TL`)
    el.appendChild(t);
    sepetimAdd.appendChild(el);
    toplam += sayacAdet.value * 7.99;
    toplamTutar.innerHTML = `<h3>Toplam Tutar = ${toplam} TL</h3>`;
}
function sepeteEkleKahve() {
    var el = document.createElement("h5");
    var t = document.createTextNode(`${sayacAdet.value}x10.99TL Türk Kahvesi Toplam=${sayacAdet.value * 10.99}TL`)
    el.appendChild(t);
    sepetimAdd.appendChild(el);
    toplam += sayacAdet.value * 10.99;
    toplamTutar.innerHTML = `<h3>Toplam Tutar = ${toplam} TL</h3>`;
}
function sepeteEkleCappucino() {
    var el = document.createElement("h5");
    var t = document.createTextNode(`${sayacAdet.value}x14.99TL Cappucino Toplam=${sayacAdet.value * 14.99}TL`)
    el.appendChild(t);
    sepetimAdd.appendChild(el);
    toplam += sayacAdet.value * 14.99;
    toplamTutar.innerHTML = `<h3>Toplam Tutar = ${toplam} TL</h3>`;
}
function sepeteEkleLimonata() {
    var el = document.createElement("h5");
    var t = document.createTextNode(`${sayacAdet.value}x6.99TL Limonata Toplam=${sayacAdet.value * 6.99}TL`)
    el.appendChild(t);
    sepetimAdd.appendChild(el);
    toplam += sayacAdet.value * 6.99;
    toplamTutar.innerHTML = `<h3>Toplam Tutar = ${toplam} TL</h3>`;
}
function sepeteEkleGazoz() {
    var el = document.createElement("h5");
    var t = document.createTextNode(`${sayacAdet.value}x8.99TL Gazoz Toplam=${sayacAdet.value * 8.99}TL`)
    el.appendChild(t);
    sepetimAdd.appendChild(el);
    toplam += sayacAdet.value * 8.99;
    toplamTutar.innerHTML = `<h3>Toplam Tutar = ${toplam} TL</h3>`;
}
function sepeteEkleMeyveSuyu() {
    var el = document.createElement("h5");
    var t = document.createTextNode(`${sayacAdet.value}x7.99TL Meyve Suyu Toplam=${sayacAdet.value * 7.99}TL`)
    el.appendChild(t);
    sepetimAdd.appendChild(el);
    toplam += sayacAdet.value * 7.99;
    toplamTutar.innerHTML = `<h3>Toplam Tutar = ${toplam} TL</h3>`;
}
function sepeteEkleTiramisu() {
    var el = document.createElement("h5");
    var t = document.createTextNode(`${sayacAdet.value}x19.99TL Tiramisu Toplam=${sayacAdet.value * 19.99}TL`)
    el.appendChild(t);
    sepetimAdd.appendChild(el);
    toplam += sayacAdet.value * 19.99;
    toplamTutar.innerHTML = `<h3>Toplam Tutar = ${toplam} TL</h3>`;
}
function sepeteEkleSutlac() {
    var el = document.createElement("h5");
    var t = document.createTextNode(`${sayacAdet.value}x14.99TL Sütlaç Toplam=${sayacAdet.value * 14.99}TL`)
    el.appendChild(t);
    sepetimAdd.appendChild(el);
    toplam += sayacAdet.value * 14.99;
    toplamTutar.innerHTML = `<h3>Toplam Tutar = ${toplam} TL</h3>`;
}
function sepeteEkleBaklava() {
    var el = document.createElement("h5");
    var t = document.createTextNode(`${sayacAdet.value}x25.99TL Baklava Toplam=${sayacAdet.value * 25.99}TL`)
    el.appendChild(t);
    sepetimAdd.appendChild(el);
    toplam += sayacAdet.value * 25.99;
    toplamTutar.innerHTML = `<h3>Toplam Tutar = ${toplam} TL</h3>`;
}
function sepeteEkleSekerpare() {
    var el = document.createElement("h5");
    var t = document.createTextNode(`${sayacAdet.value}x9.99TL Şekerpare Toplam=${sayacAdet.value * 9.99}TL`)
    el.appendChild(t);
    sepetimAdd.appendChild(el);
    toplam += sayacAdet.value * 9.99;
    toplamTutar.innerHTML = `<h3>Toplam Tutar = ${toplam} TL</h3>`;
}
function sepeteEkleGullac() {
    var el = document.createElement("h5");
    var t = document.createTextNode(`${sayacAdet.value}x17.99TL Güllaç Toplam=${sayacAdet.value * 17.99}TL`)
    el.appendChild(t);
    sepetimAdd.appendChild(el);
    toplam += sayacAdet.value * 17.99;
    toplamTutar.innerHTML = `<h3>Toplam Tutar = ${toplam} TL</h3>`;
}
function sepeteEkleDondurma() {
    var el = document.createElement("h5");
    var t = document.createTextNode(`${sayacAdet.value}x6.99TL Dondurma Toplam=${sayacAdet.value * 6.99}TL`)
    el.appendChild(t);
    sepetimAdd.appendChild(el);
    toplam += sayacAdet.value * 6.99;
    toplamTutar.innerHTML = `<h3>Toplam Tutar = ${toplam} TL</h3>`;
}
function sepeteEkleCheesecake() {
    var el = document.createElement("h5");
    var t = document.createTextNode(`${sayacAdet.value}x21.99TL Cheesecake Toplam=${sayacAdet.value * 21.99}TL`)
    el.appendChild(t);
    sepetimAdd.appendChild(el);
    toplam += sayacAdet.value * 21.99;
    toplamTutar.innerHTML = `<h3>Toplam Tutar = ${toplam} TL</h3>`;
}
function sepetEkleKadayif() {
    var el = document.createElement("h5");
    var t = document.createTextNode(`${sayacAdet.value}x24.99TL Kadayıf Toplam=${sayacAdet.value * 24.99}TL`)
    el.appendChild(t);
    sepetimAdd.appendChild(el);
    toplam += sayacAdet.value * 24.99;
    toplamTutar.innerHTML = `<h3>Toplam Tutar = ${toplam} TL</h3>`;
}

