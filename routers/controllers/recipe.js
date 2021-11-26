const recipeModel = require("./../../db/models/recipeSchema");
const userModel = require("./../../db/models/userSchema");
//show all recipes
const getAllRecipes = (req, res) => {
  recipeModel
    .find({})
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.send(err);
    });
};

//show all recipes for user
const getAllUserRecipes = async (req, res) => {
  const { id } = req.params;
  const publisher = await userModel.findById({ _id: id });
  recipeModel
    .find({publisher})
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.send(err);
    });
};
// show recipe by id "/recipe", getRecipe
const getRecipe = (req, res) => {
  const { id } = req.params;
  recipeModel
  .findById({ _id: id })
  .then((result) => {
    res.send(result);
  })
  .catch((err) => {
    res.send(err);
  });
};

//Edit recipe by id "/recipe/:id", editRecipe
const editRecipe = (req, res) => {
  const { id } = req.params;
  const { title, image, ingredients, directions, extraNote, isDeleted } =
    req.body;

  if (title) {
    recipeModel
      .findByIdAndUpdate({ _id: id }, { title: title }, { new: true })
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        res.send(err);
      });
  }

  if (image) {
    recipeModel
      .findByIdAndUpdate({ _id: id }, { image: image }, { new: true })
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        res.send(err);
      });
  }

  if (ingredients) {
    recipeModel
      .findByIdAndUpdate(
        { _id: id },
        { ingredients: ingredients },
        { new: true }
      )
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        res.send(err ,{message: err.message});
      });
  }

  if (extraNote) {
    recipeModel
      .findByIdAndUpdate({ _id: id }, { extraNote: extraNote }, { new: true })
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        res.send(err);
      });
  }

  if (directions) {
    recipeModel
      .findByIdAndUpdate({ _id: id }, { directions: directions }, { new: true })
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        res.send(err);
      });
  }

  if (isDeleted) {
    recipeModel
      .findByIdAndUpdate({ _id: id }, { isDeleted: true }, { new: true })
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        res.send(err);
      });
  }
};

//Soft delete "/recipe/:id", deleteRecipe
const deleteRecipe = (req, res) => {
  const { id } = req.params;
  recipeModel
    .findOneAndUpdate({ _id: id }, { isDeleted: true }, { new: true })
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.send(err);
    });
};

////add new recipe "/recipe", addRecipe
const addRecipe = async (req, res) => {
  try {
    const recipe = new recipeModel(req.body);
    await recipe.save();
    const publisher = await userModel.findById({ _id: recipe.publisher });
    publisher.publishedRecpie.push(recipe);
    await publisher.save();
    res.status(200).json({ data: recipe , message: 'success'});
  } catch (err) {
    res.status(400).json({message: err.message });
  }
};

module.exports = {
  getAllRecipes,
  getRecipe,
  addRecipe,
  editRecipe,
  deleteRecipe,
  getAllUserRecipes
};
