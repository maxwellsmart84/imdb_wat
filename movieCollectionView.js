

var Backbone = require('backbone');
var $ = require('jquery');
var _ = require('underscore');
Backbone.$ = $;
var MovieView = require('./movieModelView');
var MovieModel = require('./movieModels');

module.exports = Backbone.View.extend ({
  el: '.container',
  events: {
    'submit #submitBtn': 'submitData'
  },

  submitData: function (event){
    event.preventDefault();
    console.log("fuck this");
    var titleIn = $('#titleInput').val();
    var imgIn = $('#imgInput').val();
    var plotIn = $('#plotInput').val();
    var ratingIn = $('#ratingInput').val();
    var releaseIn = $('#releaseInput').val();
    var newMovieIn = new MovieModel({title: titleIn, picture: imgIn, plot: plotIn, year: releaseIn, rating: ratingIn });
    newMovieIn.save();
  }

});
