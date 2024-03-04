let images = document.querySelectorAll("img");
let plus = document.querySelectorAll(".fa-circle-plus");
let minus = document.querySelectorAll(".fa-circle-minus");
let topdiv = document.querySelectorAll(".top-div");
let kq = document.querySelectorAll(".kq");
let kassa = document.querySelector(".amount-machine");
let umumiMebleg = document.querySelectorAll(".cost");
let verilenMebleg = document.querySelector(".h3");
let increase = [0, 0, 0, 0, 0, 0, 0,0];
let cost = [1.2, 10, 3, 4, 2.2, 7, 1.8, 0.4];
let cem = 0;

kassa.addEventListener("click", () => {
  cem = 0;
  for (i = 0; i <= increase.length - 1; i++) {
    cem += increase[i] * cost[i];
    if (i == increase.length - 1 && cem == 0) {
      alert("Ay Kasıb, Əl çək məndən,");
    } 
  }
  umumiMebleg[0].innerText = `${cem.toFixed(2)} AZN`;
});

function inc(index) {
  increase[index]++;
  kq[index].innerText = increase[index] + " kq";
  topdiv[index].style.display = "flex";
}

function dec(index) {
  if (increase[index] > 1) {
    kq[index].innerText = --increase[index] + " kq";
  } else {
    topdiv[index].style.display = "none";
  }
}

verilenMebleg.addEventListener("click", () => {
  let promptValue = +prompt("Mebleghi daxil edin");
  if (promptValue == " " || promptValue == "") {
    alert("Daxil edilmish her hansi bir meblegh yoxdur");
    return;
  } else if (promptValue <= cem) {
    while (promptValue <= cem) {
    promptValue = +prompt("Verdiyiniz mebleg Umumi meblegden azdir")
    }
  }

  umumiMebleg[1].innerText = `${promptValue} AZN`;

  umumiMebleg[2].innerText = (promptValue - cem).toFixed(2) + " AZN";
  
let girilenPul = promptValue - cem;
let manat = document.querySelectorAll(".m")
console.log(manat);
for(let i = 0; i<=manat.length-1; i++){
  manat[i].innerText = 0;
}
while (girilenPul >= 1) { 
  if (girilenPul >= 100) {
    girilenPul -= 100;
    manat[0].innerText = Number(manat[0].innerText) + Number(1)
  } else if (girilenPul >= 50) {
    girilenPul -= 50;
    manat[1].innerText = Number(manat[1].innerText) + Number(1)
  } else if (girilenPul >= 20) {
    girilenPul -= 20;
    manat[2].innerText = Number(manat[2].innerText) + Number(1)
  } else if (girilenPul >= 10) {
    girilenPul -= 10;
    manat[3].innerText = Number(manat[3].innerText) + Number(1)
  } else if (girilenPul >= 5) {
    girilenPul -= 5;
    manat[4].innerText = Number(manat[4].innerText) + Number(1)
  } else if (girilenPul >= 1) {
    girilenPul -= 1;
    manat[5].innerText = Number(manat[5].innerText) + Number(1)
  }
}
});