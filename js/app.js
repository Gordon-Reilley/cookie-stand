'use strict';

let seattleList = document.getElementById('seattleList');

console.log(seattleList);

let seattle = {
  name: 'Seattle',
  min: 23,
  max: 65,
  avg: 6.3,
  dailyTotal: 0,
  hours: ['6 a.m.', '7 a.m.', '8 a.m.','9 a.m.','10 a.m.', '11 a.m.', '12 p.m.', '1 p.m.', '2 p.m.', '3 p.m.', '4 p.m.', '5 p.m.', '6 p.m.', '7 p.m.'],
  cookiesSoldPerHourArr: [],
  getRandomCus: function() {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },
  render: function () {
    for (let i = 0; i <this.hours.length; i++) {
      let li = document.createElement('li');
      li.textContent = `${this.hours[i]} ${this.getRandomCus()}`;
      seattleList.appendChild(li);
    }
  }
};

seattle.render();

