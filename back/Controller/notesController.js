const express = require('express');
const Model = require('../Model/notesModel');
const router = express.Router();
const {verifyToken} = require('../lib/utils');


router.get('/add', (req,res)=>{
  /* res.render('../../front/src/components/pages/Notes/NewNotes'); */
  console.log('new note');
})

router.post('/new-note', async (req,res)=>{
  const { title, description }=req.body;
  console.log(title,description);
  const errors=[];
  if (!title) {
    errors.push({text: 'Please Write a Title'});
  }
  if (!description) {
    errors.push({text: 'Please Write a Description'});
  }
  if (errors.length > 0) {
    res.render('../../front/src/components/pages/Notes/Notes',{
      errors,
      title,
      description
    });
  }else{
    const newNote = new Model({title, description});
    console.log(newNote);
    await newNote.save();
    res.send('ok');
    /* res.redirect('/notes'); */
  }
})

router.get('/notes', async(req,res)=>{
  const notes = await Model.find();
})
router.patch('', async(req,res)=>{
  const note = await Model.findById(req.params.id);
    if (!note) return res.status(404).send("Note not found...");

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
  res.send(updatedNote);
})

// export
module.exports = router;