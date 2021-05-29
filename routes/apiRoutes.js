const fs = require("fs");
const db  = require('../db/db.json');
const router = require('express').Router();

router.get('/notes', (req, res)=>{

    res.json(db)
})


router.post('/notes', (req, res) => {
console.log(req.body.title);
  //const title = req.body.title;
  //const text = req.body.text;
  const {title, text} = req.body;
  const id = Math.floor(Math.random()*1000);
  const newNote = {title, text,id}
  db.push(newNote);
  fs.writeFileSync(
      'db/db.json', JSON.stringify(db)
  )
})

router.delete('/notes', (req, res) => {

    const id = req.params.id;
    
})

module.exports = router;






// function createNewNote(body, notesArray) {
//     const note = body;
//     notesArray.push(note);
//     fs.writeFileSync(
//         path.join(__dirname, './db/db.json'),
//         JSON.stringify({ notes: notesArray }, null, 2)
//     );
//     return note;
// }

// app.get('/notes', (req, res) => {
//     res.json(notes);
//     console.log(notes);
//   });

// app.post('/notes', (req, res) => {
//     console.log(req.body);
//     req.body.id = notes.length.toString();
//     const note = createNewNote(req.body, notes);
//     console.log(note);
//     res.json(note);
// });
