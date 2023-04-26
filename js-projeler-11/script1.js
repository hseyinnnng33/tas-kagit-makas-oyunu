// const genel = document.querySelector("#genel");

// function ekleme(){
//     let htmlekle = "<h2 style='color:red'>My span</h2>";
//     genel.insertAdjacentHTML("beforebegin", htmlekle)
// }

// ekleme();

// function dogs(julia, katarina){
//     // iki dizeyi birleştirdik
//     const birlestir = julia.concat(katarina);
//     birlestir.forEach(function(kopekler, i){
//         if(kopekler>=3){
//             console.log(
//                 `köpek numarası ${i + 1} köpek yaşı ${kopekler}`
//             );
//         }
//         else{
//             console.log(
//                 `köpek numarası ${i + 1} köpek daha yavru`
//             )
//         }
//     })
// }   

// dogs([10,2,5,1,9], [1,12,11,3,2]);

// const rakam = ["ali","faruk","hüseyin","cem"];

// const bastir = rakam.filter(function(bir){
//     return bir.length <= 7;
// })

// console.log(bastir);

// const rakamlar = [1,10,15,20,50];

// const yazdir = rakamlar.filter((item)=> item >= 20)

// console.log(yazdir)

// const rakamlar = [100,300,400];

// const topla = rakamlar.reduce((bir,iki)=>{
    // console.log(bir)
//     console.log(iki)
// },0)

// console.log(topla)

// const input = document.querySelector(".input").addEventListener("change", function(e){
//     let valueinput = e.target.value;
//     console.log(valueinput)
// })

// const kutular = document.querySelectorAll(".kutu");

// kutular.forEach(function(item){
//     item.addEventListener("click", function(){
//         item.classList.add("active");
//         let randomIndex = Math.floor(Math.random() * kutular.length);
//         let randomItem = kutular[randomIndex];
//         randomItem.classList.add("active1");
//     })
// })

// const btn = document.querySelector(".reset");

// const bir =  btn.addEventListener("click", function(){
//     location.reload();
// })

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