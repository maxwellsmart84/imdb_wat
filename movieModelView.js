var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
var tmpl = require('./templates');
Backbone.$ = $;

module.exports = Backbone.View.extend ({
    tagName: 'li',
    initialize: function(){},
    template: _.template(tmpl.movie),
    render: function (){
      var markUp = this.template(this.model.toJSON());
      this.$el.html(markUp);
      return this;
    }

});
