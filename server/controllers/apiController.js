import dotenvx from '@dotenvx/dotenvx';
dotenvx.config();

const apiController = {};

apiController.getRecipes = (req, res, next) => {
    //console.log(req.query.ingredient);
    //const testFood = 'potato';
    const queryString2 = `https://api.edamam.com/api/recipes/v2?type=public&q=${req.query.ingredient}&app_id=${process.env.API_ID}&app_key=${process.env.API_KEY}`;
    const queryString = `https://api.edamam.com/api/recipes/v2?type=public&q=${req.query.ingredient}+Chocolate&app_id=a0f5c6b0&app_key=7085324cb79106e0467bc69332cd3bef`;
    fetch(queryString)
    .then(data => {
        return data.json();
    })
    .then(response => {
        //console.log(response.hits[0].recipe.ingredientLines);
        const recipeStorage = [];
        const iteration = response.hits;
        console.log(iteration)
        try{
            for(let element of response.hits){
                const recipes = {};
                recipes.recipeName = element.recipe.label;
                recipes.imageLink = element.recipe.image;
                recipes.url = element.recipe.url;
                recipes.ingredientAmount = element.recipe.ingredientLines;
                const ingredients = [];
                for(let elementIngredient of element.recipe.ingredients){
                    ingredients.push(elementIngredient.food);
                }
                recipes.ingredients = ingredients;
                recipeStorage.push(recipes);
            }
            //console.log(recipeStorage[0]);
            res.locals.recipeData = recipeStorage;
            next();
        }
        catch (error) {
            const err = {
                log: 'apiController.getRecipes parsing error: ' + error,
                status: 500,
                message: { err: 'An error occurred' }
              };
            next(err);
        }
    })
    .catch(error => {
        const err = {
            log: 'apiController.getRecipes API fetch error: ' + error,
            status: 500,
            message: { err: 'An error occurred' }
          };
        next(err);
    });
};

export default apiController;


