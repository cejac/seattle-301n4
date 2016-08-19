(function(module) {
  var articlesController = {};

  // TO: Create the `articles` table when the controller first loads, with the code that used to be in index.html:
  Article.createTable();

  // TO: Setup a function that kicks off the fetching and rendering of articles, using the same
  // code that used to be in index.html.
  // TO: Also be sure to hide all the main section elements, and reveal the #articles section:
  articlesController.index = function() {
    Article.fetchAll(articleView.initIndexPage);
    $('main section').hide();
    $('#articles').show();
  };

  module.articlesController = articlesController;
})(window);
