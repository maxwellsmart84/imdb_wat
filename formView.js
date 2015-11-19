var Backbone = require('backbone');
var $ = require('jquery');
var _ = require('underscore');
var tmpl = require('./templates');
var MovieModel = require("./movieModels");
Backbone.$ = $;


module.exports = Backbone.View.extend ({
  class: 'addMovie',
  events: {
    'submit form': 'onSubmitData'
  },
  initialize: function(){
    if (!this.model) {
      this.model = new MovieModel();
    }
  },
  onSubmitData: function (event) {
    event.preventDefault();
    var newMovie = {
        title: this.el$.find('input[name="title"]').val(),
        picture: this.el$.find('input[name="img"]').val(),
        year: this.el$.find('input[name="year"]').val(),
        rating: this.el$.find('input[name="rating"]').val(),
        plot: this.el$.find('input[name="plot"]').val(),
      };
      this.model.set(newMovie);
      this.model.save();
      this.$el.find('input, textarea').val('');
    },
    template: _.template(tmpl.form),
    render: function(){
      var markUp = this.template(this.model.toJSON());
      this.$el.html(markup);
      return(this);
    }
});
