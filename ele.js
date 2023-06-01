readingdate = document.getElementById("billdate");
var old = document.getElementById("oldreading");
// console.log(old);
var news = document.getElementById("currReading");
// console.log(news);
var due = document.getElementById("arrears");
var result = document.getElementById("output");
var Name = document.getElementById("cname");
var names = document.getElementById("cn");
//----------------------------------------------------------
function currentdate() {
  var date = new Date();
  var date1 = date.toLocaleDateString("en-UK");
  console.log(date, date1, "ikksds vunna choodu");
  var yyyy = date.getFullYear();
  var mm = date.getMonth() + 1;
  var dd = date.getDate();
  // 3-5-2023
  //------------------------
  if (dd < 10) {
    dd = "0" + dd;
  }
  if (mm < 10) {
    mm = "0" + mm;
  }
  today = yyyy + "-" + mm + "-" + dd;
  console.log(today);

  if (parseInt(news.value) < parseInt(old.value)) {
    alert("Current Reading should be always greater than older readings");
  }
  if (readingdate.value > today || readingdate.value < today) {
    alert("Reading Date Should not be Greater than or lessthan Today");
  }
}
//----------------------------------------------------------------

function calculateUnits() {
  units = parseInt(news.value) - parseInt(old.value);

  if (units <= 100) {
    amount = units * 10 + parseInt(due.value);
  } else if (units > 100 && units <= 200) {
    amount = units * 15 + parseInt(due.value);
  } else if (units > 200 && units < 300) {
    amount = units * 20 + parseInt(due.value);
  } else {
    amount = units * 25;
  }
  return amount;
}

//--------------------------------------------------------------------

function dueCalculate() {
  if (parseInt(due.value) == "") {
    dueamount = 0;
  } else {
    dueamount = parseInt(due.value);
  }
  return dueamount;
}
//----------------------------------------------------------------

function calculateBill() {
  event.preventDefault();
  currentdate();
  pra = dueCalculate();
  pras = calculateUnits();
  billAmount = pra + pras;
  names.innerHTML = `Hello ${Name.value}`;
  para = document.getElementById("output");
  para.innerHTML = `You Need to Pay Rs.${billAmount} and Pay BY Date`;
}
//----------------------------------------------------------------
