const express = require('express')
const router = express.Router()
const displaydb = require('../model/displayDB')

router.post('/',async(req,res)=>{
    const displayData = new displaydb(req.body);
    await displayData.save()

    res.status(201).json({message:"Created Successfully"})
})

router.get('/newone', async (req, res) => {
 try {
    const latestItem = await displaydb.findOne().sort({ _id: -1 });
    res.json(latestItem);
  } catch (err) {
    res.status(500).json({ error: 'Failed to get latest item' });
  }
});

router.get('/alldatas', async (req, res) => {
 try {
    const getting = await displaydb.find()
    res.json(getting.reverse())
  } catch (err) {
    res.status(500).json({ error: 'Failed to get latest item' });
  }
});

router.delete('/alldata/:id',async(req,res) => {
  await displaydb.findByIdAndDelete(req.params.id)
  res.json({message:"Deleted Successfully"})
})


module.exports = router;