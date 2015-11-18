
var Backbone = require('backbone');
var PictureModel = require('./movieModels');

module.exports = Backbone.Collection.extend({
  url: 'http://tiny-tiny.herokuapp.com/collections/maxsimdb',
  model: PictureModel
});
