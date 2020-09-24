const db = require("../models")

// setting up some routes from when Jeff demoed
module.exports = function(app) {

app.get("/api/workouts", (req, res) => {
    db.Workout.find()
    .then(dbData => {
        res.json(dbData);

    }).catch(err => {
        res.json(err);
    })
})
    
 
app.get("/api/workouts/range", (req, res) => {
    db.Workout.find({}).limit(7).then(dbData => {
        res.json(dbData);
    }).catch(err => {
        res.json(err);
    });
})

app.put("/api/workouts/:id", (req, res) => {
    db.Workout.findByIdAndUpdate(req.params.id, {$push: {exercises: req.body}}).then(data => {
        res.json(data);
    }).catch(err => {
        res.json(err);
    });
});


app.post("/api/workouts", function(req, res){
    db.Workout.create(req.body).then(data => {
        res.json(data);
    }).catch(err => {
        res.json(err);
    });
});

}
// left off trying to figure out this workout route, 


// i changed from get to put since this where it should grab the req.params.id from the workout we want to update


// app.get("/api/workouts/range", function(req, res){
//     db.Workout.find
// })



// might not need this if we are exporting (app) on line 4
// module.exports = 