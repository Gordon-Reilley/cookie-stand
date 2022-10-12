'use strict';

const table = document.getElementById('citiesData');

let hours = ['6 a.m.', '7 a.m.', '8 a.m.','9 a.m.','10 a.m.', '11 a.m.', '12 p.m.', '1 p.m.', '2 p.m.', '3 p.m.', '4 p.m.', '5 p.m.', '6 p.m.', '7 p.m.'];

function Cities(name, min, max, avg) {
  this.name = name;
  this.min = min;
  this.max = max;
  this.avg = avg;
  this.dailyTotal = 0;
  this.cookiesSoldPerHourArr = [];
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

let seattle = new Cities (
  'Seattle', 23, 65, 6.3
);

seattle.render();

let tokyo = new Cities (
  'Tokyo', 3, 24, 1.2
);

tokyo.render();

let dubai = new Cities (
  'Dubai', 11, 38, 3.7
);

dubai.render();

let paris = new Cities (
  'Paris', 20, 38, 2.3
);

paris.render();

let lima = new Cities (
  'Lima', 2, 16, 4.6
);

lima.render();

let footerTotal = document.createElement('th');
footerTotal.textContent = 'Total';
table.appendChild(footerTotal);


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
