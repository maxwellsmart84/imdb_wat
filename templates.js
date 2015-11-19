module.exports = {
  movie: [
    '<h2><%= title %></h2>',
    '<h4><%= year %></h4>',
    '<img src= "<%= picture %>">',
    '<h3><%= rating %></h3>',
    '<p><%= plot %></p>',
  ].join(""),

  form: [
    '<form>',
      '<div cl ass="form-group">',
        '<label for="titleInput">Movie Title</label>',
        '<input id= "titleInput" type="text" name="title" value="">',
      '</div>',
      '<div class="form-group">',
        '<label for="imgInput">Movie Cover</label>',
        '<input id= "imgInput" type="text" name="image" value="">',
      '</div>',
      '<div class="form-group">',
        '<label for="plotInput">Plot</label>',
        '<input id = "plotInput" type="text" name="plot" value="">',
      '</div>',
      '<div class="form-group">',
        '<label for="ratingInput">Rating</label>',
        '<input id="ratingInput" type="number" name="rating" value="">',
      '</div>',
      '<div class="form-group">',
        '<label for="releaseInput">Year Made</label>',
        '<input id ="releaseInput" type="number" name="year" value="">',
      '</div>',
      '<button id="submitBtn" type="submit" class= "btn btn-lg"name="button">Submit</button>',
      '</form>',

  ].join("")
};
