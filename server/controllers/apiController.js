import dotenvx from '@dotenvx/dotenvx';
dotenvx.config();

const apiController = {};

apiController.getRecipes = (req, res, next) => {
    //console.log(req.query);
    const testFood = 'potato';
    const queryString = `https://api.edamam.com/api/recipes/v2?type=public&q=${testFood}&app_id=${process.env.API_ID}&app_key=${process.env.API_KEY}`;
    fetch(queryString)
    .then(data => {
        return data.json();
    })
    .then(response => {
        const recipeStorage = [];
        try{
            for(let element of response.hits){
                const recipes = {};
                recipes.recipeName = element.recipe.label;
                recipes.imageLink = element.recipe.image;
                recipes.url = element.recipe.url;
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

