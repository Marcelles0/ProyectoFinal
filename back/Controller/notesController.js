const express = require('express');
const Model = require('../Model/notesModel');
const router = express.Router();
const {verifyToken} = require('../lib/utils');


// router.get('/add', (req,res)=>{
//   /* res.render('../../front/src/components/pages/Notes/NewNotes'); */
//   console.log('new note');
// })

router.post('/new-note', async (req,res)=>{
  const { title, description }=req.body;
  console.log(req.headers);
  const userId = req.headers.authorization;
  console.log(title,description,userId);
  const errors=[];
  if (!title) {
    errors.push({text: 'Please Write a Title'});
  }
  if (!description) {
    errors.push({text: 'Please Write a Description'});
  }
  if (errors.length > 0) {
    res.render('../../front/src/components/pages/Notes/AllNotes',{
      errors,
      title,
      description
    });
  }else{
    const newNote = new Model({title, description, userId});
    console.log(newNote);
    await newNote.save();
    res.send('ok');
    /* res.redirect('/notes'); */
  }
})

router.get('/:id', async(req,res)=>{
  let id = req.params.id
  // const notes = await Model.find();
  try {
    const filteredNotes = await Model.findOne({_id:id});
    // const filteredNotes = notes.filter(note => note.userId === id);
    res.send(filteredNotes);
  } catch (error) {
    res.status(404).send(null);
  }
});

router.get('/by_user/:id', async(req,res)=>{
  let id = req.params.id
  // const notes = await Model.find();
  try {
    const filteredNotes = await Model.find({userId:id}).sort({ date: -1 });
    // const filteredNotes = notes.filter(note => note.userId === id);
    res.send(filteredNotes);
  } catch (error) {
    res.status(500).send("Error: " + error.message);
  }
});

router.patch('/edit/:id', async(req,res)=>{
  try {
    // obtener el id del documento a actualizar
    let id = req.params.id;
    // obtener los datos a modificar
    let data = req.body;
    // recibir en respuesta el documento ya modificado
    const options = { new: true };
    Model.findByIdAndUpdate(id, data, options).then((result) =>
      res.send(result)
    );
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
  /* const note = await Model.findById(req.params.id);
  console.log(note, req.user); */
    /* if (!note) return res.status(404).send("Note not found...");

    if (note.uid !== req.user._id)
    return res.status(401).send("Note check/uncheck failed. Not authorized...");

  const updatedNote = await Note.findByIdAndUpdate(
    req.params.id,
    {
      isComplete: !note.isComplete,
    },
    {
      new: true,
    }
  );
  res.send(updatedNote); */
})

router.delete("/:id", (req, res) => {
  let id = req.params.id;
  Model.findByIdAndDelete(id)
    .then((result) => {
      console.log(result);
      let data = { ...result._doc };
      res.status(200).json({
        status: "succeeded",
        data,
        error: null,
      });
    })
    .catch((error) =>
      res.status(404).json({
        status: "failed",
        error: error.message,
      })
    );
  });

// export
module.exports = router;