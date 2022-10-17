'use strict';

const table = document.getElementById('citiesData');

let hours = ['6 a.m.', '7 a.m.', '8 a.m.','9 a.m.','10 a.m.', '11 a.m.', '12 p.m.', '1 p.m.', '2 p.m.', '3 p.m.', '4 p.m.', '5 p.m.', '6 p.m.', '7 p.m.'];

let allCookieStores = [];
console.log(allCookieStores);

function Cities(name, min, max, avg) {
  this.name = name;
  this.min = min;
  this.max = max;
  this.avg = avg;
  this.dailyTotal = 0;
  this.cookiesSoldPerHourArr = [];
  allCookieStores.push(this);
}

Cities.prototype.getRandomCus = function() {
  return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
};

Cities.prototype.render = function() {
  let tr = document.createElement('tr');
  table.appendChild(tr);
  let cityName = document.createElement('td');
  cityName.textContent = this.name;
  tr.appendChild(cityName);
  for (let i = 0; i <hours.length; i++) {
    let avgCookieSale = Math.ceil(this.getRandomCus()* this.avg);
    this.cookiesSoldPerHourArr.push(avgCookieSale);
    this.dailyTotal += avgCookieSale;
    let tdCookieSold = document.createElement('td');
    tdCookieSold.textContent = this.cookiesSoldPerHourArr[i];
    tr.appendChild(tdCookieSold);
  }
  let totaltd = document.createElement('td');
  totaltd.textContent = this.dailyTotal;
  tr.appendChild(totaltd);
};

let emptyTH = document.createElement('th');
emptyTH.textContent = '';
table.appendChild(emptyTH);

for (let i = 0; i < hours.length; i++) {
  let tableHeaderHours = document.createElement('th');tableHeaderHours.textContent = hours[i];
  table.appendChild(tableHeaderHours);
}

let dailyTotes = document.createElement('th');
dailyTotes.textContent = 'Daily Location Total';
table.appendChild(dailyTotes);

new Cities('Seattle', 23, 65, 6.3);

new Cities('Tokyo', 3, 24, 1.2);

new Cities('Dubai', 11, 38, 3.7);

new Cities('Paris', 20, 38, 2.3);

new Cities('Lima', 2, 16, 4.6);

// console.log(allCookieStores);
// let allCookieStores = [seattle,tokyo,dubai,paris,lima];

for (let i = 0; i < allCookieStores.length; i++) {
  allCookieStores[i].render();
}

let footer = function() {
  let footerTotal = document.createElement('th');
  footerTotal.textContent = 'Total';
  table.appendChild(footerTotal);
  for (let i = 0; i < hours.length; i++) {
    let currentTotal = 0;
    for (let j = 0; j < allCookieStores.length; j++) {
      let hourlyTotal = allCookieStores[j].cookiesSoldPerHourArr[i];
      // currentTotal = currentTotal + hourlyTotal
      currentTotal += hourlyTotal;
    }
    console.log(currentTotal);
    let hourlyTotalTh = document.createElement('th');
    hourlyTotalTh.textContent = currentTotal;
    table.appendChild(hourlyTotalTh);
  }
  let emptyThFoot = document.createElement('th');
  emptyThFoot.textContent = '';
  table.appendChild(emptyThFoot);
};

footer();

let form = document.querySelector('form');

let handleSubmit = function(event) {
  event.preventDefault();
  // table.deleteRow(4);
  let name = event.target.location.value;
  let min = parseInt(event.target.Minimum.value);
  let max = parseInt(event.target.Maximum.value);
  let avg = parseInt(event.target.Average.value);

  let newStore = new Cities(name, min, max, avg);
  console.log(newStore);

  newStore.render();
  footer();
};

form.addEventListener('submit', handleSubmit);

//document.getElementById(footer).remove();
// let seattleList = document.getElementById('seattleList');

// // console.log(seattleList);

// let seattle = {
//   name: 'Seattle',
//   min: 23,
//   max: 65,
//   avg: 6.3,
//   dailyTotal: 0,
//   cookiesSoldPerHourArr: [],
//   getRandomCus: function() {
//     return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
//   },
//   render: function () {
//     for (let i = 0; i <hours.length; i++) {
//       let avgCookieSale = Math.ceil(this.getRandomCus()* this.avg);
//       this.cookiesSoldPerHourArr.push(avgCookieSale);
//       this.dailyTotal += avgCookieSale;
//       let liSeattle = document.createElement('li');
//       liSeattle.textContent = `${hours[i]} ${this.cookiesSoldPerHourArr[i]} cookies.`;
//       seattleList.appendChild(liSeattle);
//     }
//     let totalSeaLi = document.createElement('li');
//     totalSeaLi.textContent = `Total: ${this.dailyTotal}`;
//     seattleList.appendChild(totalSeaLi);
//   }
// };

// seattle.render();
