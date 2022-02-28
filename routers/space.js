const { Router } = require("express");
const Space = require("../models").space;
const Stories = require("../models").story;
const router = new Router();
const auth = require("../auth/middleware");
router.get("/", async(req,res) => {
    try{
        console.log("inside getdata");
        const prodData = await Space.findAll( {include:Stories});
        console.log(res);
        res.send(prodData);
    }
    catch(e){
        console.log(e);
    }
});
router.get("/:id",async(req,res) => {
    try{
       console.log(req.params);
        const { id } = req.params;
        console.log(id);
        const storydetail = await Stories.findAll( {where: {spaceId:id} ,include:Space});
                               
        console.log(res);
        res.send(storydetail);

    }
    catch(e)
    {
        console.log(e);
    }
})
router.delete('/:id', async (req, res,next) => {
    try {
      
      const storyId = req.params.id;
      const thestory = await Stories.findByPk(storyId);
      if (!thestory) {
        return res.status(404).send("No story found");
      }
      await thestory.destroy();    
      res.send({ message: "Deleted story", storyId });
      
    } catch (error) {
      console.log(error.message);
      next(error);
    }
  });
  router.post("/:id/stories", auth, async (req, res) => {
    const space = await Space.findByPk(req.params.id);
    console.log("my space",space);
  
    if (space === null) {
      return res.status(404).send({ message: "This space does not exist" });
    }
  
    if (!space.userId === req.user.id) {
      return res
        .status(403)
        .send({ message: "You are not authorized to update this space" });
    }
  
    const { name, imageUrl, content } = req.body;
  
    if (!name) {
      return res.status(400).send({ message: "A story must have a name" });
    }
  
    const story = await Stories.create({
      name,
      imageUrl,
      content,
      spaceId: space.id,
    });
  
    return res.status(201).send({ message: "Story created", story });
  });

  router.patch("/:id", auth, async (req, res) => {
    const space = await Space.findByPk(req.params.id);
    if (!space.userId === req.user.id) {
      return res
        .status(403)
        .send({ message: "You are not authorized to update this space" });
    }
  
    const { title, description, backgroundColor, color } = req.body;
  
    await space.update({ title, description, backgroundColor, color });
  
    return res.status(200).send({ space });
  });
module.exports = router;
