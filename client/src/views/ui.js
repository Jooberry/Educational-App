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

  this.onPreviousClick();
  this.onNextClick();
};

UI.prototype = {

  onPreviousClick: function() {
    var previousButton = document.getElementById('previous');
    previousButton.addEventListener('click', function() {
    
    });
  },

  onNextClick: function() {
    var nextButton = document.getElementById('next');
    nextButton.addEventListener('click', function() {
      
    });
  }

};


module.exports = UI;