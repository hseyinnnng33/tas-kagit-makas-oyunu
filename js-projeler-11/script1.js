
const tas = document.querySelector(".tas");
const kagit = document.querySelector(".kagit");
const makas = document.querySelector(".makas");
const secim = document.querySelector(".secimtext");
const sonuc = document.querySelector(".sonuc");
const rakip = document.querySelector(".rakipText");
const benimPuan = document.querySelector(".puan");
const rakipPuan = document.querySelector(".puanRakip");
const sol = document.querySelector(".fa-left-long");
const sag = document.querySelector(".fa-right-long");


const oyun = {
    tas: "TAŞ",
    kagit: "KAGIT",
    makas: "MAKAS"
}

let puanBir  = 0;
let puaniki = 0;

tas.addEventListener("click", function(){
    let rastgeleOyun = oyun[Object.keys(oyun)[Math.floor(Math.random() * Object.keys(oyun).length)]];
    rakip.textContent = rastgeleOyun;
    if(rastgeleOyun == oyun.makas){
        sonuc.textContent = "KAZANDINIZ";
        puanBir++;
        benimPuan.innerHTML = puanBir;
        sol.classList.add("active");
        sag.classList.remove("active");
        if(puanBir == 11){
            location.reload();
            secim.textContent = "SEN KAZANDIN";
        }
    }
    else if(rastgeleOyun == oyun.kagit){
        sonuc.textContent = "KAYBETTİNİZ";
        puaniki++;
        rakipPuan.innerHTML = puaniki;
        sag.classList.add("active");
        sol.classList.remove("active");
        if(puaniki == 11){
            location.reload();
            rakip.textContent = "RAKİP KAZANDI";
        }
    }
    else if(rastgeleOyun == oyun.tas){
        sonuc.textContent = "BERABERE";
        sag.classList.remove("active");
        sol.classList.remove("active");
    }
    secim.textContent = "TAŞ";
})

kagit.addEventListener("click", function(){
    let rastgeleOyun = oyun[Object.keys(oyun)[Math.floor(Math.random() * Object.keys(oyun).length)]];
    rakip.textContent = rastgeleOyun;
    if(rastgeleOyun == oyun.tas){
        sonuc.textContent = "KAZANDINIZ";
        puanBir++;
        benimPuan.innerHTML = puanBir;
        sol.classList.add("active");
        sag.classList.remove("active");
        if(puanBir == 11){
            location.reload();
            secim.textContent = "SEN KAZANDIN";
        }
    }
    else if(rastgeleOyun == oyun.makas){
        sonuc.textContent = "KAYBETTİNİZ";
        puaniki++;
        rakipPuan.innerHTML = puaniki;
        sag.classList.add("active");
        sol.classList.remove("active");
        if(puaniki == 11){
            location.reload();
            rakip.textContent = "RAKİP KAZANDI";
        }
    }
    else if(rastgeleOyun == oyun.kagit){
        sonuc.textContent = "BERABERE";
        sag.classList.remove("active");
        sol.classList.remove("active");
    }
    secim.textContent = "KAGIT";
})


makas.addEventListener("click", function(){
    let rastgeleOyun = oyun[Object.keys(oyun)[Math.floor(Math.random() * Object.keys(oyun).length)]];
    rakip.textContent = rastgeleOyun;
    if(rastgeleOyun == oyun.kagit){
        sonuc.textContent = "KAZANDINIZ";
        puanBir++;
        benimPuan.innerHTML = puanBir;
        sol.classList.add("active");
        sag.classList.remove("active");
        if(puanBir == 11){
            location.reload();
            secim.textContent = "SEN KAZANDIN";
        }
    }
    else if(rastgeleOyun == oyun.tas){
        sonuc.textContent = "KAYBETTİNİZ";
        puaniki++;
        rakipPuan.innerHTML = puaniki;
        sag.classList.add("active");
        sol.classList.remove("active");
        if(puaniki == 11){
            location.reload();
            rakip.textContent = "RAKİP KAZANDI";
        }
    }
    else if(rastgeleOyun == oyun.makas){
        sonuc.textContent = "BERABERE";
        sag.classList.remove("active");
        sol.classList.remove("active");
    }
    secim.textContent = "MAKAS";
})
