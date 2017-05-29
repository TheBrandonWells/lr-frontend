/*global require */

var MakeData = function(){
  var faker = require('faker');
  var _     = require('lodash');


  function calculateGradeLetter(score) {
    let limits = ['-', '', '+', '+']
    if(score > 100) return 'A+';
    if(score === 100) return 'A';
    if(score < 59 || score === 59) return 'F';

    var lCode = 74 - Math.floor(score / 10);
    var sign = limits[Math.floor((score % 10) / 3)]
    return String.fromCharCode(lCode) + sign;
  }

  return {
    students: _.times(30, function(n){
      let grade = faker.random.number({min: 1, max: 120});

      return {
        id: n,
        name: faker.name.findName(),
        picture: faker.internet.avatar(),
        grade: grade,
        gradeLetter: calculateGradeLetter(grade)
      }
    })
  }
};

module.exports = MakeData;
