import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const favouritesSchema = new Schema({
    userID: {type: String, required: true},
    favourites: {type: Array, required: true},
})

const Favourites = mongoose.model('Favourites', favouritesSchema);

export default Favourites;