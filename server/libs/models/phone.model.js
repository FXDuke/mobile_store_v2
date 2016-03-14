/**
 * Created by IlyaLitvinov on 13.03.16.
 */
const mongoose = require('./mongoose');

const Schema = mongoose.Schema;

const PhoneSchema = new Schema({
    additionalFeatures:  {
        type: String
    },
    android: {
        type: Object,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    availability: {
        type: Array,
        required: true
    },
    battery: {
        type: Object,
        required: true
    },
    camera: {
        type: Object,
        required: true
    },
    connectivity:{
        type: Object,
        required: true
    },
    description: {
        type: Array,
        required: true
    },
    display: {
        type: Object,
        required: true
    },
    hardware: {
        type: Object,
        required: true
    },
    images: {
        type: Array,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    sizeAndWeight:{
        type: Object,
        required: true
    },
    storage: {
        type: Object,
        required: true
    }
});

const Phone = mongoose.model('Phone', PhoneSchema);

module.exports = Phone;