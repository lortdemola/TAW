import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';
import mongoConverter from '../service/mongoConverter';
import * as _ from "lodash";

const productSchema = new mongoose.Schema({
    title: {type: String},
    image: {type: String},
    price: {type: String},
    description: {type: String},
    seller: {type: String},
    contactEmail: {type: String},
}, {
    collection: 'kacperD-post'
});
productSchema.plugin(uniqueValidator);
const ProductModel = mongoose.model('post', productSchema);

async function query() {
    const result = await ProductModel.find({});
    {
        if (result) {
            return mongoConverter(result);
        }
    }
}

async function get(id) {
    return ProductModel.findOne({_id: id}).then(function (result) {
        if (result) {
            return mongoConverter(result);
        }
    });
}

async function createNewOrUpdate(data) {
    return Promise.resolve().then(() => {
        if (!data.id) {
            return new ProductModel(data).save().then(result => {
                if (result[0]) {
                    return mongoConverter(result[0]);
                }
            });
        } else {
            return ProductModel.findByIdAndUpdate(data.id, _.omit(data, 'id'), {new: true});
        }
    });
}
async function remove(id) {
    return ProductModel.deleteOne({_id: id});
}
export default {
    query: query,
    get: get,
    createNewOrUpdate: createNewOrUpdate,
    remove:remove,

    model: ProductModel
};
