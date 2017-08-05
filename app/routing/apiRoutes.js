var friends = require('../data/friends.js');


module.exports = function(app){

  app.get('/api/friends', function(req, res){
    res.json(friends);
  });

  app.post('/api/friends', function(req, res){

    var bestMatch = {
      name: "",
      photo: "",
      friendDifference: 20 //adjustable threshold
    };

    var userData   = req.body;
    var userName   = userData.name;
    var userPhoto  = userData.photo;
    var participandScores   = userData.scores;

    var overalDiff = 0;

    for  (var i=0; i< friends.length; i++) {

      console.log(friends[i].name);
      overalDiff = 0;

      
      for (var j=0; j< friends[i].scores[j]; j++){


        overalDiff += Math.abs(parseInt(participandScores[j]) - parseInt(friends[i].scores[j]));

        if (overalDiff <= bestMatch.friendDifference){

          bestMatch.name = friends[i].name;
          bestMatch.photo = friends[i].photo;
          bestMatch.friendDifference = overalDiff;
        }
      }
    }

    friends.push(userData);

    res.json(bestMatch);

  });

}