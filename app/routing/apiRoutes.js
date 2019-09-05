var sandwich = require("../data/sandwich");

module.exports = (app) => {
  app.get("/api/sandwich", (req, res) => {
    res.json(sandwich);
  });

  app.post("/api/sandwich", (req, res) => {
    var newSandwich = req.body;
    var differences = [];

    for(var i = 0; i < sandwich.length; i++) {
      var sandwichScore = 0;
      for (var j = 0; j < sandwich[i].score.length; j++) {
        sandwichScore = sandwichScore + (Math.abs(parseInt(newSandwich.score[j]) - parseInt(sandwich[i].score[j])));
      }
      differences.push(sandwichScore);
    }

    console.log(differences);

    var index = 0;
    for (var x = 1; x < differences.length; x++) {
      if (differences[x] < differences[index]) {
        index = x;
      }
    }

    res.send(sandwich[index]);
  })
}