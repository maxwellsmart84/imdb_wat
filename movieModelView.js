

var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
Backbone.$ = $;

module.exports = Backbone.View.extend ({
    tagname: 'li',
    className: 'movieBox'
    template: _.template($('#movieTempl').html()),
    
});
