'use strict';

let seattleList = document.getElementById('seattleList');

let hours = ['6 a.m.', '7 a.m.', '8 a.m.','9 a.m.','10 a.m.', '11 a.m.', '12 p.m.', '1 p.m.', '2 p.m.', '3 p.m.', '4 p.m.', '5 p.m.', '6 p.m.', '7 p.m.'];

console.log(seattleList);

let seattle = {
  name: 'Seattle',
  min: 23,
  max: 65,
  avg: 6.3,
  dailyTotal: 0,
  cookiesSoldPerHourArr: [],
  getRandomCus: function() {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },
  render: function () {
    for (let i = 0; i <hours.length; i++) {
      let avgCookieSale = Math.ceil(this.getRandomCus()* this.avg);
      this.cookiesSoldPerHourArr.push(avgCookieSale);
      this.dailyTotal += avgCookieSale;
      let liSeattle = document.createElement('li');
      liSeattle.textContent = `${hours[i]} ${this.cookiesSoldPerHourArr[i]} cookies.`;
      seattleList.appendChild(liSeattle);
    }
    let totalSeaLi = document.createElement('li');
    totalSeaLi.textContent = `Total: ${this.dailyTotal}`;
    seattleList.appendChild(totalSeaLi);
  }
};

seattle.render();



