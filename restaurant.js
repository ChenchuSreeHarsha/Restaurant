let result = document.getElementById("result");

function billcalculation() {
  let userName = document.getElementById("customerName").value;
  let vegAdult = parseInt(document.getElementById("vegAdult").value);
  let vegKids = parseInt(document.getElementById("vegKids").value);
  let nonVegAdult = parseInt(document.getElementById("nonVegAdult").value);
  let nonVegKids = parseInt(document.getElementById("nonVegKids").value);
  event.preventDefault();

  let vega = vegAdult * 599;
  let vegk = vegKids * 249;
  let nonvega = nonVegAdult * 699;
  let nonvegk = nonVegKids * 349;
  
  let people = vegAdult + vegKids + nonVegAdult + nonVegKids;
  console.log(people);

  let originalcost = vega + vegk + nonvega + nonvegk;
  console.log(originalcost);

  let gstcost = (originalcost * (12 / 100)) / 100;
  console.log(gstcost);

  let netprice = originalcost + gstcost;
  console.log(netprice);

  if (people > 10) {
    result.innerHTML = `Hai ${userName}...., You have to pay ${(netprice = netprice - netprice * 0.1)} . Thanks for coming!`;
  } else {
    result.innerHTML = `Hai ${userName}...., You have to pay ${netprice} . Thanks for coming!`;
  }
}
