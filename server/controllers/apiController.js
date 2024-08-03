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
        res.locals.recipes = response.hits;
        console.log(response.hits);
    })
};

export default apiController;

