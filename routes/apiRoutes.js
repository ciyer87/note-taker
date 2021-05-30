const fs = require("fs");
const db  = require('../db/db.json');
const router = require('express').Router();

router.get('/notes', (req, res)=>{

    res.json(db)
})

router.get('/notes/:id', (req, res) => {
    const result = findById(req.params.id, db);
    res.json(result);
})

router.post('/notes', (req, res) => {
  const {title, text} = req.body;
  const id = Math.floor(Math.random()*1000);
  const newNote = {title, text,id}
  db.push(newNote);
  fs.writeFileSync(
      'db/db.json', JSON.stringify(db), (err) => {
          if(err) throw err;
          console.log('The file was updated');
      }
  )
  res.json(db);
})


router.delete("/notes/:id", function (req, res) {
    var id = req.params.id;
    fs.readFileSync('./db/db.json', (err, data) => {
        if (err) throw err;
        db = JSON.parse(data);
    });

    for (var i = 0; i < db.length; i++) {

        if (db[i].id == id) {
          console.log("Deleting ==============");
           console.log(db[i]);
          db.splice(i, 1);
       }
   }

    fs.writeFile("./db/db.json", JSON.stringify(db), (err) => {
        if (err) throw err;
        console.log('The file was updated!');
    });

    res.json(id);
});

module.exports = router;


