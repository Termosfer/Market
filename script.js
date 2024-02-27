let images = document.querySelectorAll("img");
let plus = document.querySelectorAll(".fa-circle-plus");
let minus = document.querySelectorAll(".fa-circle-minus");
let topdiv = document.querySelectorAll(".top-div");
let kq = document.querySelectorAll(".kq");
let kassa = document.querySelector(".amount-machine");
let cem = 0;
let umumiMebleg = document.querySelectorAll(".cost");
let increase = [0, 0, 0, 0, 0, 0, 0, 0];
let cost = [1.2, 10, 3, 4, 2.2, 7, 1.8, 0.4];

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

function inc(mehsul, index) {
  increase[index]++;
  kq[index].innerText = increase[index] + " kq";
  topdiv[index].style.display = "flex";
}

function dec(mehsul, index) {
  if (increase[index] > 1) {
    kq[index].innerText = --increase[index] + " kq";
    return;
  } else {
    topdiv[index].style.display = "none";
  }

  /*  kq[index].parentElement.style.display = "flex" */
}
