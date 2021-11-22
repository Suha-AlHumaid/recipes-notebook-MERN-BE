const express = require("express");

//destructuring
const {
  getAllRecipes,
  getRecipe,
  addRecipe,
  editRecipe,
  deleteRecipe,
} = require("../controllers/recipe");


const recipeRouter = express.Router();

///show recipes router
recipeRouter.get("/recipes", getAllRecipes);

// get recipe by params(id) router
recipeRouter.get("/recipe/:id", getRecipe);

////add new recipe router
recipeRouter.post("/recipe", addRecipe);

//Edit recipe by params(id) router
recipeRouter.put("/recipe/:id", editRecipe);

//Soft delete router
recipeRouter.delete("/recipe/:id", deleteRecipe);

module.exports = recipeRouter;
