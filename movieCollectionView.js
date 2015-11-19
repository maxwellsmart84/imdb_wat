

var Backbone = require('backbone');
var $ = require('jquery');
var _ = require('underscore');
Backbone.$ = $;
var MovieView = require('./movieModelView');


module.exports = Backbone.View.extend ({
  el: '.container',

  addOne: function (model){
      console.log(model);
      var modelView= new MovieView({model:model});
      this.$el.append(modelView.render().el);
  },

  addAll: function (){
    _.each(this.collection.model, this.addOne, this);
  },

  initialize: function(){
    this.addAll();
  }

});
