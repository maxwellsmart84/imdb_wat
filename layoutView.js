var Backbone = require('backbone');
var $ = require('jquery');
var _ = require('underscore');
var tmpl = require('./templates');
var FormView = require('./formView');
var MoviesView = require('./movieCollectionView');
var MovieCollection = require('./movieCollection');
Backbone.$ = $;

module.exports = Backbone.View.extend ({
  el: '#layoutView',
  initialize: function(){
    var self = this;
    var formHTML = new FormView();
    var movieHTML = new MoviesView();
    var movieCollection = new BookCollection();
    movieCollection.fetch().then(function(){
      console.log('this works');
      var moviesView = new MoviesView({collection: movieCollection});
      console.log('this is working');
      self.$el.find('form').html(formHTML.render().el);
      self.$el.find('ul').html(movieHTML.render().el);
    });
  }

});
