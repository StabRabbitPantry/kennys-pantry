import ('@dotenvx/dotenvx').config()
const apiController = {};

apiController.getRecipes = (req, res, next) => {
    console.log(req.query);
    const queryString = `https://api.edamam.com/api/recipes/v2`
    //fetch()
};

export default apiController;

