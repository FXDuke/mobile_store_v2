/**
 * Created by IlyaLitvinov on 13.03.16.
 */
'use strict';

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var Schema = _mongoose2['default'].Schema;

var PhoneSchema = new Schema({
  additionalFeatures: {
    type: String
  },
  android: {
    type: Object,
    required: true
  },
  price: {
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
  connectivity: {
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
  sizeAndWeight: {
    type: Object,
    required: true
  },
  storage: {
    type: Object,
    required: true
  }
});

var Phone = _mongoose2['default'].model('Phone', PhoneSchema);

exports.Phone = Phone;
//# sourceMappingURL=phone.js.map
