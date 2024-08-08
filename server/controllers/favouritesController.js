const Favourites = require('../models/favouritesModel.js');

const favouritesController = {};

favouritesController.createFavourites = async (req, res, next) => {
    try {
      const userId = res.locals.data.user.id;
      const favourites = await Favourites.create({ userID: userId, favourites: [] });
      return next()
    } 
    
    catch (e) {
      return next({
        message: 'Error occurred in favouritesController.createFavourites',
        log: e,
      });
    }
};

favouritesController.addFavourites = async (req, res, next) => {
    try {
        const userID = req.user.id;
        const productId = req.body.id;
        const favouritesExists = await Favourites.findOne({ userID: userID });
        favouritesExists.favourites.push(productId);
        await favouritesExists.save();
        res.status(200).json(favouritesExists);
        next();
    } 
    
    catch (e) {
        return next({
          message: 'Error occurred in favouritesController.addCart',
          log: e,
        });
    }
}