const bill = document.getElementById("bill");
const tipInput = document.getElementById("tip");

let tip;
const btnValues = [5, 10, 15, 20];

function gettip(value) {
  tipInput.value = "";
  tip = value;
  if (bill.value) calculate();
}

function customperc() {
  var x = document.getElementById("tip").value*(bill.value)/100;
  document.getElementById("tipamount").innerHTML = (x).toFixed(2);
}

function calculate() {
  const tipValue = (Number(bill.value) * Number(tip)) / 100;
  

  tipamount.innerHTML =
    "&dollar;" + (tipValue).toFixed(2);
}

function Reset(){
        document.getElementById("tipamount").value = "";
        document.getElementById("bill").value= "";
    }
