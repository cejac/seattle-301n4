var articles = [];

function Article (opts) {
  this.author = opts.author;
  this.authorUrl = opts.authorUrl;
  this.title = opts.title;
  this.category = opts.category;
  this.body = opts.body;
  this.publishedOn = opts.publishedOn;
}

Article.prototype.toHtml = function() {
  // TODO: Use handlebars to render your articles.
  //       - Get your template from the DOM.
  //       - Now "compile" your template with Handlebars.
<<<<<<< HEAD
  var templateScript = $('#section-template').html();
  var template = Handlebars.compile(templateScript);

  this.daysAgo = parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000);
  this.publishStatus = this.publishedOn ? 'published ' + this.daysAgo + ' days ago' : '(draft)';

  var context = {
    title: this.title,
    author: this.author,
    authorUrl: this.authorUrl,
    body: this.body,
    publishedOn: this.publishStatus
  };

  var compiledHtml = template(context);
=======
>>>>>>> ef9f1d8c13f158955751684720816ec7030f72e4

  // DONE: If your template will use properties that aren't on the object yet, add them.
  //   Since your template can't hold any JS logic, we need to execute the logic here.
  //   The result is added to the object as a new property, which can then be referenced by key in the template.
  //   For example, you might want to display how old a post is, or say "(draft)" if it has no publication date:
<<<<<<< HEAD

  // TODO: Use the function that Handlebars gave you to return your filled-in html template for THIS article.

  return compiledHtml;
=======
  this.daysAgo = parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000);
  this.publishStatus = this.publishedOn ? 'published ' + this.daysAgo + ' days ago' : '(draft)';

  // TODO: Use the function that Handlebars gave you to return your filled-in html template for THIS article.
>>>>>>> ef9f1d8c13f158955751684720816ec7030f72e4
};

rawData.sort(function(a,b) {
  return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
});

rawData.forEach(function(ele) {
  articles.push(new Article(ele));
<<<<<<< HEAD
});

articles.forEach(function(a){
  $('#articles').append(a.toHtml());
=======
})

articles.forEach(function(a){
  $('#articles').append(a.toHtml())
>>>>>>> ef9f1d8c13f158955751684720816ec7030f72e4
});
