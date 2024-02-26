// DOM (Document Object Model)
// htmlden etiket ismine göre eleman çağırma
const form = document.querySelector("form");
const main = document.querySelector("main");

function renderProfile() {
  main.innerHTML = `
    <section id="left">
        <img src="./images/black-background.gif" alt="" />
        <a href="">Profili Göster</a>
    </section>
    <section id="right">
        <div>
        <span>Açık Repolar: 4</span>
        <span>Açık Gistler: 0</span>
        <span>Takipçiler: 0 </span>
        <span>Takip Edilenler: 0</span>
        </div>
        <ul>
        <li>Hakkında: A software company</li>
        <li>Şirket:Udemig</li>
        <li>Website:udemig.com</li>
        <li>Konum:İsveç</li>
        <li>Hesap Oluşturma:25.09.2022</li>
        </ul>
    </section>
    
    `;
}

function getUserData(event) {
  event.preventDefault(); // sayfa yenilemeyi engelle
  console.log(event);
  var username = event.target[0].value; // inputa girilen değere erişme
  fetch(`https://api.github.com/users/${username}`);
}

// form gönderilme olayını izle
form.addEventListener("submit", getUserData);
