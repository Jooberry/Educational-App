var datesArray = [
  {
    date: '2017-07-23',
    title: 'Jazz: Ultimate Classics'
  },
  {
    date: '2017-07-24',
    title: 'Continuing to Jazz'
  }
]

var UI = function() {
  var infoText = document.getElementById('info-text');
  var eventTitle = document.createElement('h1');
  eventTitle.innerText = 'FESTIVAL STUFF';
  infoText.appendChild(eventTitle);

  var eventDate = document.createElement('p');
  eventDate.innerText = '1-29 July, 2017';
  infoText.appendChild(eventDate);
};

UI.prototype = {

};


module.exports = UI;