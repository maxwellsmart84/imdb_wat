

var Backbone = require('backbone');

//Model Constructor
module.exports = Backbone.Model.extend ({
  urlRoot: 'http://tiny-tiny.herokuapp.com/collections/maxsimdb',
  idAttribute: '_id',
  defaults: function() {
    return {
    rating: 0,
    picture: "http://ia.media-imdb.com/images/M/MV5BMTA4MDQxNTk2NDheQTJeQWpwZ15BbWU3MDE2NjIyODk@._V1_SX214_AL_.jpg",
    title: "Blade Runner",
    plot: "A blade runner must pursue and try to terminate four replicants who stole a ship in space and have returned to Earth to find their creator.",
    year: 1982,
  };
},
  initialize: function(){

  }
});
